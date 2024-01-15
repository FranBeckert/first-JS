let n = 5;
let string = "";
// Upside pyramide
// External loop (first vertical row)
for (let i= 1; i <= n; i++) {
  // printing spaces
  for (let j=n; j>i; j--) {
    string += " ";
  }
  // printing star 
  for (let k=0; k < 2 * i -1; k++) {
    string += "*";
  }
  string += "\n";
}

// downside pyramide
for (let i=1; i<=n -1; i++) { 
  for (let j=0; j<i; j++) {
    string += " ";
  }
  for (let k= (n-i)*2-1; k>0; k--) {
    string += "*"
  }
  string += "\n";
}

console.log(string);