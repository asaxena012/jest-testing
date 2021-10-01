const { getNewUser, mapObjectToArray } = require('./index.js')

describe('mapObjectToArray()', () => {

    test('Testing if the function returns correct results', () => {

        const results = mapObjectToArray({name: 'Aditya', age: 21}, (k, v) => {
            return v.toString()
        })

        expect(results).toEqual(['Aditya', '21'])
    })

    test('Testing if the callback is actually called', () => {
        const mockCallback = jest.fn();

        mapObjectToArray({name: 'Aditya', age: 21}, mockCallback);

        expect(mockCallback.mock.calls.length).toBe(2);
    })

    test('Testing if callback gets the correct args', () => {
        const mockCallback = jest.fn();

        mapObjectToArray({name: 'Aditya', age: 21}, mockCallback);

        const firstCall = mockCallback.mock.calls[0];
        expect(firstCall[0]).toBe('name');
        expect(firstCall[1]).toBe('Aditya');
        expect(firstCall[2]).toEqual({name: 'Aditya', age: 21});
    })
})

describe('getNewUser()', () => {

    test('Testing if function returns a valid value', async () => {
        
        const user = await getNewUser(1);

        expect(user).toBeTruthy();
    })

    test('Testing if function throws an error when user not found', async () => {

        expect.assertions(1);

        try{
            const user = await getNewUser(10);
        } catch (e) {
            expect(e).toBeTruthy()
        }

    })
})