const Auto = require("../models/autoModel");

const autoController = {
    findAll: async function (req, res) {
        try {
            const autos = await Auto.find({});
            res.json(autos);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    findMakes: async function (req, res) {
        try {
            const makes = await Auto.distinct('make');
            res.json(makes);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    findModels: async function (req, res) {
        try {
            const models = await Auto.distinct('model');
            res.json(models);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    findYears: async function (req, res) {
        try {
            const years = await Auto.distinct('year');
            res.json(years);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    post: async function (req, res) {
        try {
            const auto = new Auto(req.body);
            await auto.save();
            res.status(201).json(auto);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}

module.exports = autoController;
