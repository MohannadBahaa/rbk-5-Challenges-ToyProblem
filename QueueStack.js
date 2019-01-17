// Write a stack. Once you’re done, implement a queue using two stacks to create FIFO behavior.
//  The queue should not have any storage separate from its stacks.

var Stack = function() {
  var storage = [];

  this.push = function(val) {
    // push to arr the value for any stack
    storage.push(val);
  };

  this.pop = function() {
    // get  the last elmant from the arr
    return storage.pop();
  };

  this.size = function() {
    // the size  for the arr is arr.length
    return storage.length;
  };
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val) {
    while (outbox.size() > 0) {
      // store the pop value from the first one and put it in the first one
      var temp = outbox.pop();
      inbox.push(temp);
    }
    // if there is no item push the val to arr
    inbox.push(val);
  };

  this.dequeue = function() {
    // ittrative inside the stack inbox and push the pop value from the inbox to outbox
    while (inbox.size() > 0) {
      var temp = inbox.pop();
      outbox.push(temp);
    }
    return outbox.pop();
  };

  this.size = function() {
    var queueSize = inbox.size() + outbox.size();
    return queueSize;
  };
};
