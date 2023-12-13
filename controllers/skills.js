const Skill = require('../models/skill');

function index(req, res) {
  res.render('skills/index', { skills: Skill.getAll() });
}

function show(req, res) {
    const skill = Skill.getOne(parseInt(req.params.id));
    res.render('skills/show', { skill });
  }
  // controllers/skills.js
const skills = require('../data/skills');

module.exports = {

  new: (req, res) => {
    res.render('skills/new', { title: 'Add Skill' });
  },

  create: (req, res) => {
    const { name } = req.body;
    const newSkill = { id: Date.now(), name };
    skills.push(newSkill);
    res.redirect('/skills');
  },
};

// controllers/skills.js
const skills = require('../data/skills');

module.exports = {

  delete: (req, res) => {
    const skillId = parseInt(req.params.id);
    const index = skills.findIndex(skill => skill.id === skillId);
    if (index !== -1) {
      skills.splice(index, 1);
    }
    res.redirect('/skills');
  },
};



module.exports = {
  index,
};
