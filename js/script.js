
function hitungluas(){
    square=document.getElementById("square-area").value;
    luas=square*square;
    document.getElementById("luas").value=luas;
    }
    
function hitungkeliling() {
    square=document.getElementById("square-area").value;
    keliling=4*square;
    document.getElementById("keliling").value=keliling;
}    

function calculate(keliling, luas) {
    hitungluas();
    hitungkeliling();
}
function reset(){    
    document.getElementById("squareSide-form").reset();
}