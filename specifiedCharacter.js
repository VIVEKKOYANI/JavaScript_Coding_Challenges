function countChar(word, char) {
  word = word.toLowerCase();
  char = char.toLowerCase();

  return totalCount = word.split("").reduce((accum, curre) => {
    if (curre === char) {
      accum++;
    }
    return accum;
  }, 0);

}

console.log(countChar("MissIssippi", "I"));