# LLM Escape Room — The Locked Science Lab

A browser-only solo detective game with seven connected activities. The Case File carries the recovered incident report through tokens, numerical representations, a coordinate map, contextual attention, generated suggestions, a training flashback, and human judgment.

## Preview and publish

For local preview with Node.js 20+, run `npm start`, then open http://localhost:3000. There are no dependencies or API keys. Upload all files inside `public/` to GitHub Pages (either the repository root or keep the existing `/public/` site URL). The game is static and needs no production Node server.

Run `npm test` for the connected rules and screen-rendering checks.

## Rooms

1. Token Town: arrange five cards around four sealed cards, with three hints. Incorrect checks allow a fresh deal of the same report. The/The identities are interchangeable.
2. Vector Vault: use the illustrative lookup codebook to restore mouse, keyboard, and working. Reversed vectors are distractors. Correct entries lock.
3. Embedding Explorer: plot the three saved vectors on an equally spaced 0–10 grid. The reference neighborhoods highlight automatically after completion.
4. Attention Arena: allocate ten illustrative points and choose an interpretation. At least three points each must go to the nearby-object and malfunction clues. The conclusion is explanatory feedback, not a literal layer output.
5. Next-Word Nexus: select three successive next tokens. All eight branches are accepted, including less likely choices.
6. Training Library: sort six fictional records into device/animal contexts. Replay of the recovered report is feedback, not a second quiz.
7. Reflection Room: choose an action and write a reason. Personal reflections are recorded without automatic grading; any selected option plus a nonblank reason completes the activity.

There are no timers, lives, chance counters, bonus quizzes, or additional activities.

## Progress and navigation

Room Path preserves the current activity and Case File. The new story saves under `locked-science-lab-v4` in local storage and resumes after refresh. Older editions’ storage remains separate rather than being treated as completed evidence for a different story. Escape Room clears this story and the older game saves. No player information is sent to a game server.

Detective Nova has predefined dismissible dialogue on introductions and transitions only, plus the final exit. Active puzzles, feedback within activities, and hints contain no character.

## Verification

Tests cover the report’s token identities, hidden-card dealing and hints, same-sentence retry, vector distractors, actual saved coordinates reused in plotting, point rules, all eight response branches, sorting retries, reflection submission, sequential unlocking, serialized progress, every room render, and character visibility. Local HTTP serves the static files successfully. Touch/drag geometry and visual browser QA should also be checked after publishing; automated rendering checks do not substitute for those interactions.

## Nova and accessible language

Nova is now a female detective and appears only on each room’s first-entry screen. Enter Room opens the room’s ordinary instructions. Entry history persists in the existing save; previously visited rooms resume their activity or completed evidence without replaying Nova. Existing progress is retained. Escape Room clears entry history with the rest of the experience. Welcome, Room Path, activities, feedback, and final/completion screens contain no character or Guide control.

Player text uses shorter sentences and plain definitions of token, vector, embedding, attention, Query, Key, Value, training, and probability. Original mechanics, explanations, examples, and steps remain; optional technical details use Learn More sections.

Room-entry transitions now explain both the LLM concept and the evidence trail. Evidence carried forward panels read the saved report, tokens, repaired vectors, completed map, attention point allocations, and response. Reflection centers the saved mouse report and generated response; the ambiguous door message is an optional connected follow-up. Existing first-entry history, saved work, and original room instructions are preserved. Seven automated tests include a check using deliberately changed saved evidence to confirm that the panels do not substitute canned examples.

Every room introduction includes a separate How to Play example with captioned steps, Replay Example, and Start Activity. Examples use unrelated practice content and local display-only step state; they never modify the saved activity, clues, hints, or answers. The book [2,3] practice grid animates horizontal then vertical movement; reduced-motion preferences remove the drawing animation. Keyboard and touch users advance using native buttons.

Vector Vault now has one six-connection lock using mouse, key, board, stop, work, and ing as separate report tokens. A searchable notebook has A–I, J–R, and S–Z tabs. Nine unique evidence cards include three distractors. Test Connections locks correct matches and returns incorrect cards with token-specific feedback. Inspect a Clue highlights a selected unresolved token’s entry without placing it. Existing vector values and completed room progress are retained; six exact matched token-vector pairs are saved separately, while legacy map coordinates remain available so the other rooms’ activities do not change.

Embedding Explorer is now The Missing Evidence Map: one six-token board reads exact tokenVectors saved by Vector Vault. Three damaged coordinate cards, six placements, and three nearest-reference links are checked together. Correct work locks; incorrect work remains editable. Reference markers are distinct from student markers. Recovered Codebook, Coordinate Lens, Distance Ruler, and optional Hint assist without solving. Half-unit grid controls appear when saved vectors include decimals; numeric x/y controls also support keyboard placement. Distances are evaluated unrounded and displayed to one decimal. Completed coordinates, links, and adapted reference positions are saved in the Case File. Existing room completion and prior placements are migrated without clearing other rooms.

The persistent ← Back button navigates a saved in-game page history. Puzzle interactions do not create history entries, and Back does not restore old puzzle snapshots. It preserves current work, hints, completions, evidence, and unlocked rooms. Completed activities revisited with Back show saved work read-only. Repeated clicks pop earlier page locations without adding new entries. The first title screen hides Back; a legacy save without page history shows it disabled until another page is visited. Escape Room clears navigation history with the full reset.

Attention Arena now starts with an interactive Query slot and three Key/Value clue rows on the same activity page. Correct matches lock and incorrect cards return to the tray. Allocation and interpretation controls unlock only after Check Q / K / V succeeds. Matching uses keyboard-accessible tap controls or dragging; sentence spans retain the underlying twelve report tokens. Existing saved point allocations and interpretations are retained, and completed legacy attention work migrates as verified. The original ten-point rule and transition to Next-Word Nexus are unchanged.

Next-Word Nexus now has one five-prediction terminal puzzle. Each turn shuffles three token/probability cards while preserving their association. Fractions, decimals, and percentages are compared numerically; every distribution totals 100% and has one maximum. Select a card, then Lock Prediction. Incorrect choices leave the turn unchanged. After a correct choice, only that completed turn reveals conversions and bars, and the next distribution appears. Scratchpad, Probability Notebook, and Hint are optional. The five correct choices generate “You could check the mouse.” and are saved for the training transition and reflection. Earlier completed responses remain preserved; earlier in-progress drafts are retained as a migration snapshot because the new probability puzzle uses a different prefix and choices.

Training Library now has one “Same message, different training” experiment. Inspect Computer Help, Animal Care, or Mixed School materials; assign different collections to Model A and Model B; then Train and Compare. Both receive exactly “The mouse stopped…” after their scripted earlier training. Preset working/eating/moving distributions total 100% and remain prominently labeled as teaching results. Students may change collections and compare again before Finish Investigation. Results and selected compared collections save to the Case File, while the Next-Word Nexus response remains unchanged. The visible privacy card explains that service policies differ and that context, saving messages, and future training are separate processes. No personal information is collected by the experiment. Legacy training work remains retained in a migration snapshot.

Training Library now uses the three-terminal Training Tournament. Load each cartridge once, predict one token per terminal, then Run the Tournament to reveal all distributions together. Probability values follow the cartridge, not the model letter. Correct prediction badges lock; incorrect predictions can be corrected against the revealed bars without penalties or an extra required round. Winning saves all three assignments, predictions, results, and completion to the Case File and opens Reflection Room. Optional Swap Cartridges & Replay stays within the activity and never relocks later rooms. Terminals support tap-to-load and cartridge drag/drop; the materials preview is available by selecting a cartridge. No personal fields are present. Previous two-model progress is retained in a migration snapshot and its collection selections are carried into the three-terminal layout.

Reflection Room is now “Lab Repaired: AI and Me,” one five-section reflection page with multiple-choice groups and five short written responses. It accepts uncertainty, different opinions, and a choice not to use AI. Selection limits and exclusive uncertainty/no-AI options are enforced; writing is checked only for a nonblank response, never scored or keyword-graded. Drafts save locally as students type. Save My Reflection records a snapshot in the Case File and shows the student’s answers separately from learning notes. Edit My Reflection preserves unlocked rooms; Download My Reflection creates a local text file. Legacy reflections remain retained in a migration snapshot. No reflection is sent to an LLM or external grading service.

Reflection uses the same twelve mixed ability options for humans and LLMs, with no selection cap and no preferred answer. The comparison panel shows both selections side by side and saves an additional overlap response. Everyday AI uses and habits also have no selection cap; “I do not plan to use one right now” stays exclusive within uses. The remaining reflection questions, drafts, completion, and navigation remain intact. Earlier selections that do not exactly match the new list are retained under their original wording rather than being silently reinterpreted. The summary and local download include the overlap response.
