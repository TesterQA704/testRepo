// config/credentials.js
import { decrypt } from '../utils/encryption.js';

export const credentials = {
    username: decrypt(process.env.ENCRYPTED_USERNAME),
    password: decrypt(process.env.ENCRYPTED_PASSWORD)
};