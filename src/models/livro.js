import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id:{type:String},
    nome:{type:String,require:true},
    autor:{type:String,require:true},
    editora:{type:String,require:true},
    paginas:{type:Number}
})

const livros = mongoose.model("livros",livroSchema)

export default livros