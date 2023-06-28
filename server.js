import app from "./src/app.js";

const porta = process.env.PORT || 4000;


app.listen(porta, () => {
  console.log(`API rodando em http://localhost:${porta}`);
});
