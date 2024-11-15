const crypto = require('crypto');
const key = crypto.randomBytes(16).toString('hex');
console.log('Your 32-character key:', key);