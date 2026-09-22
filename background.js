const sites = {
	youtube: 'https://youtube.com',
	github: 'https://github.com/vdegenne?tab=repositories',
	chatgpt: 'https://chatgpt.com',
	settings: 'chrome://settings/appearance',
};

chrome.commands.onCommand.addListener(function (command) {
	const site = sites[command.replace('open-', '')];

	if (site) {
		chrome.tabs.create({url: site});
	}
});
