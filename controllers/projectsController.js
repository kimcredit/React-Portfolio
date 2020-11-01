const db = require("../models");

//defining methods for projects controller

module.export = {
    findAll: function (req, res) {
        db.project 
            .find(req.query)
            .sort({ date: -1 })
            .then (dbModel => res.json(dbModel))
            .catch (err => res.status(422).json(err));
    }
};