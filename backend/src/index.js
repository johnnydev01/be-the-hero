const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

//Permite que o node converta o json da requisição para um objeto javascript
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 */
/**
 * Métodos HTTP:
 * 
 * 
 * GET: Buscar uma informação no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */


 /**
  * Tipos de Parâmentros: 
  * 
  * Query params: Parâmetros  nomeados enviados na rota após "?" (filtos, paginação)
  * Route params: Parâmetros para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB, CounchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */


app.listen(3333);