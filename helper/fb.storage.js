const { getStorage } = require('firebase-admin/storage');
const storage = getStorage().bucket("gs://hesaha1.appspot.com"); //change your firebase storage bucket

module.exports = storage;