var Range = function(start, end, step) {
  //Your code here

  if (start === undefined) {
    start = null;
  }
  if (end === undefined) {
    end = start;
  }

  if (step === undefined) {
    if (start > end) {
      step = -1;
    } else {
      step = +1;
    }
  }
  this.start = start;
  this.end = end;
  this.step = step;
};

Range.prototype.size = function() {
  //Your code here
  debugger;
  // still need modification (10, 0, -2) give me 6 should size =5 [10,8,6,4,2]
  var count = 0;
  if (this.end >= this.start) {
    for (var i = this.start; i <= this.end; i += this.step) {
      count++;
    }
  }

  if (this.start > this.end) {
    for (var i = this.start; i >= this.end; i += this.step) {
      count++;
    }
  }

  return count;
};

Range.prototype.each = function(callback) {
  //Your code here
  // debugger;
  console.log(this.step);
  if (this.step > 0) {
    for (var i = this.start; i <= this.end; i += this.step) {
      callback(i);
    }
  } else if (this.step < 0) {
    console.log(this.step);
    for (var i = this.start; i >= this.end; i += this.step) {
      callback(i);
    }
  }
};

Range.prototype.includes = function(val) {
  //Your code here
  if (this.end >= this.start) {
    for (var i = this.start; i <= this.end; i += this.step) {
      if (i === val) {
        return true;
      }
    }
  }

  if (this.start > this.end) {
    for (var i = this.start; i >= this.end; i += this.step) {
      if (i === val) {
        return true;
      }
    }
  }
  return false;
};
