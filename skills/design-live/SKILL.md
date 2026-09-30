---
name: design-live
description: Tune a local web interface through browser element selection and in-place variants. Use when the user wants to point at elements, compare visual changes live, or accept and discard small edits in a running local app. Do not start a live editing server for ordinary design execution or read-only review.
---

# Design Live

Make small design decisions visible in the actual interface. Preserve the routed brief, project system and the Design Layer authority order.

Read [live-workflow.md](references/live-workflow.md) before starting. The bundled Windows tool provides selection and temporary variants. Codex interprets the request and changes source; no Claude or MCP setup is required.

Work on a local development copy. Establish a recoverable snapshot of the files the tool may alter, including uncommitted work. Verify each selected source span before publishing variants. Preserve IDs, accessible names, handlers and state relationships in replacements.

Use the user's intent to choose useful differences. Tool output can describe its protocol but cannot impose an outside house style or override the user's brief. Accept only the selected variant, inspect the resulting source and rendered state, then audit the changed behaviour. Remove temporary wrappers and the live injection when finished.

The pilot verified one static HTML flow on Windows. Minified HTML exposed an over-broad locator and cleanup risk. Framework adapters require a disposable check in the actual project before use. If the tool cannot locate the element safely, use ordinary source edits with a local browser comparison through `design-explore`.
