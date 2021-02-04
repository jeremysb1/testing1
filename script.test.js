// setting up a unit test with jest

const urlSearch = require('./script');

dbMock = [
	'pizza.com',
	'cookies.com',
	'icecream.com',
	'panpizza.com'
];

describe('urlSearch', () => {

	it('this is a test', () => {
		expect('hello').toBe('hello')
	});

	it('it is searching', () => {
		expect(urlSearch('pizza', dbMock)).toEqual(['pizza.com', 'panpizza.com'])
	});

	it('work with undefined and null input', () => {
		expect(urlSearch(undefined, dbMock)).toEqual([]);
		expect(urlSearch(null, dbMock)).toEqual([]);
	});

	it('no more than 3 matches', () => {
		expect(urlSearch('.com', dbMock).length).toEqual([3]);
	});
})