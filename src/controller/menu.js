const { MongoClient } = require("mongodb");

const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri);


module.exports = {

  index: async (req, res, next) => {

    try {
      // Conexao do cliente no banco
      await client.connect();

      // Instancia do banco de dados AlimentosTech
      let db = await client.db("AlimentosTech"); 
      
      
      // Obtendo instancia da coleção 'Clientes'
      let collection = db.collection("Clientes");


      // Aqui eu pego todos os documentos Clientes e passo pra um array
      let result = await collection.find({}).toArray()

      res.render('index', { clientes: result })

    } finally {
      // Fechando a conexao
      await client.close();
    }
    
    
    

  }

}
