function a(){
    console.log('Executado a()')
}

function b(){
    console.log('Executado b()')
}

function c(){
    console.log('Executado c()')
    a()
    b()
}

c()