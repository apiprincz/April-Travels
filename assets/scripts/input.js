let inputBox = document.querySelectorAll("input");

for (let i = 0; inputBox < array.length; i++) {
    
    inputBox[i].addEventListener("focus", function () {

        console.log(inputBox[i].length);
        
    } )
    
}