import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
const root=path.resolve("public");
const allowed=new Set([".avif",".webp",".jpg",".jpeg",".png",".svg"]);
const maxImage=500*1024;
const maxImages=3*1024*1024;
const files=[];
const registry=JSON.parse(await readFile(path.resolve("commercial/IMAGE-ASSET-REGISTER.json"),"utf8"));
const assets=registry.assets||[];
const registered=new Map(assets.map(a=>[a.path,a]));
async function walk(dir){
 for(const e of await readdir(dir,{withFileTypes:true})){
  const full=path.join(dir,e.name);
  if(e.isDirectory())await walk(full);
  else if(e.isFile()&&allowed.has(path.extname(e.name).toLowerCase()))files.push(full);
 }
}
await walk(root).catch(e=>{if(e.code!=="ENOENT")throw e});
let total=0,errors=[];
for(const f of files){
 const size=(await stat(f)).size;total+=size;
 const relative=path.relative(path.resolve("."),f).replaceAll(path.sep,"/");
 if(relative.startsWith("public/images/")){
  const item=registered.get(relative);
  if(!item)errors.push(`${relative} is missing from IMAGE-ASSET-REGISTER.json`);
  else if(!item.source || !item.usage_basis || !["ai_generated","licensed_photo"].includes(item.type) || item.approved_for_demo!==true)errors.push(`${relative} lacks verified provenance, usage basis or demo approval`);
 }
 if(size>maxImage)errors.push(`${path.relative(root,f)} exceeds 500 KiB (${size} bytes)`);
 if(path.extname(f).toLowerCase()===".svg"){
  const text=await readFile(f,"utf8");
  if(/<script\b|onload\s*=|<foreignObject\b/i.test(text))errors.push(`${path.relative(root,f)} contains potentially executable SVG content`);
 }
}
for(const [assetPath] of registered){
 if(!files.some(f=>path.relative(path.resolve("."),f).replaceAll(path.sep,"/")===assetPath))errors.push(`Registered image ${assetPath} not found`);
}
if(total>maxImages)errors.push(`Total image assets exceed 3 MiB (${total} bytes)`);
console.log(JSON.stringify({imageCount:files.length,totalImageBytes:total,maxImageBytes:maxImage,totalBudgetBytes:maxImages,errors},null,2));
if(errors.length)process.exitCode=1;
