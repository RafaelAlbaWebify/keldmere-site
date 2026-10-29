import {readFileSync} from "node:fs";
const file=process.argv[2];
if(!file){console.error("Usage: node scripts/evaluate-package-economics.mjs <scenario.json>");process.exit(2)}
const payload=JSON.parse(readFileSync(file,"utf8"));
if(!Array.isArray(payload.offers)||!payload.offers.length)throw new Error("At least one offer is required");
const finite=(n)=>typeof n==="number"&&Number.isFinite(n);
const rows=payload.offers.map(o=>{
 if(![o.revenue_ex_tax,o.direct_costs,o.delivery_hours].every(finite)||o.revenue_ex_tax<0||o.direct_costs<0||o.delivery_hours<=0)throw new Error("Invalid nonnegative money or positive hours in: "+o.name);
 const contribution=o.revenue_ex_tax-o.direct_costs;
 return {name:o.name,revenue_ex_tax:o.revenue_ex_tax,direct_costs:o.direct_costs,delivery_hours:o.delivery_hours,contribution_before_labour:Number(contribution.toFixed(2)),contribution_per_hour:Number((contribution/o.delivery_hours).toFixed(2))};
});
console.log(JSON.stringify({classification:payload.scenario_kind??"unclassified",currency:payload.currency,excludes:"labour cost, overhead, tax and unmeasured risk",rows},null,2));
