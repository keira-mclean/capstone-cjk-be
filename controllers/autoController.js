const autoController =  {
    findAll: function (req, res) {
        res.json(autos)
    }
}

module.exports = autoController;