const { Router } = require("express");
const express = require("express");
const multer = require("multer");
const fs = require("fs")
const router = express.Router();

const controller = require("../controller/auth controller")
const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        try {
            const directoryPath = './myNewDirectory';
            if (!fs.existsSync(directoryPath)) {
                fs.mkdirSync(directoryPath);

            }
            cb(null, directoryPath);
        } catch (err) {
            cb(err, null);
            console.error('Error creating directory:', err);
        }
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
})
const upload = multer({ storage: Storage });
router.post("/createDetails", upload.array("document"), controller.createUser)

module.exports = router