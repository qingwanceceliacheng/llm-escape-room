# LLM Escape Room — solo edition

A browser-only game: no API, accounts, multiplayer, or production web service required. Upload the contents of `public/` to the top level of a GitHub Pages repository. All asset links are relative and work under repository subpaths.

For an optional local preview, install Node.js 20+ and run `npm start`, then open http://localhost:3000. Run `npm test` for the puzzle rule checks.

Start Token Town deals five shuffled student cards and four hidden, locked prefilled cards. Tap a card and then an empty slot, or drag it. Three hints each reveal one randomly selected hidden prefilled card. Check Answer is enabled when all five student cards are placed. A correct check reveals the complete sentence and unlocks Attention Arena. An incorrect check ends the current puzzle without revealing hidden cards. Try a New Example deals a different sentence and resets the three hints. There is no answer-check chance counter or limit on new examples.

Room Path preserves the activity and lets you resume; future rooms remain locked except Attention Arena after success. Escape Room clears the full experience. Puzzle, hints, navigation location, and unlocked rooms persist in this browser's local storage across refreshes. No data is sent to a game server.

Hidden token text is omitted from the rendered DOM, accessibility labels, and display-state objects until revealed. This is an educational browser game: source code and locally stored puzzle data can be inspected with developer tools.

## New playable rooms

The path is Token Town → Vector Vault → Embedding Explorer → Attention Arena → Next-Word Nexus → Training Library → Reflection Room. Token Town success unlocks Vector Vault. Matching all three vectors unlocks Embedding Explorer; placing its three missing labels unlocks Attention Arena; completing all three attention rounds unlocks the Next-Word Nexus placeholder. The remaining future rooms stay locked.

Use tap/select then destination, or drag token and label cards. On the relationship map, labeled points highlight their neighborhood. Attention clues can be selected and deselected before Check Connections. Correct rounds draw stronger clue connections and lighter connections to every other word. These visuals are teaching examples, not measurements of actual models. There are no timers or retry limits.

Matches, label placements, neighbor selection, attention rounds, selected clues, completed rooms, and current room are stored alongside Token Town in local storage. Room Path lets students open unlocked rooms or resume their current activity. Escape Room resets all saved progress.

Vector Vault now uses a three-stage codebook puzzle: fill the missing counts and alphabet positions, encode four whole-word tokens with shuffled vector cards (including two distractors), then decode [5, 2, 13]. Correct rows and matches lock; incorrect answers give rule-specific clues with unlimited retries. Each stage includes a non-solving hint. The complete stage state, typed blanks, encoding placements, password selection, and feedback persist in local storage. Finishing the vault unlocks Embedding Explorer. The codebook is explicitly presented as a teaching rule system, not the way real LLMs learn embeddings.

Embedding Explorer now uses a square 0–10 coordinate grid with origin at bottom-left. Restore teacher [3,8], soccer [9,8], and snack [2,4] by selecting/dragging each card to a grid intersection and confirming. Explore vectors by selecting plotted labels. Three nearest-neighbor rounds use Euclidean distance, then a beacon puzzle at [8,7] leads to team [8,6]. Hints explain coordinates and line comparisons without solving. Placements, chosen location, stage, round, beacon, feedback, and completion persist across path visits and refreshes. Completion unlocks Attention Arena.

Attention Arena is now The Context Detective. Inspect Query/Key/Value tools, activate the target query, allocate ten detective points with plus/minus controls, choose an interpretation, and Combine Values. The tutorial guides an 8/1/1 allocation; independent bank and trophy/suitcase cases accept ranges of valid allocations. Both telescope readings require separate phrase connections and a clarifying question. A final toy vector puzzle calculates dot products 2 and 0; scaled softmax uses sqrt(2) internally, yielding approximately 80%/20%, and combines Values into approximately [0.80,0.20]. All examples distinguish teaching illustrations from measured model behavior. Work, hints, interpretations, allocations, and stages persist; retries retain valid inputs. Finishing unlocks Next-Word Nexus.

The Q/K/V demonstration now separates a science-club search analogy from numerical attention. Keys are matching labels and Values are retrieved information in the analogy. Numerical Keys [2,0]/[0,2] differ from Values [10,2]/[2,10]. The example computes scaled softmax and the output with unrounded weights, while labeling [8.4,3.6] as the rounded-weight approximation. Two experiments change Card A’s Value or the Query; both must be explored before opening the exit. Completed players can replay just this demonstration without losing unlocked rooms.

## Visual theme

The game uses a light detective laboratory theme: warm ivory surfaces, brass navigation, teal circuit accents, evidence slips, a decoding tray, cream codebook, white tracking grid, and pale blue/gold/teal Query/Key/Value panels. The title door opens briefly on Begin Adventure. Current rooms have teal outlines and completed rooms show Restored stamps. Existing activities and saved progress are unchanged. Reduced-motion preferences disable decorative motion.

Detective illustrations are decorative only: a friendly boy and girl appear on the title, welcome, room path, and room introductions. New rooms show a short introduction before Begin Activity. Resumed activities, hints, feedback, results, and completion screens contain no detective illustrations. The former Nova guide, dialogue, and Guide controls are removed; ordinary gameplay hints remain. Previous progress and completed rooms are preserved.
