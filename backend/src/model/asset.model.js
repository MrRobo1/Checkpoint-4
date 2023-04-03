const db = require ("./db.js");

const findAll = async () => {
    try {
      const [assets] = await db.query("SELECT * FROM assets");

      return assets;
    } catch(err) {
        console.log(err);
    }
};

const findOne = async (id) => {
    try {
        const [asset] = await db.query("SELECT * FROM assets WHERE id = ?", [id]);
  
        return asset;
      } catch(err) {
          console.log(err);
      }
};

module.exports = { findAll, findOne };