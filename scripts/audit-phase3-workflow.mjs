import {readFileSync} from "node:fs";
const read=p=>readFileSync(p,"utf8");
const guide=read("commercial/VERIDRA-QUOTE-WORKFLOW.md");
const drill=read("commercial/PHASE3-ACCEPTANCE-DRILL.md");
const economic=read("commercial/UNIT-ECONOMICS-PILOT.md");
const proposal=read("commercial/PROPOSAL-TEMPLATE.md");
const page=read("src/app/page.tsx");
const checks={
operatorBoundary:guide.includes("process-level")&&guide.includes("127.0.0.1:8010"),
noAutomatedPricing:guide.includes("not** hours, price")&&guide.includes("operator approves"),
externalAcceptance:guide.includes("external signed terms")&&drill.includes("NOT RECEIVED"),
customerScope:proposal.includes("Agreed scope")&&proposal.includes("Ownership, hosting"),
safePublicAudit:guide.includes("publicly reachable")&&guide.includes("DNS/IP"),
realDataBoundary:economic.includes("No verified Keldmere customer delivery dataset"),
mailtoOnly:page.includes('const inbox="hello@keldmere.com"')&&page.includes("mailto:"),
nameMismatchFlagged:guide.includes("Webify Digital Solutions Ltd")&&guide.includes("Webify Limited"),
unexecutedDrill:drill.includes("- [ ] In local VERIDRA")
};
console.log(JSON.stringify({checks,allPass:Object.values(checks).every(Boolean)},null,2));
if(Object.values(checks).some(v=>!v))process.exitCode=1;
