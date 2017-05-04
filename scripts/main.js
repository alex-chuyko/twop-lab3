class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        if(isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) 
            throw new SyntaxError("Длина стороны должна быть числом.");        

        if (firstSide < 0 || secondSide < 0 || thirdSide < 0)
            throw new SyntaxError("Длина стороны не может быть отрицательной величиной.");

        if (Math.abs(firstSide) < 0.001 || Math.abs(secondSide) < 0.001 ||
            Math.abs(thirdSide) < 0.001)
            throw new SyntaxError("Длина стороны не может равняться 0.");

        if (firstSide > secondSide + thirdSide || secondSide > firstSide + thirdSide ||
            thirdSide > firstSide + secondSide)
            throw new SyntaxError("Невозможно построить треугольник с заданными длинами сторон.");

        this.first = firstSide;
        this.second = secondSide;
        this.thrid = thirdSide;
    }

    typeIs() {
        if (Math.abs(this.first - this.second) < 0.001 &&
            Math.abs(this.second - this.thrid) < 0.001) return "Равносторонний";
        if (Math.abs(this.first - this.second) < 0.001 ||
            Math.abs(this.second - this.thrid) < 0.001 ||
            Math.abs(this.first - this.thrid) < 0.001) return "Равнобедренный";
        return "Неравносторонний";
    }
} 

var inputs = document.getElementsByClassName("input-number");

for(let i = 0; i < inputs.length; i++) {
     inputs[i].onkeypress = function (e) {
        if(isNaN(parseInt(this.value)) && this.value != "") {
            this.value = 0;
        } else if(parseInt(this.value) > 150) {
            this.value = 150;
        } else if(parseInt(this.value) < 0) {
        this.value = 0;
        }
        return !(/[А-Яа-яA-Za-z \,\\\/\*\-\=\+\!\@\#\|\$\%\^\&\\(\)\[\]\{\}\"\'\>\<\?\~\`]/.test(String.fromCharCode(e.charCode)));
    };
    inputs[i].oninput = function(e) {        
        if(isNaN(parseInt(this.value)) && this.value != "") {
            this.value = 0;
        } else if(parseInt(this.value) > 150) {
            this.value = 150;
        } else if(parseInt(this.value) < 0) {
            this.value = 0;
        }
    };
}

function determineTypeTriangle() {
    try {
        var inputs = document.getElementsByClassName("input-number");
        var outputElement = document.getElementById("output-block");
        var messageTextBlock = document.getElementById("message-text");
        
        var triangle = new Triangle(parseInt(inputs[0].value), parseInt(inputs[1].value), parseInt(inputs[2].value));
        var triangleType = triangle.typeIs();

        outputElement.classList.remove("output-error");
        outputElement.classList.add("output-success");
        messageTextBlock.innerText = triangleType;
        setTimeout(function(){
            outputElement.style.display = "block";
        }, 50);
    } catch(e) {
        outputElement.classList.remove("output-success");
        outputElement.classList.add("output-error");
        messageTextBlock.innerText = e.message;        
        setTimeout(function(){
            outputElement.style.display = "block";
        }, 50);
        setTimeout(function(){
            outputElement.style.display = "none";
        }, 3000);
    }
}