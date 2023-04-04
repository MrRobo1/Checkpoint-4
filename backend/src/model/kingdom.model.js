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

const addOne = async (kingdom) => {
    try {
    const { name } = kingdom;
    const [result] = await db.query("INSERT INTO kingdoms (name) VALUES (?)", [name]);

    return {id: result.insertId, name};
    } catch (err) {
        console.log(err);
    }
};

const updateById = async (id, kingdom) => {
    try {
        const { name } = kingdom;
        const [result] = await db.query("UPDATE kingdoms SET name = ? WHERE id = ?", [name, id]);

        return result;
    } catch (err) {
        console.log(err);
    }
}

const removeOne = async (id) => {
    try {
        const [result] = await db.query("DELETE FROM kingdoms WHERE id = ?", [id]);

        return result;
    } catch (err) {
        console.log(err);
    }
}

module.exports = { findAll, findOne, addOne, updateById, removeOne };