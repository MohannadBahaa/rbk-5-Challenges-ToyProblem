// Examples
// Input	Output
// string:
// "a"	[ "", "a" ]
// string:
// "ab"	[ "", "a", "ab", "b" ]

function powerSet(string) {
  var res = [];
  res.push("");
  if (string.length === 0) return res;
  var array = string.split("").sort();
  var obj = {};
  for (var i = 0; i < array.length; i++) {
    obj[array[i]] = true;
  }
  var newArr = Object.keys(obj);
  res = res.concat(newArr);

  newArr.forEach(function(item, index) {
    if (newArr[index + 1]) {
      again(item, index + 1);
    }
  });

  function again(string, startIndex) {
    var series = [];
    for (var j = startIndex; j < newArr.length; j++) {
      series.push(string + newArr[j]);
      if (newArr[j + 1]) {
        again(string + newArr[j], j + 1);
      }
    }
    res = res.concat(series);
  }
  res.sort();
  return res;
}
