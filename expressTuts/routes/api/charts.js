const charts = require('../../Charts');
const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
    res.json(charts);
});