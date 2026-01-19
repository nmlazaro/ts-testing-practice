import { buildMakePerson } from "../../src/foundation/factory";

describe(buildMakePerson, () => {
    const getAge = () => 35
    const getUUID = () => '1234'

    test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getAge, getUUID})

        expect(typeof makePerson).toBe('function')
    })

    test('makePerson should return a person object', () => {
        const makePerson = buildMakePerson({getAge, getUUID})
        const newPerson = makePerson({name: 'John Doe', birthdate: '1985-10-21'})

        expect(newPerson).toEqual({
            id: '1234',
            name: 'John Doe',
            birthdate: '1985-10-21',
            age: 35
        })
    })
})