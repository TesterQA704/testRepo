// config/credentials.js
import { decrypt } from '../utils/encryption.js';

//hanya digunakan di awal generate username encrypted, jangan dimasukan ke github untuk script ini
// import { encrypt } from '../utils/encryption.js';
// import dotenv from 'dotenv';
// const username = 'faiz.syukri@kalbe.co.id';
// const password = 'Kalbefarma2024!';
// const encryptedUsername = encrypt(username);
// const encryptedPassword = encrypt(password);
// console.log('Encrypted Username:', encryptedUsername);
// console.log('Encrypted Password:', encryptedPassword);
// ------------------------------------------------------------------------------------------------

export const credentials = {
    username: decrypt(process.env.ENCRYPTED_USERNAME),
    password: decrypt(process.env.ENCRYPTED_PASSWORD)
};