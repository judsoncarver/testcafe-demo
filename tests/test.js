import { goToSupportPage, searchAndVerify } from '../pages';

fixture`Testcafe`.page`https://devexpress.github.io/testcafe/`;

const searchTerm = 'typescript';

test(`Support Search`, async (t) => {
	await goToSupportPage();
	await searchAndVerify(searchTerm);
});
