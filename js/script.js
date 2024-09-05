let a = prompt("Matn kiriting");
var c = 0;
var b = prompt("son kiriting");
if (b === '') {
    b = 100;  // Correctly assign 100 to b if b is an empty string
}
if (a === '') {
    a = "Nega yozmading 😡";  // Correctly assign the string to a if a is an empty string
}

while(b>c) {
    document.write(a);
    b--;
}