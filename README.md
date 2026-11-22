# CareFlow: cleaning and maintenance coordination prototype

CareFlow is a minimal UX prototype for **cleaning and maintenance optimization** at a campus inspired by IIT Gandhinagar. It is not presented as a description of IITGN's current internal workflow. The current workflow problems below are design hypotheses based on the scale and role diversity visible in the supplied housekeeping tender, and should be validated through contextual inquiry.

## Prototype goal

Turn a vague, hard-to-follow campus complaint into a clear, visible work item:

`report -> triage / assign -> work in progress -> completion evidence -> confirm or reopen`

### QR location entry point

The resident view now includes real, self-contained location-specific QR labels for four seeded locations: Hostel H second-floor washroom, Academic Block 4 east stairs, Library north wing and Central Dining corridor. Each QR payload is a URL such as `...?spot=hostel-h-2`; scanning it opens CareFlow directly in the reporting view with the location selected. The labels are generated as local SVG assets, so the page does not depend on a QR CDN at runtime. The QR card and image use responsive sizing: they expand for legibility on a large screen and stack cleanly above the controls on a phone. This removes the need to type a building, floor and landmark while standing in front of a problem. The prototype includes a label preview and a copyable scan link for demonstration or printing.

The artifact has three deliberately different views:

| User | Main need | Prototype support |
| --- | --- | --- |
| Student / resident | Raise a problem without knowing who is responsible | Very short report flow with familiar categories, location and optional photo |
| Cleaner / maintenance worker | Know what to do next while moving around campus | Mobile-friendly job card, clear place, status, note, supplies and escalation actions |
| Supervisor | Coordinate people across locations without losing judgement | Visible assignment queue, area grouping, workload cues, recurring-pattern prompts, manual override |

## Role-aware access and languages

The prototype begins with a role-selection sign-in. It is intentionally a **demonstration authentication flow**, not a real IITGN identity system: it stores the selected role only in the browser session and uses no personal data. Each role sees only the part of the application relevant to its work:

| Selected role | Visible workspace |
| --- | --- |
| Student / resident | Report an issue, including the location QR workflow |
| Cleaning / maintenance staff | Assigned work queue and job-card actions |
| Operations supervisor | Overview and dispatch board |

The role-selection screen and the complete resident reporting/QR flow can be switched between English, Hindi and Gujarati. The site remembers the selected display language locally in the browser. Task names and campus-location data remain in English so operational labels are consistent in the prototype.

## Evidence and scope

`iitgn_example.pdf` shows a large contracted operation with, among other roles, housekeeping staff, housekeeping supervisors, horticulture staff and supervisors, hostel caretakers, office attendants, technical assistants, managers and maintenance personnel. It also lists cleaning consumables and equipment. CareFlow limits its scope to **cleaning and maintenance operations**: reporting, routing, work status, escalation and supervisor visibility. It does not attempt to manage horticulture, procurement, payroll or the tender itself.

## Design hypotheses to validate

These are not claims about IITGN's actual workflow.

1. Requests may be reported through fragmented informal channels, making ownership and status unclear.
2. A resident may not know whether a problem belongs to cleaning, maintenance, supplies or a different unit.
3. Supervisors may need to combine urgency, location, skills and current workload while still being able to override a suggested assignment.
4. Workers benefit from concise, location-specific job cards rather than a data-heavy desktop interface.
5. Requesters benefit from a feedback loop: acknowledgement, progress, completion evidence and the option to reopen.

## Course principles followed

### Direction B and refinement cycle

The final-project brief asks for a new design, a minimal prototype and a simple evaluation showing a UX refinement cycle. CareFlow is a new, intentionally constrained interaction design rather than an enterprise system. The code supports a walkthrough of all three roles and state changes.

### Affordance, constraints, mapping, visibility and feedback

| Principle taught in `fux-3-PRINCIPLES.pdf` | CareFlow decision |
| --- | --- |
| Affordance | Large, action-named controls such as “Report an issue”, “Mark completed”, “Need supplies” and “Escalate” suggest their consequence. |
| Constraints | The reporting form requires a location; mutually exclusive issue categories reduce ambiguous routing; completion is a distinct final action. |
| Mapping | Status labels and colour treatments map to operational states: high/soon/maintenance, assigned, completed and confirmed. |
| Visibility | The resident receives a ticket; staff see an actionable queue; the supervisor sees unassigned work, reasons for ordering and team availability. |
| Feedback loop | Submission confirms a ticket, a worker records completion, and the resident can confirm or reopen. |
| Mental models | The system uses the familiar metaphor of a service ticket / job card rather than presenting optimisation mathematics or an opaque algorithm. |
| Cognition in context | Workers get short, mobile-sized cards and action choices at the point of work; supervisors get concise patterns rather than an overloaded dashboard. |

### Augmentation instead of replacement

The dashboard shows a *suggestion* and the reason it is ranked, then leaves assignment with the supervisor. This follows the augmentation theme from `fux-2a-Augmentation.pdf`: the digital artifact supports coordinated human activity rather than claiming to automate staff judgement.

### Understanding people and context

The approach follows the contextual-design material in `fux-4-UNDERSTANDING.pdf`:

1. **Contextual inquiry:** observe and interview a small number of residents, cleaners/maintenance workers and supervisors in their usual setting; examine real request forms, registers, group messages or job sheets where permission is granted.
2. **Work models:** map how a reported issue becomes work, where hand-offs happen, and what information gets lost. Separate cleaning, maintenance and escalation pathways.
3. **Affinity/consolidation:** group observations into themes such as “location ambiguity”, “no completion evidence”, “shift hand-over” and “supply dependency”.
4. **Personas and scenarios:** use the three focused roles above. Personas are tools for a specific work context, not a replacement for research.
5. **Mock-up and test:** test the clickable prototype early, observe hesitation and mistaken interpretations, then revise.

## Proposed evaluation

Conduct 4–6 short moderated usability sessions, ideally including at least one participant resembling each role. Give each participant one task:

| Participant | Scenario | Success observations |
| --- | --- | --- |
| Resident | “The wash-basin near your hostel room has been leaking. Report it.” | Chooses a category and location; understands what will happen next; can find a status explanation. |
| Worker | “You are assigned the leaking tap. Start, complete and leave useful evidence.” | Finds task/place; identifies the completion action; understands supplies/escalation. |
| Supervisor | “Three tasks are waiting. Decide whom to send and explain why.” | Notices urgency, skill/location information and understands that suggestions can be overridden. |

Record completion, hesitation, errors, comments and observed mental-model mismatches. A plausible first refinement would be changing any label that participants confuse (for example, separating “washroom supplies” from “repair or maintenance”) and strengthening location selection if they cannot find a specific space quickly.

## Implementation

This is a buildless static prototype in `dist/index.html`; no account, personal data or real IITGN operational data is used. State changes are intentionally local to the browser session and exist to support a presentation and usability walkthrough.

## Report material / references

- Guimarães, N. *Foundations of User Experience: Final Project Guidelines*, IIT Gandhinagar, 2026–27. Supplied as `FinalProject.pdf`.
- Guimarães, N. *Foundations of User Experience: Principles & Models of Interaction*, IIT Gandhinagar, 2026–27. Supplied as `Lecture Slides/fux-3-PRINCIPLES.pdf`.
- Guimarães, N. *Foundations of User Experience: Understanding the World of Experiences*, IIT Gandhinagar, 2026–27. Supplied as `Lecture Slides/fux-4-UNDERSTANDING.pdf`.
- Guimarães, N. *Foundations of User Experience: Augmentation*, IIT Gandhinagar, 2026–27. Supplied as `Lecture Slides/fux-2a-Augmentation.pdf`.
- IIT Gandhinagar housekeeping, horticulture and allied services tender snapshot. Supplied as `iitgn_example.pdf`.
- Norman, D. A. (2013). *The Design of Everyday Things* (Revised and expanded ed.). Basic Books.
- Beyer, H. & Holtzblatt, K. (1998). *Contextual Design: Defining Customer-Centered Systems*. Morgan Kaufmann.
- Nielsen, L. (2019). *Personas: User Focused Design* (2nd ed.). Springer.
