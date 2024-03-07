export class Item {
  valor: number;
  nome: string;
  descricao: string;

  constructor(valor: number, nome: string, descricao: string) {
    this.valor = valor;
    this.nome = nome;
    this.descricao = descricao;
  }
}

export class Pedido {
  itens: Item[];
  valorTotal: number;

  constructor(itens: Item[]) {
    this.itens = itens;
    this.valorTotal = this.calcularValorTotal();
  }

  private calcularValorTotal(): number {
    return this.itens.reduce((total, item) => total + item.valor, 0);
  }
}
