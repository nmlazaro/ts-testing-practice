interface User {
    id: number;
    name: string;
    age: number;
}


const users: User[] = [
    {
    id: 1,
    name: 'Nicolas',
    age: 27,
    },
    {
    id: 2,
    name: 'Micaela',
    age: 27
    }
]

export function getUserByID(id: number, callback: (err?:string, user?:User) => void) {
    const user = users.find(function(user) {
        return user.id === id
    })

    if (!user) {
        return callback(`User not found with ID: ${id}`)
    }

    return callback(undefined, user )
}