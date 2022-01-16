class Node {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  } 
}

class Tree {
    constructor() {
      this.nodes = []; // containes all nodes for console printing purpose
      this.rootNode = new Node(null, null, null); 
    } 

  add(data) {
    const addData = (node) => {
      if (node.value === null) node.value = data;
      else if (data < node.value) { // left subtree
        if (node.leftChild === null) {
          node.leftChild = new Node(data, null, null);
          this.nodes.push(node.leftChild);
        }
        else addData(node.leftChild); // recursively calls the function with the new child node
      }
      else if (data > node.value) { // right subtree
        if (node.rightChild === null) {
          node.rightChild = new Node(data, null, null);
          this.nodes.push(node.rightChild);
        }
        else addData(node.rightChild); // recursively calls the function with the new child node
      }
      else {
        console.log('The value already exist in the tree');
        return;
      }
    }
    return addData(this.rootNode); // runs the function for the first time by calling addLeft with the root node
  }

  find(data) {
    const search = (node) => {
      if (data < node.value) search(node.leftChild);
      else if (data > node.value) search(node.rightChild);
      else return node;
    }
    return search(this.rootNode);
  }

  getNbFloors() {
    let floorsLeft = 0;
    let node = this.rootNode;
    while (node.leftChild) {
      floorsLeft++;
      node = node.leftChild;
    }
    let floorsRight = 0;
    node = this.rootNode;
    while (node.rightChild) {
      floorsRight++;
      node = node.rightChild;
    }
    return floorsLeft > floorsRight ? floorsLeft : floorsRight;
  }
}


var datas = [6,4,2,9,5,1,8,3];
var tree = new Tree();
datas.forEach(element => {
  tree.add(element);
});
console.log(tree);
console.log(tree.find(9));
