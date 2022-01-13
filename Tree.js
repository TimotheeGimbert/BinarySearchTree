class Tree {
  constructor(rootNode, dataArray) {
    this.rootNode = rootNode;
    this.dataArray = dataArray;
  }
}

class Node {
  constructor(dataValue, leftChild, rightChild) {
    this.dataValue = dataValue;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  } 
}

var tree = new Tree(0, [4,2,9,5,1,8,9]);
console.log(tree);
