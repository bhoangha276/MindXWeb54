const fs = require('fs');//xu ly file

const users = [
    { id: 1, username: 'ha', password: '123'},
    { id: 2, username: 'hoang', password: '123'},
    { id: 3, username: 'phuong', password: '123'},
]
fs.writeFile(
    'users.json', 
    JSON.stringify(users), 
    (err) => {
        console.log(err)
    }
)

//CRUD => files

const addUser = async (user) => {
    try{
        const stringUsers = await fs.promises.readFile('user.json', {encoding: 'utf-8'});
        const users = JSON.parse(stringUsers);
        const newUsers = [
            ...users,
            { id: users.length, ...user}
        ];
        await fs.promises.writeFile('users.json', JSON.stringify(newUsers));
    } catch(err) {
        console.log(err);
    }
}

const readUser = () => {
    
}

const readUser = (id) => {
    
}

const updateUser = (user) => {
    
}

const deleteUser = (user) => {
    
}