// linkedList.js
let head = null;

function addNode(value) {
  const newNode = { value, next: null };
  if (!head) {
    head = newNode;
  } else {
    let current = head;
    while (current.next) current = current.next;
    current.next = newNode;
  }
}

function deleteNode(value) {
  if (!head) {
    console.log("Lista vacía. Nada que eliminar.");
    return;
  }

  if (head.value === value) {
    head = head.next;
    return;
  }

  let current = head;
  while (current.next && current.next.value !== value) {
    current = current.next;
  }

  if (current.next) {
    current.next = current.next.next;
  } else {
    console.log("Valor no encontrado.");
  }
}

function printList() {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

// Prueba
deleteNode(5); // Lista vacía
addNode(10);
addNode(20);
addNode(30);
printList();
deleteNode(20);
printList();
