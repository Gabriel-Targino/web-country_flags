const Flag = require('../models/Flag');

const index = (req, res) => {
  // TODO
};

const readAll = (req, res) => {
  const flags = Flag.readAll();
  const index = (req, res) => {
    const flags = Flag.readAll();
  
    res.render('flags/index.njk', { flags });
  };
  res.json(flags);
};

module.exports = { index, readAll };
