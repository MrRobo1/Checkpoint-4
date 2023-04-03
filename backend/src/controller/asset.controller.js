const { findAll, findOne } = require("../model/asset.model.js");

const getAll = async (req, res) => {
    try {
        const assets = await findAll();
        res.send(assets);
    } catch(err) {
        res.sendStatus(500);
    };
};

const getOne = async (req, res) => {
    try {
        const assetId = parseInt(req.params.id);

        if (isNaN(assetId)) throw new Error("Invalid asset ID");
        
        const [assets] = await findOne(assetId);

        res.send(assets);
    } catch(err) {
        res.sendStatus(500);
    };
};
    module.exports = { getAll, getOne };
