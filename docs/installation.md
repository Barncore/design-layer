# Install Design Layer

Use a local Codex host with plugin support, filesystem access and Node.js 22 or later for the helper scripts. No npm install, MCP setup or API key is needed by the plugin itself. The host supplies model access and any image or browser tools used during a task.

## From GitHub

Register the repository marketplace:

```text
codex plugin marketplace add Barncore/design-layer
```

Open the plugin browser, select the **Design Layer** marketplace and install **Design Layer**. A CLI supporting direct plugin installation can also run:

```text
codex plugin add design-layer@design-layer
```

Begin a new task and invoke `$design-router`. You do not need to configure a personal profile. Supply your project brief or let the interview develop one from the conversation.

This repository includes a portable root manifest and a Codex compatibility manifest. The repository marketplace resolves the plugin at its root. These files package local skills; they do not register a remote MCP server.

Publishing a repository does not submit it to the universal plugin directory. Marketplace availability and UI labels depend on the host. See [OpenAI's plugin packaging documentation](https://developers.openai.com/plugins/build/plugins) for current host behavior.

## From a local checkout

Clone the repository, open a terminal at its root and register the local marketplace:

```text
codex plugin marketplace add .
```

Install it from that marketplace through the plugin browser. Use one installation source at a time to avoid exposing duplicate copies of the same skills. A fresh task is the clearest way to confirm the updated instructions are discovered.

## Compatibility

| Capability | Requirements and limits |
| --- | --- |
| Design guidance and interviews | Local agent with skill support; Codex is the tested host |
| Context, feedback and normalization scripts | Node.js 22+; standard library only |
| Generated visual interpretations | An image tool supplied by the host; a useful alternative is allowed |
| Visual/runtime inspection | Appropriate host browser, screenshot or artifact tools |
| Bundled detector | Windows x64; an existing Chromium-family browser for browser mode |
| Experimental live editing | Windows x64, local development app and browser; framework coverage is limited |
| Documents, slides and native apps | Suitable platform/domain tools; this plugin supplies design guidance, not those runtimes |

The bundled engine does not support macOS or Linux. Ordinary design work and inspection with the host's own tools remain available. No replacement executable is downloaded automatically.

The live editor is for a recoverable local development copy. Do not expose it publicly or inject it into a deployed site. Start with a disposable check for an unfamiliar framework.
