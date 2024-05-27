const button = document.querySelector("button")

function clickButton() {

    const resultValue = document.querySelector(".value-result")
    const alteredParagraph = document.querySelector(".paragraph-result")
    const rightInput = Math.floor(document.querySelector(".right-input").value)
    const leftInput = Math.ceil(document.querySelector(".left-input").value)
    
    if(leftInput > rightInput) {
       alert ("O valor minimo tem que ser Menor que o valor máximo ")

    }else{
        const result = Math.floor(Math.random() * (rightInput - leftInput + 1)) + leftInput;
        alteredParagraph.innerHTML = ("Numero Sorteado")
        resultValue.innerHTML = (result)
    }

}

button.addEventListener("click", clickButton)

