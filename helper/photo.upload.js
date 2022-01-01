const multer = require('multer');
const path = require('path');
const whitelist = [
    'image/png',
    'image/jpeg',
    'image/jpg',
    'image/webp',
    'image/gif'
]
const uploaderObject = {
    upload: multer({
        storage: multer.memoryStorage(),
        limits: {
            fileSize: 5 * 1024 * 1024,
        },
        fileFilter: function (req, file, callback) {
            if (!whitelist.includes(file.mimetype)) {
                return callback(new Error('file is not allowed'))
            }
            callback(null, true)
        },
    })
}

module.exports = uploaderObject;