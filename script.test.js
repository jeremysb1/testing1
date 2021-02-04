// setting up a unit test with jest

const urlSearch = require('./script');

dbMock = [
	'pizza.com',
	'cookies.com',
	'icecream.com',
	'panpizza.com'
];

it('this is a test', () => {
	expect('hello').toBe('hello')
});

it('it is searching', () => {
	expect(urlSearch('pizza', dbMock)).toEqual(['pizza.com', 'panpizza.com'])
})