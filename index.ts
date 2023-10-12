const fs = require("fs");

const lerArquivo = (): unknown => {
  return JSON.parse(fs.readFileSync("./bd.json"));
}

const escreverArquivo = (dados: any): void => {
  fs.writeFileSync("./bd.json", JSON.stringify(dados));
}

type Endereco = {
  cep: string,
  rua: string,
  complemento?: string,
  bairro: string,
  cidade: string
}

type Usuario = {
  nome: string,
  email: string,
  cpf: string,
  profissao?: string,
  endereco: Endereco | null
}

const cadastrarUsuario = (dados: Usuario): Usuario => {
  const bd = lerArquivo() as Usuario[];
  bd.push(dados);
  escreverArquivo(bd);
  return dados;
}

const listarUsuarios = (): Usuario[] => {
  return lerArquivo() as Usuario[];
}

// const adrian = cadastrarUsuario({
//   nome: "Adrian",
//   email: "adrian@email.com",
//   cpf: "12345678900",
//   endereco: {
//     cep: "88080250",
//     rua: "Abel Capela",
//     bairro: "Coqueiros",
//     cidade: "Florianópolis"
//   }
// });

const guido = cadastrarUsuario({
  nome: "Guido",
  email: "guido@email.com",
  cpf: "12345678901",
  profissao: "Professor BackEnd",
  endereco: {
    cep: "12345-678",
    rua: "Rua A",
    bairro: "Centro",
    cidade: "Salvador"
  }
});

const bd = lerArquivo();
console.log(guido, bd);
