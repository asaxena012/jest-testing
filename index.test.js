const { mapObjectToArray } = require('./index.js')

describe('mapObjectToArray()', () => {

    test('Testing if the function returns correct results', () => {

        const results = mapObjectToArray({name: 'Aditya', age: 21}, (k, v) => {
            return v.toString()
        })

        expect(results).toEqual(['Aditya', '21'])
    })

    test('Testing if the callback is actually called', () => {
        const mockCallback = jest.fn();

        const results = mapObjectToArray({name: 'Aditya', age: 21}, mockCallback);

        expect(mockCallback.mock.calls.length).toBe(2);
    })

})