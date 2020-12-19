const { Schema, model } = require("mongoose");

//Esquema do BD
const MemeSchema = new Schema(
  {
    titulo: String,
    descricao: String,
    ano: Number,
  },
  {
    //Criação dos campos createdAt e updateAt
    timestamps: true,
  }
);

module.exports = model("Meme", MemeSchema);
