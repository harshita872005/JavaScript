# Copilot Instructions for JavaScript Lecture Series

## Project Overview
This codebase consists of a series of standalone HTML and JavaScript files, each named by lecture number (e.g., `lecture01.html`, `lecture01.js`). Each pair represents a self-contained example or exercise, typically focused on a single JavaScript or web development concept.

## Architecture & Patterns
- **File Pairing:** Each `.html` file loads its corresponding `.js` file via a `<script src="lectureXX.js"></script>` tag at the end of the HTML body.
- **No Module System:** All JavaScript is written for the browser, using global scope. There are no imports/exports, modules, or build steps.
- **Direct DOM Manipulation:** JavaScript files interact directly with the DOM using `document.getElementById`, `document.createElement`, and similar APIs.
- **Async Patterns:** Some lectures demonstrate async/await, Promises, and fetch API usage (see `lecture08.js`, `lecture09.js`, `lecture10.js`).
- **No External Dependencies:** All code is vanilla JS/HTML/CSS. No npm, package.json, or third-party libraries are used.

## Developer Workflow
- **Edit and Reload:** To test changes, simply edit the `.js` or `.html` file and reload the HTML file in a browser.
- **No Build/Test Commands:** There are no build, lint, or test scripts. All code runs directly in the browser.
- **Debugging:** Use browser DevTools (Console, Elements, Network) for debugging and inspection.

## Project Conventions
- **Naming:** Files are named by lecture number. Always pair `lectureXX.html` with `lectureXX.js`.
- **Script Placement:** The `<script src=...>` tag is always at the end of the HTML body for proper DOM access.
- **Self-Containment:** Each lecture is independent. Do not introduce cross-file dependencies.
- **Commenting:** Some files include inline comments explaining key concepts or async flow.

## Examples
- **API Fetch Example:** `lecture10.js` fetches Pokémon data from an external API and updates the DOM.
- **Promise Example:** `lecture08.js` demonstrates custom Promises and async resolution.

## When Adding New Content
- Create a new pair of files: `lectureNN.html` and `lectureNN.js`.
- Follow the established patterns: direct DOM manipulation, no modules, script at end of body.
- Keep each lecture self-contained and focused on a single concept.

## Key Files
- `lecture01.html`/`lecture01.js` ... `lecture11.html`/`lecture11.js`: Each demonstrates a unique concept or exercise.

---
For questions or changes to conventions, review several recent lecture files for examples before introducing new patterns.
