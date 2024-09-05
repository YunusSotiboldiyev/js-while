let a = prompt("Matn kiriting");
var c = 0;
let b = +prompt("son kiriting");

if (b === '') b = 100; 
if (a === '') a = "Nega yozmading 😡"; 

while(b>c) {
    document.write(a);
    b--;
}
