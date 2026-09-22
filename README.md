## How to add a shortcut

In the example below, replace `<id>` with your own keyword.

### Open `background.js`

Add an entry to `sites`

```ts
const sites = {
	...
	<id>: 'https://example.org'
};
```

### Add the shortcut in `manifest.json`

In `"commands"`, add a new entry

```json
	"open-<id>": {
		"suggested_key": {
			"default": "<your keyboard shortcut>"
		},
		"description": "..."
	}
```

(`<your keyboard shortcut>` : e.g. `Alt+E`)

## Note

Chrome can only register 5 default shortcuts. If you have more than 5 shortcuts, then after the 5th one just remove `"suggested_key"` and go to [chrome://extensions/shortcuts](chrome://extensions/shortcuts) to edit them manually.
