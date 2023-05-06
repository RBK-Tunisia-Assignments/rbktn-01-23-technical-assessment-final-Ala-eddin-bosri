const connect = require("../database-mysql/index");


const getAll = (callback) => {
    const sql = `select * from recepie`;
    return connect.query(sql, callback);
  };

  const addRecepie = (
    Cook_Time,
    Prep_Time,
    recepie_Name,
    Serves,
    categorie,
    recepie_Image,
    recepie_Description,
    recepie_Ingredients,
    users_user_Id,
    callback
  ) => {
    const sql = `INSERT INTO recepie (Cook_Time, Prep_Time,recepie_Name,Serves,categorie,recepie_Image,recepie_Description,recepie_Ingredients,users_user_Id) VALUES (${Cook_Time},${Prep_Time},"${recepie_Name}",${Serves},"${categorie}","${recepie_Image}","${recepie_Description}","${recepie_Ingredients}",${users_user_Id}) `;
    return connect.query(sql, callback);
  };




  
  const deleteRecepie = (callback, id) => {
    const sql = `DELETE FROM recepie WHERE Recepie_Id=${id};`;
    return connect.query(sql, callback);
  };
  const updateRecipe = (
    Cook_Time,
    Prep_Time,
    recepie_Name,
    Serves,
    categorie,
    recepie_Image,
    recepie_Description,
    recepie_Ingredients,
    users_user_Id,
    id,
    callback
  ) => {
    const sql = `UPDATE recepie 
  set 
  Cook_Time='${Cook_Time}', 
  Prep_Time ='${Prep_Time}', 
  recepie_Name='${recepie_Name}',
  Serves='${Serves}',
  recepie_Image='${recepie_Image}',
  recepie_Description='${recepie_Description}',
  categorie='${categorie}',
  recepie_Ingredients='${recepie_Ingredients}'
  where recepie_Id=${id} AND users_user_Id=${users_user_Id}
  `;
    return connection.query(sql, callback);
  };
module.exports = { getAll, addRecepie ,deleteRecepie,updateRecipe};
