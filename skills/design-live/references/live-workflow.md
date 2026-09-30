# Local live-edit workflow

Resolve `<plugin>` from this skill's directory. Use the bundled launcher by absolute path, with the actual project root:

```powershell
node <plugin>/runtime/impeccable/run.mjs --root <project> live
node <plugin>/runtime/impeccable/run.mjs --root <project> live-poll
```

## Prepare

Inspect the local entry point, dev command, current changes and existing `PRODUCT.md` / `DESIGN.md`. Reuse useful context; create only minimal missing context when needed for this editing task. The live tool needs `.impeccable/live/config.json` identifying actual entry files, insertion point and comment syntax. Use the tool's diagnostics and inspected framework structure to configure it; do not guess a framework entry path. Check CSP without weakening it. A plain HTML configuration can name `index.html`, use `insertBefore: "</html>"`, `commentSyntax: "html"`, and record `cspChecked: true` only after inspection.

Before injection or scaffolding, save the exact current bytes of the files the session can touch and record their paths. A git commit alone does not preserve uncommitted work. Keep the snapshot outside the application's served directory. Avoid minified/generated source. First exercise an unfamiliar framework adapter in a disposable copy.

Start the app's existing dev server and the live tool. Use the supplied browser tools to open the local app. The launcher redirects live boot output to a file to avoid a detached Windows child holding a captured pipe open. It installs nothing and starts no global hook. Do not expose the server publicly or inject it into a deployed site. Treat session tokens as temporary credentials.

## Handle a request

Poll using an execution session that can yield while waiting. A generate event contains the picked element, request and often a proposed source scaffold. Inspect the actual source against `replaceStartLine` / `replaceEndLine`. Reject a span that includes unrelated content. If preflight cannot locate it, `live-wrap` accepts an observed ID, class or query plus file/text hints; a tag alone is insufficient in the pinned engine. Inspect its diff immediately.

Build all requested variants in one source edit using the returned wrapper/CSS contract. Preserve meaningful IDs, ARIA relationships, handlers, content and layout outside the chosen scope. Do not publish an empty wrapper between edits. Then reply:

```powershell
node <plugin>/runtime/impeccable/run.mjs --root <project> live-poll --reply <id> done --file <relative-file>
```

Reply `error "short reason"` if generation fails so the browser leaves its busy state. Do not reuse an already discarded or completed session ID. Poll again for accept, discard or steering. The tool may apply accept/discard mechanically; inspect its result before treating it as complete. Use `live-status` / `live-resume` for interrupted sessions and `--help` for the pinned command's exact options.

## Finish

Check that the selection survived in source and that unrelated content and behaviour remain intact. Run the relevant Design Layer audit. Stop with:

```powershell
node <plugin>/runtime/impeccable/run.mjs --root <project> live-server stop
```

Verify the live markers and temporary variant wrappers are gone, reload the app, and stop only the dev server this session started. If cleanup changes unrelated code, restore only affected files from the snapshot after checking for concurrent edits. The pinned pilot found minified-document cleanup could remove existing inline styles, so do not assume discard is a complete rollback.

The current scope covers local Windows x64 with an existing Chromium-family browser. Browser/framework coverage beyond the recorded pilot is unverified. Ordinary source-and-browser comparison remains available when the adapter is unsuitable.

Protocol source: [Impeccable live reference](https://github.com/pbakaus/impeccable/blob/main/skill/reference/live.md). This workflow adapts the mechanism, not the upstream design prescriptions.
