import shortid from 'shortid';
// const fetchAllUsers = () => {
//     console.log('fetchAllUsers');
// }

// const fetchUsersById = (id) => {
// console.log('fetchUsersById');
// }

// const updateUserById = (id) => {
// console.log('updateUserById');
// }

// export default { fetchAllUsers, fetchUsersById, updateUserById };

//---------------------------------------
// Синтаксис именного экспорта
export const fetchAllUsers = () => {
    console.log('fetchAllUsers');
}

export const fetchUsersById = (id) => {
console.log('fetchUsersById');
}

export const updateUserById = (id) => {
console.log('updateUserById');
}

// export const x = 5;

// export const y = 'mango';

export const addUser = name => {
    const user = {
        id: shortid.generate(),
        name
    }

    console.log(user);
}