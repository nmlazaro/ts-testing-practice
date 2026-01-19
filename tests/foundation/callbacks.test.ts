import { getUserByID } from "../../src/foundation/callbacks"

describe(getUserByID, () => {
    test('getUserByID should return an error if user ID does not exists', (done) => {
        const id = 10
        getUserByID(id, (err, user) => {
            expect(err).toBe(`User not found with ID: ${id}`)
            expect(user).toBeUndefined()

            done()
        })

    })

    test ('getUserByID 1 should be Nicolas', (done) => {
        const id = 1
        getUserByID(id, (err, user) => {
            expect(err).toBeUndefined
            expect(user).toStrictEqual({
            id: 1,
            name: 'Nicolas',
            age: 27,
            })

            done()
        })
    })
})