import {Item, Pedido} from './atividades/1'
import {Circulo, Retangulo} from './atividades/2'
import {Animal, Cachorro, Cavalo, Gato} from './atividades/3'

const item1 = new Item (4000, 'Computador', 'Funciona');
const item2 = new Item (20000, 'Macbook', 'Não funciona');

const pedido = new Pedido ([item1, item2]);

console.log(pedido.valorTotal);  
console.log(pedido.itens);     

console.log('   ');  
console.log(' /// ');  
console.log('   ');  

const circulo = new Circulo(5);
circulo.desenhar();
circulo.redimensionar();

const retangulo = new Retangulo(10, 20);
retangulo.desenhar();
retangulo.redimensionar();

console.log('   ');  
console.log(' /// ');  
console.log('   ');  

const meuAnimal = new Animal ('Dragonii', 15, 5)
const meuCachorro = new Cachorro ('Dragonii', 15, 5)
const meuCavalo = new Cavalo ('Dragonii', 15, 5)
const meuGato = new Gato ('Dragonii', 15, 5)

meuAnimal.comer()
meuCachorro.latir()
meuCavalo.galopar()
meuGato.miar()

console.log(` `)