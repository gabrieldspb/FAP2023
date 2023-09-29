function calcular(operador) {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);

    let resultado;
    if (isNaN(valor1) || isNaN(valor2)) {
        alert('Por favor, insira valores numéricos.');
        return;
    }

    switch (operador) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                alert('Não é possível dividir por zero.');
                return;
            }
            break;
        default:
            alert('Operador inválido.');
            return;
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

function limpar() {
    document.getElementById('valor1').value = '';
    document.getElementById('valor2').value = '';
    document.getElementById('resultado').innerText = 'Resultado: ';
}
