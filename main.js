
function app(arr = [], target) {
  arr.push(target);
  arr.sort((a, b) => a - b);
  let index = arr.indexOf(target);
  console.log(index);
  return index;
}

app([1, 3, 5, 6], 7); 
app([1, 3, 5, 6], 2); 
app([1, 3, 5, 6], 4); 
