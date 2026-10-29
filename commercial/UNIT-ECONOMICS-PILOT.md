# Unit economics / pilot protocol — Keldmere

This is a **decision-support method**, not a forecast or financial report. No verified Keldmere customer delivery dataset is recorded in the repository.

## Exact fields per measured job
A worklog row: date, project reference (no sensitive customer data), package, activity, minutes, change request flag, recorded by. A spend row: date, project, purpose, amount, currency, invoice/receipt evidence, whether recurring or attributable. A quote row: project, agreed price/currency, tax status, scope version, status (draft/accepted/paid), and authorised delivery start.

**Avoid mixing currencies.** Convert costs to the invoice currency with a documented transaction exchange rate, date and any FX fees. No rate is assumed here.

## Derived indicators
- Actual hours = sum of recorded delivery, revisions, contact, QA, handover, recurring maintenance and incident work for the period.
- Direct contribution before labour = price excluding tax minus directly attributable third-party costs, processing costs and refunds.
- Effective contribution per hour = direct contribution before labour divided by actual hours, **only when hours > 0**.
- Contribution after internal labour provision = direct contribution before labour minus (actual hours multiplied by approved internal hourly cost). An internal rate has not yet been selected.
- Overhead, tax, social charges and insurance require separate allocation before a net profit claim.

## Decision criteria (awaiting approval)
For each product: owner-approved minimum contribution per delivery hour, maximum delivery hours at the quote price, allowed out-of-scope/change process, expected recurring churn/support effort, and at least one measured representative build or internal exercise. Do not turn worked examples into sales evidence.

## Worked arithmetic — hypothetical only
At a proposed US$599 starter price, before any expenses: 12 hours implies US$49.92/hour gross; 20 hours implies US$29.95/hour gross. These figures do not establish viability. At US$99/month for 12 months, nominal billed total would be US$1,188 excluding taxes, before hosting, payment fees, support or customer non-payment. No actual cost or margin is estimated.

## Reproducible check
Run `node scripts/evaluate-package-economics.mjs commercial/economics-scenario.example.json`. This explicitly marked **hypothetical** scenario file tests the arithmetic and allows input replacement with verified measurements; do not publish its output as actual performance.

A real-case input should be stored privately when it contains customer-sensitive details. A public-repo example must remain fictional.
