//POST (create)=> Inserts => http://localhost:5000/NP2_EC021/meme
//PATCH ou PUT (update)=> Updates => http://localhost:5000/NP2_EC021/meme/:id (id = path parameter)
//GET => Reads (search)=> http://localhost:5000/NP2_EC021/meme?id=xyz (id = query parameter)
//DELETE => Deletes (remove)=> http://localhost:5000/NP2_EC021/meme/:id (id = path parameter)

const Meme = require("../models/meme");

module.exports = {
  //Criar novo meme
  create: async (req, res) => {
    {
      console.log("Executando rota create!");
      let { titulo, descricao, ano } = req.body;
      let resposta = await Meme.create(req.body);
      return res.json(201, resposta);
    }
  },

  //Atualizar meme
  update: async (req, res) => {
    console.log("Executando rota update!");
    let { id } = req.params;
    let resposta = await Meme.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    return res.json(200, resposta);
  },

  //Buscar todos memes
  search: async (req, res) => {
    console.log("Executando rota search (todos)!");
    let resposta = await Meme.find();
    return res.json(200, resposta);
  },

  //Buscar meme por id
  searchWithId: async (req, res) => {
    console.log("Executando rota search (Por id)!");
    let { id } = req.params;
    let resposta = await Meme.findById(id);
    return res.json(200, resposta);
  },

  //Buscar por id e remover
  remove: async (req, res) => {
    console.log("Executando rota remove!");
    let { id } = req.params;
    let resposta = { id, excluido: await Meme.findByIdAndDelete(id) };
    return res.json(200, resposta);
  },
};
