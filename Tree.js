class Tree {

  constructor(rootValue, datas) {
    this.rootNode = new Node(rootValue, null, null);
    this.datas = datas;
    this.nodes = [];
    datas.forEach(element => {
      this.insertNode(element, this.rootNode);
    });
  } 

  insertNode(value, parentNode) {
    if (value < parentNode.value) {
      if (parentNode.leftChild !== null) this.insertNode(value, parentNode.leftChild);
      else {
        const newNode = new Node(value, null, null);
        parentNode.leftChild =  newNode;
        this.nodes.push(newNode);
      }
    }
    else if (value > parentNode.value) {
      if (parentNode.rightChild !== null) this.insertNode(value, parentNode.rightChild);
      else {
        const newNode = new Node(value, null, null);
        parentNode.rightChild =  newNode;
        this.nodes.push(newNode);
      }
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
    return floorsLeft > floorsRight ? floorsLeft : floorsRight;
  }

  draw() {
    let spacers = this.getNbFloors();

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
console.log(tree.getNbFloors());