const multer = require('multer');
const path = require('path');
const whitelist = [
    'audio/wav',
    'audio/mp3',
    'audio/ogg',
    'audio/mpeg'
]
const uploaderObject = {
    upload: multer({
        storage: multer.memoryStorage(),
        limits: {
            fileSize: 10 * 1024 * 1024,
        },
        fileFilter: function (req, file, callback) {
            console.log(file.mimetype);
            if (!whitelist.includes(file.mimetype)) {
                return callback(new Error('file is not allowed'))
            }
            callback(null, true)
        },
    })
}

module.exports = uploaderObject;