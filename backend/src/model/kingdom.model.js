const db = require ("./db.js");

const findAll = async () => {
    try {
      const [kingdoms] = await db.query("SELECT * FROM kingdoms");

      return kingdoms;
    } catch(err) {
        console.log(err);
    }
};

const findOne = async (id) => {
    try {
        const [kingdoms] = await db.query("SELECT * FROM kingdoms WHERE id = ?", [id]);
  
        return kingdoms;
      } catch(err) {
          console.log(err);
      }
};

module.exports = { findAll, findOne };