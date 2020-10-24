// homepage.js
import { Selector, t } from 'testcafe';

// selectors
const supportButton = Selector('nav.site-nav a[href*="/testcafe/support/"]');

// methods
async function goToSupportPage() {
	// click support button
	await t
		.expect((await supportButton.exists) && (await supportButton.visible))
		.ok();
	await t.click(supportButton);
}

export { goToSupportPage };
