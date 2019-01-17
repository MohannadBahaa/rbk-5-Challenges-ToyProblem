// Given an arbitrary input string, return the first non-repeating character.
//For strings with all repeats, return 'sorry'.

function firstNonRepeatedCharacter(string) {
  var arrString = [];

  string.split("").forEach(ch => {
    if (!arrString[ch]) arrString[ch] = 1;
    else arrString[ch]++;
  });

  for (let i = 0; i < string.length - 1; i++) {
    let ch = string[i];
    if (arrString[ch] == 1) return ch;
  }
  return "sorry";
}
