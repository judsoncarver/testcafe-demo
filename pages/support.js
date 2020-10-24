// support.js
import { Selector, t } from 'testcafe';

// selectors
const postContent = Selector('div.post-content');
const supportSearchInput = Selector('#support-search-input');

// methods
async function searchAndVerify(searchString) {
	// simple search for a string in support
	await t
		.expect(
			(await supportSearchInput.exists) &&
				(await supportSearchInput.visible)
		)
		.ok();
	// search on term and submit
	await t.typeText(supportSearchInput, searchString).pressKey('ENTER');
	// assert presence of post content following search
	await t
		.expect((await postContent.exists) && (await postContent.visible))
		.ok('No post content found!');
	// assert correct content returned
	const re = new RegExp(searchString, 'i');
	const postHeaderText = await postContent.child('h1').textContent;
	// assert post's header text has a match on our search term
	await t
		.expect(postHeaderText.match(re))
		.ok('Search results do not contain search string!');
}

export { searchAndVerify };
