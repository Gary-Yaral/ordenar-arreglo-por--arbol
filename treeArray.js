class Tree {
  constructor(value) {
    this.root = value
    this.left = null
    this.right = null
    this.data = []
    this.op = {
      normal: function(v, r) {
        return v < r
      }, 
      reverse: function(v, r) {
        return v > r
      }
    }
  }
  
  addNode(value, sign, callback, saveRepeated) {
    let [_value, _root] = callback(value, this.root)
    let order = this.op[sign](_value, _root)
    let areEquals = _value === _root

    if(order){
       return this.saveLeft(this, value, sign, callback, saveRepeated)
    } 
    
    if(!saveRepeated) {
      return this.saveRight(this, value, sign, callback, saveRepeated)
    }
       
    if(!areEquals) {
      return this.saveRight(this, value, sign, callback, saveRepeated)
    }    
  }
  
  createArray(node, array, orderType) {
    if (node !== null) {
      if(orderType === "inOrder") {
        this.inOrder(node, array, orderType)
      }
      if(orderType === "minmax") {
        this.inOrder(node, array, orderType)
      }
      
      if(orderType === "maxmin") {
        this.maxMin(node, array, orderType)
      }
      
      if(orderType === "preOrder") {
        this.preOrder(node, array, orderType)
      }
      
      if(orderType === "postOrder") {
        this.postOrder(node, array, orderType)
      }
      
    }
  }
  
  inOrder(node, array, orderType) {
      // Left
      array.push(node.root); // Save data
      this.createArray(node.left, array, orderType);
      // Right
      this.createArray(node.right, array, orderType);
  }
  
  maxMin(node, array, orderType) {
      // Right
      this.createArray(node.right, array, orderType);
      array.push(node.root); // Save data
      // Left
      this.createArray(node.left, array, orderType);
  }
  
  inOrder(node, array, orderType) {
      // Left
      this.createArray(node.left, array, orderType);
      array.push(node.root); // Save data
      // Right
      this.createArray(node.right, array, orderType);
  }
  
  preOrder(node, array, orderType) {
      array.push(node.root); // Save data
      // Left
      this.createArray(node.left, array, orderType);
      // Right
      this.createArray(node.right, array, orderType);
  }
  
  postOrder(node, array, orderType) {
      array.push(node.root); // Save data
      // Right
      this.createArray(node.right, array, orderType);
      // Left
      this.createArray(node.left, array, orderType);
  }
  
  saveLeft(node, value, sign, callback, saveRepeated) {
    // Is empty
      if(node.left === null) {
        node.left = new Tree(value)
      } else {
        node.left.addNode(value, sign, callback, saveRepeated)
      }
  }
  
  saveRight(node, value, sign, callback, saveRepeated) {
    // Is empty
      if(node.right === null) {
        node.right = new Tree(value)
      } else {
        node.right.addNode(value, sign, callback, saveRepeated)
      }
  }
  
  getArray(orderType) {
    this.data = []
    this.createArray(this, this.data,orderType)
    return this.data
  }
}

function orderArray(array, orderType, sign, callback, repeated = false) {
  let mainTree = new Tree(null) 
  if(array.length > 0) {
    mainTree = new Tree(array[0]) 
    for (let i = 1; i< array.length; i++) {
      mainTree.addNode(array[i], sign, callback, repeated)
    }
  }
  return mainTree
}

/* GARY YARAL */
