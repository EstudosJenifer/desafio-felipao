/*
3️⃣ Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
  */
 
  class heroi{
    constructor(nome, idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(){
        let ataque = ""
        if (this.tipo === "Mago" ) {
            ataque += "magia"
        } else if (this.tipo === "Guerreiro"){
            ataque += "espada"
        } else if (this.tipo === "Monge"){
            ataque += "artes marciais"
        } else if (this.tipo ==="Ninja"){
            ataque += "shuriken"
        } 

        console.log(`O ${this.tipo} ${this.nome} idade ${this.idade} anos atacou usando ${ataque}!`)
    }
  }

  let heroi1 = new heroi("Dumbledoor", 125, "mago")
heroi1.atacar()

let heroi2 = new heroi("Kratos", 45 , "guerreiro")
heroi2.atacar()

let heroi3 = new heroi("Ahumm", 450 , "monge")
heroi3.atacar()

let heroi4 = new heroi("Iaaa", 30 , "ninja")
heroi4.atacar()
