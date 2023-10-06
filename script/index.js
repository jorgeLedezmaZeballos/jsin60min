const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operador")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', function calcular(){
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch (operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1*op2
                break;
            case "/":
                resultado = op1/op2
                break
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    }    
    });

/*function calcular(){
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch (operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1*op2
                break;
            case "/":
                resultado = op1/op2
                break
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    }
}*/


















/*const txtOp1 = document.getElementById('op1');
console.log(txtOp1)
const txtOp2 = document.getElementById('op2');
const txtOperador = document.getElementById('operador');
const btnSumar = document.getElementById('calcular');
const txtResultado = document.getElementById('resultado');
btnSumar.addEventListener('DOMContentLoaded', calcular);

function calcular() {
    const op1 = parseFloat(txtOp1.value.trim());
    const op2 = parseFloat(txtOp2.value.trim());
    const operador = txtOperador.value;
    let resultado=0;
    console.log(op1, op2, operador);
    switch (operador) {
        case '+':
            resultado = op1 + op2;
            break;
        case '-':
            resultado = op1 - op2;
            break;
        case '*':
            resultado = op1 * op2;
            break;
        case '/':
            resultado = op1 / op2;
            break;
        default:
            resultado = 'Operador no válido';
            break;
    }
    
    txtResultado.innerText = resultado;
    
}*/