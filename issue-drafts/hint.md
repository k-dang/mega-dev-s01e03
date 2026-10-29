## Problem

Booking-v3 prints MM/DD/YYYY for day-first tenants, while its form reads dates in tenant order. People following the hint receive a swapped date. Booking-v2 prints DD/MM/YYYY and does not have this mismatch.

## Scope and evidence

Report count: **33** unique reports merged into #4471, across 3 tenants, received 2026-04-17 through 2026-09-22. The export is a snapshot from 2026-10-04.

The raw export has 427 rows and 412 unique report IDs; overlapping rows count once. These two cause groups are disjoint and total 412. Reproduce with npm run analyze.

Classification uses the tenant directory, Intl locale date order, channel and booking form through src/lib/kb/causes.ts. Intake tags and browser locales are not authoritative: this group was tagged parser: 15, hint: 18.

The affected tenants are alder.physio, copper.studio and pale.harbour. Each is day-first and runs booking-v3. App/email reports from those tenants remain in the parser group.

## Expected behavior and acceptance

Show a hint that agrees with the form parser for each tenant. In booking-v3 for a day-first tenant, following the displayed example must produce the intended date. Verify a booking-v2 control and keep the shared-parser fix separate.

## Knowledge-base review

Source: src/routes/kb/incidents/4471-review/+page.svx
Rendered: build/kb/incidents/4471-review/index.html

## Report IDs

R-41230, R-41241, R-41251, R-41259, R-41262, R-41275, R-41294, R-41305, R-41308, R-41366, R-41372, R-41384, R-41387, R-41396, R-41400, R-41406, R-41415, R-41416, R-41418, R-41428, R-41439, R-41441, R-41449, R-41453, R-41456, R-41460, R-41472, R-41485, R-41493, R-41539, R-41572, R-41582, R-41584
