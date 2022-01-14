class Tree {

  constructor(rootValue, datas) {
    this.nodes = [];
    this.rootNode = rootValue;
    let rootNode = new Node(rootValue, null, null);
    this.nodes.push(rootNode);
    this.datas = datas;
    datas.forEach(element => {
      this.insertNode(element, rootNode);
    });
  } 

  insertNode(value, parentNode) {
    if (value < parentNode.value) {
      if (parentNode.leftChild !== null) this.insertNode(value, parentNode.leftChild);
      else if (parentNode.leftChild === null) {
        const newNode = new Node(value, null, null);
        parentNode.leftChild = newNode;
      }
    }
    else if (value > parentNode.value) {
      if (parentNode.rightChild !== null) this.insertNode(value, parentNode.rightChild);
      else if (parentNode.rightChild === null) {
        const newNode = new Node(value, null, null);
        parentNode.rightChild = newNode;
      }
    }
    else console.log('error: node has a rong value, probably already in the tree');
  }

}

class Node {
  constructor(value, leftChild, rightChild) {
    this.value = value;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  } 
}


var tree = new Tree(6, [4,2,9,5,1,8,3]);
console.log(tree);
console.log(tree.nodes);