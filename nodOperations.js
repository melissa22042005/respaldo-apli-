// nodOperations.js
function createLinkedListFromArray(arr) {
  let head = null;
  let current = null;

  arr.forEach(value => {
    const newNode = { value, next: null };
    if (!head) {
      head = newNode;
      current = newNode;
    } else {
      current.next = newNode;
      current = newNode;
    }
  });

  return head;
}

function printNodes(head) {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function countNodesRecursive(node) {
  if (!node) return 0;
  return 1 + countNodesRecursive(node.next);
}

// Prueba
const values = [1, 2, 3, 4, 5];
const head = createLinkedListFromArray(values);
printNodes(head);
console.time("Count");
const count = countNodesRecursive(head);
console.timeEnd("Count");
console.log("Total nodos:", count);

// Lista vacía
console.time("EmptyCount");
console.log("Total nodos vacía:", countNodesRecursive(null));
console.timeEnd("EmptyCount");
