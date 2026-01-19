interface BuildMakerPersonOptions {
    getUUID: () => string
    getAge: (birthdate: string) => number
}


interface PersonDetails {
    name: string
    birthdate: string
}

export const buildMakePerson = ({getUUID, getAge}: BuildMakerPersonOptions ) => {
    return ({name, birthdate}: PersonDetails) => {
        return {
            id: getUUID(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}