const { findAll, findOne } = require("../model/kingdom.model.js");

const getAll = async (req, res) => {
    try {
        const kingdoms = await findAll();
        res.send(kingdoms);
    } catch(err) {
        res.sendStatus(500);
    };
};

const getOne = async (req, res) => {
    try {
        const kingdomId = parseInt(req.params.id);

        if (isNaN(kingdomId)) throw new Error("Invalid asset ID");
        
        const [kingdoms] = await findOne(kingdomId);

        res.send(kingdoms);
    } catch(err) {
        res.sendStatus(500);
    };
};
    module.exports = { getAll, getOne };
