// doublyLinkedList.js
let head = null;
let tail = null;

function insertAt(value) {
  const newNode = { value, next: null, prev: null };

  if (!head) {
    head = tail = newNode;
  } else {
    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;
  }
}

function reverseList(startNode) {
  let current = startNode;
  while (current) {
    const temp = current.next;
    current.next = current.prev;
    current.prev = temp;
    if (!temp) {
      head = current;
    }
    current = temp;
  }
}

// Prueba
insertAt(1);
reverseList(head); // Con un solo nodo
let current = head;
while (current) {
  console.log(current.value);
  current = current.next;
}
