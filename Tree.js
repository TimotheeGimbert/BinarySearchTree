class Tree {
  constructor(rootNode, dataArray) {
    rootNode = this.rootNode;
    dataArray = this.dataArray;
  }
  
}

class Node {
  constructor(dataValue, leftChild, rightChild) {
    dataValue = this.dataValue;
    leftChild = this.leftChild;
    rightChild = this.rightChild;
  }
  
}

var tree = new Tree();
tree.rootNode = 0;
tree.dataArray = [4,2,9,5,1,8,9];
console.log(tree);
