const inicio = () => {
    console.log('inicio')
}

const fim = () => {
    console.log('fim')
}


const processa = (function1, function2) =>{
    function1();

    function2();
}

processa(inicio,fim)

