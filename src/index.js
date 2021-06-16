import validatePassword from './js/validate-password';
// console.log(validatePassword);
// console.log(validatePassword('qweqwe'));

// import apiService from './js/api-service'
// console.log(apiService);

// import { fetchAllUsers, fetchUsersById, x as value, y} from './js/api-service';
// console.log(fetchAllUsers);
// console.log(fetchUsersById);
// console.log(value);
// console.log(y);

// Если у нас много экспортов и мы хотим в данном файле забрать как 1 большой объект
// Это наз-ся импорт пространства имен
import * as apiService from './js/api-service'
console.log(apiService);

import { addUser } from './js/api-service'

addUser('mango');