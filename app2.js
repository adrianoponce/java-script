function TrocarValores(){
    // recebe valores
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    console.log(valor1,valor2)
    // troca valores
    document.getElementById('n1').value = valor2
    document.getElementById('n2').value = valor1
}

function Somar(){
    //recebe valores
    let valor1 = document.getElementById('n1').value
    let valor2 = document.getElementById('n2').value
    //converte e soma os valores
    let total = parseFloat(valor1) + parseFloat(valor2)
    document.getElementById('resposta').innerHTML = total
}