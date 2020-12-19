const { Router } = require("restify-router");

const MemeController = require("../controllers/memeController");
const AuthController = require("../controllers/authController");

const RouterInstance = new Router();
//Ocorre a verificação do token em todas as rotas para que prossiga com a ação

//Rota para criação de meme (post)
RouterInstance.post(
  "/meme",
  AuthController.validateToken,
  MemeController.create
);

//Rota para atualização do meme (patch)
RouterInstance.patch(
  "/meme/:id",
  AuthController.validateToken,
  MemeController.update
);

//Rota de busca de todos os memes (search)
RouterInstance.get(
  "/meme",
  AuthController.validateToken,
  MemeController.search
);

//Rota de busca de um meme por id (search)
RouterInstance.get(
  "/meme/:id",
  AuthController.validateToken,
  MemeController.searchWithId
);

//Rota de remoção de um meme por id (delete)
RouterInstance.del(
  "/meme/:id",
  AuthController.validateToken,
  MemeController.remove
);

module.exports = RouterInstance;
