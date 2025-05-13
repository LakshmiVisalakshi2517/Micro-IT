function sample(){
    document.getElementById("display").value=""
}
function fun(num){
    document.getElementById("display").value+=num
}
function calculate(){
    var res = eval(document.getElementById('display').value);
    document.getElementById('display').value = res;
}
document.addEventListener("keydown", function(event) {
    const key = event.key;
    const validKeys = "0123456789+-*/.";
    if (validKeys.includes(key)) {
        fun(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Escape" || key === "Backspace") {
        sample();
    }
});
