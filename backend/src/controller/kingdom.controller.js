const { findAll, findOne, addOne, updateById, removeOne } = require("../model/kingdom.model.js");

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

const createOne = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await addOne({ name });
        res.status(201).json({ id: result.insertId, ...name });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updateName = async (req, res) => {
    try {
        const { name } = req.body;
        const result = await updateById({ name });
        return result;
    } catch (err) {
        console.log(err);
    }
};

const deleteKingdom = async (req, res, next) => {
    const { id } = req.params;
  
    try {
      const result = await removeOne(id);
      if (result.status === 200) {
        res.sendStatus(200);
      } else {
        res.sendStatus(400);
      }
    } catch (error) {
      next(error);
    }
  };
  

module.exports = { getAll, getOne, createOne, updateName, deleteKingdom };
