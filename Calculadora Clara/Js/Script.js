    var numero_um = document.querySelector('#numero_um')
    var numero_dois = document.querySelector('#numero_dois')
    var resultado = document.querySelector('span')

    function Soma() 
    {
        resultado.innerHTML = parseFloat (numero_um.value) + parseFloat (numero_dois.value)
    }

    function Subtração() 
    {
        resultado.innerHTML = parseFloat (numero_um.value) - parseFloat (numero_dois.value)
    }

    function Multiplicação() 
    {
        resultado.innerHTML = parseFloat (numero_um.value) * parseFloat (numero_dois.value)
    }

    function Divisão() 
    {
        resultado.innerHTML = parseFloat (numero_um.value) / parseFloat (numero_dois.value)
    }