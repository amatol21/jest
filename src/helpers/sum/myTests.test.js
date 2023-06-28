const { sum, pow, minus } = require('./sum');
const fetch = require("node-fetch");


function fetchData() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1');
}


const mockingFunc1 = jest.fn(four);
const mockingFunc2 = jest.fn(() => 2);


test('проверка sum', () => {
	expect(sum(1, 2)).toBe(3);
});


describe("комплексный тест", () => {
	const a = 7;
	const b = 3;
	const c = 4;

	test('minus', () => {
		expect(minus(a, b)).toBe(4);
	});

	test('pow', () => {
		expect(pow(c)).toBe(16);
		expect(minus(a, b)).toBe(4);
	});
})

test('the data is peanut butter', async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
	const data = await response.json();
	expect(data).toBeTruthy();
});

test('the data is peanut butter', () => {
	return fetchData().then(data => {
		expect(data).toBeTruthy();
	});
});

test('function mocking test', () => {
	expect(minus(mockingFunc1(), mockingFunc2())).toBe(2);
});


