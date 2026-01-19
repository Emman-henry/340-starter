const express = require('express');
const path = require('path'); // Use path.join for cross-platform paths
const router = express.Router();

// Serve the "public" folder as root
router.use(express.static(path.join(__dirname, "..", "public")));

// Serve subfolders explicitly (optional, but ensures clarity)
router.use("/css", express.static(path.join(__dirname, "..", "public", "css")));
router.use("/js", express.static(path.join(__dirname, "..", "public", "js")));
router.use("/images", express.static(path.join(__dirname, "..", "public", "images")));

module.exports = router;
 