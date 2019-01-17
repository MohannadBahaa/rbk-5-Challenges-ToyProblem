var Tree = function(value) {
  this.value = value;
  this.children = [];
};
////////////////
Tree.prototype.DFSelect = function(filter) {
  var res = [];
  // store all node children
  var level = level || 0;
  // level start from 0 then from 1 .. to finish all children
  // make recresion function to return if still there is children
  var again = function(node, level) {
    if (filter(node.value, level)) {
      // store value if filter === true
      res.push(node.value);
    }
    // to achive the node from the root to the last node (leaf)
    for (var i = 0; i < node.children.length; i++) {
      again(node.children[i], level + 1); // increase the level
    }
  };
  again(this, 0);
  return res;
};
////////////////
Tree.prototype.addChild = function(child) {
  if (!child || !(child instanceof Tree)) {
    child = new Tree(child);
  }
  if (!this.isDescendant(child)) {
    this.children.push(child);
  } else {
    throw new Error("That child is already a child of this tree");
  }
  // return the new child node for convenience
  return child;
};

Tree.prototype.isDescendant = function(child) {
  if (this.children.indexOf(child) !== -1) {
    // `child` is an immediate child of this tree
    return true;
  } else {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].isDescendant(child)) {
        // `child` is descendant of this tree
        return true;
      }
    }
    return false;
  }
};

Tree.prototype.removeChild = function(child) {
  var index = this.children.indexOf(child);
  if (index !== -1) {
    // remove the child
    this.children.splice(index, 1);
  } else {
    throw new Error("That node is not an immediate child of this tree");
  }
};
