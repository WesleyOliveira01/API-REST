import mongoose, { mongo } from "mongoose";

mongoose.connect(
  "mongodb+srv://wesleyoliveiradev01:20011227@cluster0.dcvh28t.mongodb.net/livros-node"
);

let db = mongoose.connection;

export default db