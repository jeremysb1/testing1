const urlDatabase = [
	'dogs.com',
	'souprecipes.com',
	'flowers.com',
	'animals.com',
	'dogpictures.com',
	'myfavouritedogs.com'
];

const urlSearch = (searchInput, db) => {
	const matches = db.filter(website => {
		return website.includes(searchInput);
	})
	return matches.length > 3 ? matches.slice(0, 3) : matches;
}

console.log(urlSearch('soup', urlDatabase));
console.log(urlSearch('dog', urlDatabase));

module.exports = urlSearch;