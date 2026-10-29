import{a as l,f as c}from"./DzR_OBTb.js";import"./C5WkUUX-.js";import{x as e,i as u}from"./DE_BJ79s.js";import{l as f,s as m}from"./1uPJYkyn.js";import{R as g}from"./DnJR_ksP.js";import{C as b,Q as v}from"./BeVFYwcf.js";import{D as w}from"./CSWO7aDC.js";import{R as k}from"./B-_I2LDX.js";const t={layout:"runbook",title:"#4471 reviewed: two causes behind the date reports",owner:"support desk",status:"resolved",reviewed:"2026-10-29",signature:"Codex for k-dang · S01E03"},{layout:O,title:S,owner:q,status:B,reviewed:z,signature:y}=t;var _=c(`<p>This review supersedes the interpretation in <a href="/kb/incidents/4471/">the original incident</a>.
The export is a snapshot from 4 October 2026, not the current support queue.</p> <h2>Engineering disposition — 5 October</h2> <p>The [course support desk] (<a href="https://hq.mega.dev/challenges/what-it-shows" rel="nofollow">https://hq.mega.dev/challenges/what-it-shows</a>) reports
that #4471 closed on 5 October. The parser was <strong>fixed</strong> by <code>fix(dates): parse dd/mm for eu locales</code>. The hint was <strong>won’t fix</strong> because
the booking-v3 form was retired. These are different outcomes: closing the hint
ticket does not mean its hint was corrected.</p> <p>The public follow-up tickets preserve those dispositions: <a href="https://github.com/k-dang/mega-dev-s01e03/issues/1" rel="nofollow">parser — completed</a> and <a href="https://github.com/k-dang/mega-dev-s01e03/issues/2" rel="nofollow">hint — not planned</a>.
The tables below preserve the export’s historical report counts and classification.</p> <h2>What the evidence shows</h2> <p>The table below removes overlapping export rows by report ID, limits the population to
ticket #4471, and groups reports using the tenant’s locale and booking form. Browser
locale and intake tags are guesses, not the cause. Counts update from the data at render time.</p> <!> <h3>Shared parser reads day-first dates month first</h3> <p>The shared parser interprets dates as month/day even for tenants whose locale writes
day/month. R-41200 intended 7 April but received 4 July. R-41201 reports the reverse.
Correct parsing must use the agreed date format rather than assume month first.
Keep this cause separate from the booking-form hint defect.</p> <h3>Booking-v3 prints a month-first hint for day-first tenants</h3> <p>Booking-v3 displays MM/DD/YYYY, so people follow a month-first instruction while the
form reads the date in the tenant’s day-first order. The affected path is a form report
from a day-first tenant running booking-v3. Booking-v2’s DD/MM/YYYY hint does not have
this mismatch. Correct the displayed hint to match the form’s interpretation and
validate that the same entered date yields the intended calendar date.</p> <p>The rendered table identifies which cause lacks its own ticket. The two GitHub issues
prepared with this review track these independent fixes and list their report IDs.</p> <h3>Five one-day descriptions need follow-up</h3> <p>R-41202, R-41209, R-41236, R-41344 and R-41620 are flagged in desk notes. Their bodies
include one-day differences, an invite preceding its booking, and a Lisbon/Toronto
difference. These descriptions do not establish a third confirmed root cause.
The existing tenant-based classifier includes them in parser; its footnote makes that
placement visible. Retain those IDs for timezone/date-boundary investigation rather
than silently treating them as proven month/day flips or double-counting them.</p> <h2>When reports arrived and when the desk merged them</h2> <!> <p>The chart distinguishes receipt from merge time. A bulk merge is a desk action, not
evidence that all failures began that week or share one cause.</p> <h2>Replace subject-only triage</h2> <p><a href="/kb/decisions/0001-dedupe-by-subject/">Decision 0001</a> is preserved as an accepted
historical record. Its subject-only rule merges unrelated failures and splits identical
failures expressed differently. It is stale according to the shared page layout’s
review-age rule. A recent incident review does not make that older decision current.</p> <p><a href="/kb/decisions/0002-dedupe-by-cause/">Decision 0002</a> proposes a replacement: read the body, resolve
the tenant, compare locale and booking form, and merge only on supported shared cause.
Keep reports with unknown tenants or uncertain causes separate until investigated.</p> <!> <h2>Desk action</h2> <p>Keep separate parser and hint tickets with their distinct dispositions and report IDs as the audit trail. Preserve
the five flagged reports for follow-up. Recompute against a fresh export before making
claims about today’s queue. Do not close incoming reports merely because #4471 is marked known.</p> <!>`,1);function T(i,n){const d=f(n,["children","$$slots","$$events","$$legacy"]);g(i,m(()=>d,()=>t,{children:(h,x)=>{var s=_(),r=e(u(s),12);b(r,{ticket:4471});var o=e(r,18);v(o,{ticket:4471});var a=e(o,10);w(a,{});var p=e(a,6);k(p,{get signature(){return y}}),l(h,s)},$$slots:{default:!0}}))}const A=Object.freeze(Object.defineProperty({__proto__:null,default:T,metadata:t},Symbol.toStringTag,{value:"Module"}));export{A as _,T as a};
