const user = {
    fname: 'omkara',
    dataBase: 'MongoDB'
}

const hobbies = ['reading']

const newhobbies = ['inernet-surfing']

//spread operator  ...

const mergehobbies = [...hobbies, ...newhobbies]

const userExtended = {
    isLogin: true,
    ...user
}

console.log(userExtended);
