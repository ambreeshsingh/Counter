const countValue = document.querySelector('#counter');

function increment() {
  // get value from UI
  let value = parseInt(countValue.innerText);
  // update the value
  value += 1;
  // set value onto UI
  countValue.innerText = value;
}

function decrement() {
  let value = parseInt(countValue.innerText);
  value -= 1;
  countValue.innerText = value;
}
