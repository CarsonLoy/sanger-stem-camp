# Project Understanding

## 1. What the website is trying to accomplish

This website is a practical teaching guide for people who want to host their own version of the Sanger STEM Camp. It is not documentation about the original camp, a historical record, or a collection of curriculum notes.

Its central question is:

> What do I need to do next?

Every part of the website should help the organizer move forward. It should take the firsthand knowledge captured in the source files and present it in the order a future organizer needs it: deciding what to do, obtaining the right materials, preparing the activities, arranging the room, welcoming students, teaching each activity, managing breaks and pickup, troubleshooting problems, and completing any work that remains after students leave.

The original camp provides the evidence. The visitor's camp is the focus. Historical details matter when they help the reader understand why a recommendation exists, avoid a failure, or make a better decision. They should not turn the website into a retrospective about Sanger STEM Camp.

The content source files, including `Sanger_STEM_Camp_Day_1_Complete_Source.txt`, are the source of truth. The website is the presentation layer. It must not invent curriculum, silently fill factual gaps, summarize away operational detail, or remove details for the sake of a shorter page. Its job is to reorganize and present the complete information as clearly and intuitively as possible.

## 2. Target audience

The primary reader is someone preparing to host the same camp in their own setting: a teacher, robotics team, makerspace, school, club adviser, volunteer team, or other camp leader. They may understand the activities but have little experience turning them into a safe, well-paced day for elementary students.

This reader needs more than activity ideas. They need to know what to do and when to do it. They may need help anticipating student behavior, staging supplies, testing materials, assigning volunteers, explaining unfamiliar concepts, supervising transitions, fixing projects without taking them away from students, and finishing production work after the session.

The guide should not assume that readers have the same facilities, equipment, staffing, budget, or confidence as the original team. It should explain which conditions were specific advantages of the original camp and preserve the underlying reason for a recommendation so another organizer can adapt it intelligently.

The main instructional audience is the organizer, not the participating child. Student-facing worksheets, templates, and examples support the organizer at the moment they are used.

## 3. What the visitor experience should feel like

The visitor should feel as though an experienced teacher is beside them, calmly walking them through preparing and teaching the camp. The guide should be friendly, candid, practical, and confidence-building. It should make a complex day feel manageable without hiding the details that make it work.

The experience should resemble a strong Science Buddies guide: narrative enough to explain why an activity is worthwhile, structured enough to follow while preparing, and specific enough to use in the room. It should never feel like software documentation, an engineering wiki, a textbook, generated documentation, or a database of notes.

Time should create the momentum. A reader preparing for tomorrow should be able to open the relevant day and follow it from advance preparation through the final tasks after students leave. At every point, the next action should be obvious. Warnings, downloads, materials, photographs, and troubleshooting advice should appear exactly where they become useful.

Visually, the site should be friendly, clean, educational, image-rich, and spacious. Excellent typography, generous whitespace, useful photography, and beautiful callout boxes should make long guides approachable. Navigation should be minimal. Visual treatments should clarify the teaching flow rather than make the content look like a technical reference system.

## 4. How the website should be structured

### Simple site architecture

The website should remain small and clear:

1. **Home**
2. **Planning Your Camp**
3. **Day 1**
4. **Day 2**
5. **Day 3**
6. **About**

There should not be a separate page for every activity. An activity belongs inside the day in which it is taught. The architecture should reduce decisions and page changes, not expose the internal categories of the content.

### One complete page per camp day

Each camp day should be one long, self-contained page. If someone is running Day 2 tomorrow, the Day 2 page must contain everything needed to prepare, teach, troubleshoot, and finish Day 2. This includes that day's supplies, preparation, room setup, volunteer responsibilities, activity instructions, troubleshooting, cleanup, downloads, photographs, and lessons learned.

The day should use only a small number of major sections:

1. **Overview**
2. **Preparation**
3. **Activity 1**
4. **Activity 2**
5. **Activity 3**
6. **Cleanup & After Camp**
7. **Today's Downloads**

The source material should flow chronologically inside those major sections, but the page should not be over-segmented. Student arrival, check-in, bathroom breaks, transitions, pizza, pickup, and similar events should be explained naturally in the surrounding preparation, activity, or closing narrative. They should not become a series of tiny standalone sections. The result should feel like a well-written guidebook rather than a collection of small articles.

### Preparation is one major section

Each Day page should have a single Preparation section containing everything that must happen before students begin Activity 1. This includes the materials needed for that day, advance purchases, printing, soldering or assembly where applicable, equipment testing, computer setup, room and hallway setup, volunteer assignments, check-in preparation, and any other prerequisite work supported by the source.

The narrative can explain when individual preparation tasks should occur, such as earlier in the week, Friday, or Saturday morning, without turning those time periods into separate top-level sections or pages. Activity-specific preparation should also appear within its activity where repeating or expanding it helps the organizer teach successfully.

### Each page answers one question

Every page should have one clear job:

- **Homepage:** “Can this website help me host a STEM camp?”
- **Planning the Camp:** “How do I successfully prepare for this camp?”
- **Day 1:** “How do I successfully run Day 1?”
- **Art Bots:** “How do I successfully teach Art Bots?”

The Art Bots question describes the goal of the Art Bots section inside its Day page; it does not imply a separate Art Bots page. Content should not be separated merely because it belongs to a different category. A page should include information only when it helps answer that page's question.

### Homepage

The homepage should be about the reader and the camp they want to create. It should quickly show that the guide can help them plan, prepare, and teach a real STEM camp, then encourage them to begin planning.

The homepage should not lead with the history of Sanger STEM Camp. A small amount of origin or credibility context may support trust, but it is secondary to answering whether the site can help the visitor succeed.

### Downloads

There should be no global Resources page. A download belongs beside the activity or preparation step that uses it. For example, the Robot and Fireflies templates should be linked inside the paper-circuits activity, where the organizer understands what each file is for.

A day may end with “Downloads for Today” as a convenient repeat index, but this should repeat links already presented in context. The organizer should never have to leave the guide to locate a required file.

### Shopping and materials

There should be no global shopping list. Materials must be local to the day and activity that use them. Someone preparing Day 2 should see only Day 2 supplies.

Within a day, supplies should appear when they become actionable. The single Preparation section should introduce the materials and advance work required for that day, while each activity should contain the materials specific to teaching it. The site should avoid repetition and should not force the reader to reconcile a giant table with the instructions.

### Persistent left navigation

Each Day page should have a persistent navigation panel on the left containing only its major sections: Overview, Preparation, the three activities, Cleanup & After Camp, and Today's Downloads.

As the reader scrolls, the current section should be highlighted, its progress indicator should fill, and completed sections should remain filled. This should make the reader feel oriented and show how far they have progressed through the guide. It should look and behave like a friendly reading guide, not a documentation table of contents. Minor topics such as breaks, individual teaching steps, and pizza should not be added to this navigation.

## 5. Activity structure

Each activity should read naturally, like an experienced teacher introducing a worthwhile project and then showing another teacher how to run it. The general flow should be:

1. **Why we chose this activity**
2. **What students will build or investigate**
3. **Why students enjoy it**
4. **Materials for this activity**
5. **Preparation specific to this activity**
6. **Teaching the activity**
7. **Troubleshooting**
8. **What happened during our camp**
9. **What we would change next time**

The source material may require additional details or a slightly different transition, but the activity should begin by making the organizer understand and feel excited about what they are about to teach. It should not open with abstract learning objectives or a giant materials table.

The historical account and recommendations both belong in the guide, but they must remain distinguishable. “What happened during our camp” establishes the evidence. “What we would change next time” converts that evidence into useful advice. Neither should displace the step-by-step guidance the visitor needs to run their own session.

## 6. Writing style

The voice should sound like an experienced teacher talking to another teacher. It should be warm, knowledgeable, honest, and direct. The writer should explain **why** something matters before asking the reader to do it.

Narrative paragraphs should establish purpose, context, and cause. Numbered procedures should follow when the organizer needs to complete steps in order. Lists and callouts should support the narrative rather than replace it.

The writing should:

- keep the reader oriented toward the next action;
- explain the reason behind instructions so they can be adapted intelligently;
- distinguish original observations from future recommendations;
- retain approximate language where the evidence is approximate;
- mark genuinely unknown information rather than inventing it;
- describe unusual original resources as advantages, not requirements;
- preserve all useful preparation, teaching, operational, and troubleshooting detail;
- use plain language before specialist terms;
- treat mistakes as practical lessons;
- emphasize student ownership and successful completion; and
- place safety notes and failure warnings beside the relevant action.

The writing should not sound like software documentation, a wiki, a textbook, an inventory system, or a compressed summary. Clarity comes from sequencing and explanation, not from removing meaningful detail.

## 7. Reusable components

Reusable components should help the chronological narrative without turning the site into a component catalog. Likely patterns include:

- **Page question / welcoming introduction** — Makes the purpose of the page immediately clear and speaks to the reader's goal.
- **Major section heading** — Keeps the organizer oriented without fragmenting the page into minor topics.
- **Approximate day timeline** — Shows the flow without implying false minute-by-minute precision.
- **Activity introduction** — Explains why the activity was chosen, what students make, and why it is engaging.
- **Local materials block** — Contains only materials for the activity or preparation stage immediately at hand.
- **Numbered procedure** — Supports actions that must occur in order.
- **Why this matters callout** — Explains the reasoning behind an instruction.
- **Before students arrive callout** — Highlights testing or preparation that cannot safely wait.
- **Watch for callout** — Identifies a predictable point of confusion or failure.
- **Troubleshooting sequence** — Diagnoses problems in a deliberate order.
- **Helper prompts** — Gives volunteers questions that preserve student ownership.
- **Original camp note** — Clearly identifies what actually happened without turning the page into a recap.
- **What we would change callout** — Presents a recommendation derived from experience.
- **Download card** — Places a worksheet, template, or example directly beside its use.
- **Instructional photograph or diagram** — Shows a fold, setup, finished example, failure, or teaching moment with a useful caption.
- **Role assignment block** — Clarifies who should present, circulate, supervise, prepare, or handle pickup at that stage.
- **After-students-leave checklist** — Captures work that is easy to overlook when the session ends.
- **Downloads for today index** — Repeats the day's contextual downloads in one end-of-page location for convenience.
- **Uncertainty or TODO marker** — Prevents a gap from being presented as fact.

The visual language should be friendly and editorial, with excellent typography, whitespace, imagery, and polished callouts. Reusable patterns should make the guide easier to follow, not make it resemble technical documentation.

## 8. Assumptions

- The website will cover three camp days, and every day will be one complete long-form guide.
- The site's primary purpose is to help a future organizer run their own camp, not to recruit students or document the original event.
- The source files contain the curriculum and operational truth; implementation will restructure and present that content without inventing, summarizing away, or removing details.
- Each page will have one primary reader question and a scope defined by that question.
- Day guides will be substantial long-form pages, supported by minimal site navigation and persistent left-side reading progress through only the major sections.
- Photographs, diagrams, templates, and worksheets will be placed in context when the assets and permissions are available.
- Downloads may be repeated at the end of a day for convenience, but their primary location will be beside the activity that uses them.
- Supplies will be scoped to the relevant day and immediate preparation or activity stage. No global shopping list will be created.
- Cross-camp planning guidance may have its own focused page only when it answers the question of how to prepare for the overall camp; it should not pull day-specific instructions out of the day guides.
- Recommendations will remain traceable to the source evidence, and historical facts will remain distinct from proposed improvements.
- Local policies may differ, so the guide should preserve the purpose behind operational decisions without inventing legal or institutional requirements.

## 9. Missing information

### Overall camp and page scope

- The source material for Days 2 and 3 and the intended progression across the three-day camp.
- The desired primary call to action on the homepage and the exact first step in the planning journey.
- Which overall planning information is truly cross-camp and which must remain inside a particular day.

### Design and publishing

- Brand assets, color direction, typography preferences, and the desired balance between photography and diagrams.
- Accessibility requirements beyond normal best practices, including accommodations for printed materials and image descriptions.
- The final image library, captions, ownership, student privacy permissions, and approved uses.
- Screen-versus-print priorities for the long day guides.
- Hosting, content ownership, approval, and update workflow.

### Organizer, safety, and accessibility

- Formal staffing requirements and which roles may be filled by student volunteers.
- Local requirements for background checks, emergency contacts, medical needs, restroom supervision, authorized pickup, early pickup, incident response, and privacy.
- Accommodation guidance for disabilities, different learning needs, language needs, limited computer experience, allergies, and dietary restrictions.
- Emergency and first-aid responsibilities, facility access rules, and validated fallback plans for equipment or network failure.
- Registration and parent-communication materials, including consent and media releases.

### Day 1 content and assets

- The actual paper-circuit templates, including the identity and redistribution status of the third original design.
- The paper-airplane observation sheet and exact folding instructions or diagrams.
- The referenced photographs and their intended instructional placement.
- Tinkercad examples, including printable and flawed comparison models.
- Confirmed costs, supplier information where useful, and quantities that scale to different class sizes.
- Tested alternatives for organizers without individual computers, reliable internet, a projector, a long testing space, or multiple 3D printers.
- Production estimates for different printer counts and responsibility for delayed distribution.

### Unresolved facts

- Exact food cost and the final process for collecting allergies and dietary restrictions.
- Exact timing for portions of the day; current evidence supports a flexible, approximate schedule.
- The identity of the third paper-circuit design.
- Final recommended quantities for consumables under different class sizes and failure rates.
- Whether “Michael” and “Mikey” refer to the same organizer.
- Which recommendations have been tested in a later camp and which remain improvements inferred from the original experience.

Until these gaps are resolved, the presentation should retain the uncertainty, omit an unsupported claim, or mark an editorial TODO. It should never invent curriculum or factual detail to make a page appear complete.
