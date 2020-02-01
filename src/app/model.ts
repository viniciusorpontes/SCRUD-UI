export class Categoria {
  id: number;
  nome: string;
}

export class Produto {
  id: number;
  nome: string;
  preco: number;
  categoria = new Categoria();
}

export class Estado {
  id: number;
  nome: string;
}

export class Cidade {
  id: number;
  nome: string;
  estado = new Estado();
}

export class Cliente {
  id : number;
  nome : string;
  email : string;
  cpfoucnpj : string;
  telefone : string;
  logradouro : string;
  numero : string;
  complemento : string;
  bairro : string;
  cep : string;
  cidade = new Cidade();
}