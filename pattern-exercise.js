// // Pseudocode:
// SET n to 5
// SET string to undefined
// // Upside pyramide
// FOR i from 1 to n
//   FOR j from  n to i
//   FOR K from 0 to (2 * i -1)
// // downside pyramide  
// FOR i from 1 to (n-1)  
//   FOR j from 0 to i
//   FOR k from (n-1) to 0

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