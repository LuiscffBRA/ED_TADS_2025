// Lista 2 - Estrutura de Dados em JavaScript

// QUESTÃO 1: Pilha implementada com duas filas básicas
class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element); // Adiciona elemento ao final da fila
    }
  
    dequeue() {
      return this.items.shift(); // Remove e retorna o primeiro elemento da fila
    }
  
    isEmpty() {
      return this.items.length === 0; // Verifica se a fila está vazia
    }
  
    size() {
      return this.items.length; // Retorna o tamanho da fila
    }
  }
  
  class StackUsingQueues {
    constructor() {
      this.queue1 = new Queue();
      this.queue2 = new Queue();
    }
  
    push(element) {
      // Adiciona o elemento à fila 1
      this.queue1.enqueue(element);
    }
  
    pop() {
      // Transfere todos os elementos, menos o último, da fila 1 para a fila 2
      while (this.queue1.size() > 1) {
        this.queue2.enqueue(this.queue1.dequeue());
      }
  
      // Remove o último elemento da fila 1
      const poppedElement = this.queue1.dequeue();
  
      // Troca as filas (fila 2 se torna a nova fila 1)
      [this.queue1, this.queue2] = [this.queue2, this.queue1];
  
      return poppedElement;
    }
  }
  
  // QUESTÃO 2: Fila implementada com duas pilhas básicas
  class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element); // Adiciona elemento ao topo da pilha
    }
  
    pop() {
      return this.items.pop(); // Remove e retorna o elemento do topo da pilha
    }
  
    isEmpty() {
      return this.items.length === 0; // Verifica se a pilha está vazia
    }
  }
  
  class QueueUsingStacks {
    constructor() {
      this.stack1 = new Stack();
      this.stack2 = new Stack();
    }
  
    enqueue(element) {
      // Adiciona elemento à pilha 1
      this.stack1.push(element);
    }
  
    dequeue() {
      if (this.stack2.isEmpty()) {
        while (!this.stack1.isEmpty()) {
          // Move todos os elementos da pilha 1 para a pilha 2
          this.stack2.push(this.stack1.pop());
        }
      }
  
      return this.stack2.pop();
    }
  }
  
  // QUESTÃO 3: Sistema para gerenciar caminhoneiros
  class TruckQueue {
    constructor() {
      this.queue = new Queue();
      this.maxCapacity = 10;
    }
  
    addTruck(truck) {
      if (this.queue.size() < this.maxCapacity) {
        this.queue.enqueue(truck);
      } else {
        console.log("Capacidade máxima atingida!");
      }
    }
  
    removeTruck() {
      return this.queue.dequeue();
    }
  
    listTrucks() {
      return this.queue.items;
    }
  
    hasTrucks() {
      return !this.queue.isEmpty();
    }
  }
  
  // QUESTÃO 4: Intercalar duas filas
  function intercalateQueues(queue1, queue2) {
    const resultQueue = new Queue();
  
    while (!queue1.isEmpty() || !queue2.isEmpty()) {
      if (!queue1.isEmpty()) {
        resultQueue.enqueue(queue1.dequeue());
      }
      if (!queue2.isEmpty()) {
        resultQueue.enqueue(queue2.dequeue());
      }
    }
  
    return resultQueue;
  }
  
  // QUESTÃO 5: Implementação de Deque
  class Deque {
    constructor() {
      this.items = [];
    }
  
    addFront(element) {
      this.items.unshift(element); // Adiciona elemento no início
    }
  
    addRear(element) {
      this.items.push(element); // Adiciona elemento no final
    }
  
    removeFront() {
      return this.items.shift(); // Remove e retorna o elemento no início
    }
  
    removeRear() {
      return this.items.pop(); // Remove e retorna o elemento no final
    }
  }
  
  // QUESTÃO 6: Reverter uma fila recursivamente
  function reverseQueue(queue) {
    if (queue.isEmpty()) {
      return;
    }
  
    const element = queue.dequeue();
    reverseQueue(queue);
    queue.enqueue(element);
  }
  
  // TESTES
  
  // Teste Questão 1: Pilha com filas
  console.log("--- Questão 1 ---");
  const stack1 = new StackUsingQueues();
  stack1.push(1);
  stack1.push(2);
  stack1.push(3);
  console.log(stack1.pop()); // Deve exibir 3
  console.log(stack1.pop()); // Deve exibir 2
  
  // Teste Questão 2: Fila com pilhas
  console.log("--- Questão 2 ---");
  const queue1 = new QueueUsingStacks();
  queue1.enqueue(1);
  queue1.enqueue(2);
  queue1.enqueue(3);
  console.log(queue1.dequeue()); // Deve exibir 1
  console.log(queue1.dequeue()); // Deve exibir 2
  
  // Teste Questão 3: Gerenciamento de caminhoneiros
  console.log("--- Questão 3 ---");
  const truckQueue = new TruckQueue();
  truckQueue.addTruck("Caminhão 1");
  truckQueue.addTruck("Caminhão 2");
  console.log(truckQueue.listTrucks()); // Deve exibir ["Caminhão 1", "Caminhão 2"]
  console.log(truckQueue.removeTruck()); // Deve exibir "Caminhão 1"
  
  // Teste Questão 4: Intercalar duas filas
  console.log("--- Questão 4 ---");
  const q1 = new Queue();
  const q2 = new Queue();
  q1.enqueue(1);
  q1.enqueue(3);
  q2.enqueue(2);
  q2.enqueue(4);
  const intercalatedQueue = intercalateQueues(q1, q2);
  console.log(intercalatedQueue.items); // Deve exibir [1, 2, 3, 4]
  
  // Teste Questão 5: Deque
  console.log("--- Questão 5 ---");
  const deque = new Deque();
  deque.addFront(1);
  deque.addRear(2);
  deque.addFront(0);
  console.log(deque.removeFront()); // Deve exibir 0
  console.log(deque.removeRear()); // Deve exibir 2
  
  // Teste Questão 6: Reverter fila
  console.log("--- Questão 6 ---");
  const reverseTestQueue = new Queue();
  reverseTestQueue.enqueue(1);
  reverseTestQueue.enqueue(2);
  reverseTestQueue.enqueue(3);
  reverseQueue(reverseTestQueue);
  console.log(reverseTestQueue.items); // Deve exibir [3, 2, 1]
  