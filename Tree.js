class Tree {

  constructor(rootValue, datas) {
    this.nodes = [];
    this.rootNode = new Node(rootValue, null, null);
    this.nodes.push(this.rootNode);
    this.datas = datas;
    datas.forEach(element => {
      this.insertNode(element, this.rootNode);
    });
  } 

  insertNode(value, parentNode) {
    if (value < parentNode.value) {
      if (parentNode.leftChild !== null) this.insertNode(value, parentNode.leftChild);
      else parentNode.leftChild =  new Node(value, null, null);
    }
    else if (value > parentNode.value) {
      if (parentNode.rightChild !== null) this.insertNode(value, parentNode.rightChild);
      else parentNode.rightChild =  new Node(value, null, null);
    }
    else console.log('error: node has a wrong value, probably already in the tree');
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
    console.log(floorsLeft, 'floors left');
    console.log(floorsRight, 'floors right');
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
console.log(tree.getNbFloors());