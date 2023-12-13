const express = require('express');
const router = express.Router();
const skillsCtrl = require('../controllers/skills');

// Index route for skills
router.get('/', skillsCtrl.index);

router.get('/new', skillsCtrl.new);

// Add a new skill to the database
router.post('/', skillsCtrl.create);

router.delete('/:id', skillsCtrl.delete);



module.exports = router;
