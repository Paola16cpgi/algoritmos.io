// 1. Algoritmo que realiza la suma entre 2 valores ingresados por el usuario 
function suma(){
    //DECLARO LAS VARIABLES NECESARIAS PARA HACER LA SUMA 

    let A;
    let B;
    let C;
    let S;

    //solicito los valores al usuario
    A = parseInt(prompt('Ingrese el primer valor a sumar'));
    B = parseInt(prompt('Ingrese el segundo valor a sumar'));

    //Realizar la operacion 
    S = A+B;
    // MOSTRAR EL RESULTADO
    console.log('El reultado de la suma es:' +S);
    alert('El resultado de la suma es:' + S)
}

// 2. Algoritmo que determina la suma, resta, multiplicación y división entre 2 valores ingresados por el usario 
function opBasicas (){
    let w;
    let x;
    let y;
    let z;
    let m;
    let d;

    w = parseInt(prompt('Ingrese el primer valor'));
    x = parseInt(prompt('Ingrese el primer valor'));

    y = w+x;
    console.log(' El resultado de la suma es:' +y);
    alert('El resultado de la suma es:' +y);

    z = w-x;
    console.log(' El resultado de la resta es:' +z);
    alert('El resultado de la resta es:' +z);

    m = w*x;
    console.log(' El resultado de la multiplicacion es:' +m);
    alert('El resultado de la multiplicacion es:' +m);

    d = w/x;
    console.log(' El resultado de la división es:' +d);
    alert('El resultado de la división es:' +d);


}

// 3. Realizar un algoritmo que determine el cuadrado de un numero ingresado por el usuario 
// 4. Determine el area de un triangulo a partir de la base y altura ingresadas por el usuario
// 5. Realizar un algoritmo que determine los kilometros, pulgadas y metos de una valor dado en cm 
// 6. Realizar un algoritmo que determine el número mayor de dos numeros ingresados por el usuario
// 7. Realizar un algoritmo que determinede el número menor de 3 numeros ingresados por el usuario
// 8. Realizar un algoritmo que solicite al estudiante, su nombre, la materia y ocho calificaciones de la misma entre 1 y 10. determinar con esta información si el estudiante aprobo o reprobo teniendo en cuenta que se aprueba con 6.2 en adelante 
// 9. Determinar si un numero ingresado por el usuario es par o impar 
// 10. Un individio desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de (N) numero de años, teniendo en cuenta que el banco paga un interes mensual del 0.7%
// 11. Realizar un algoritmo que solicite al usuario un rango entre 2 valores y muestre los numeros que hay entre estos 

//3.

function opCuadrado (){
    let J;
    

    J = parseInt(prompt('Ingrese el primer valor'));

    oper = J**2;

    console.log('El resultado es:' +oper);
    alert('El resultado es:' +oper);
}

//4.

function opBase(){
    let Ba;
    let Al;
    let R;

    Ba = parseInt(prompt('Ingrese la base'));
    Al = parseInt(prompt('Ingrese la altura'));

    R = (Ba*Al)/2;

    console.log('El resultado es:' +R);
    alert('El resultado es:' +R);
}

//5.

function opConversion(){
    let cm;

    cm = parseInt(prompt('Ingrese el valor en cm'));
    let mt;
    let km;
    let pg;

    mt = cm/100;
    km= cm/100000;
    pg =cm/2.54;

    console.log('El resultado en metros es:' +mt);
    alert('El resultado en metros es:' +mt);

    console.log('El resultado en kilometros es:' +km);
    alert('El resultado en kilometros es:' +km);

    console.log('El resultado en pulgadas es:' +pg);
    alert('El resultado en pulgadas es:' +pg);

}

//6. 

function opMayor(){
    let n1;
    let n2;
    let nmayor;

    n1= parseInt(prompt('Ingrese el primer numero'));
    n2= parseInt(prompt('Ingrese el primer segundo numero'));




    nmayor;
    
    if (n1==n2){
        console.log('Los numeros son iguales' );
        alert('Los numeros son iguales' );
    }
    else if (n1>n2){
        nmayor =n1;
        console.log("el numero mayor es: " +nmayor);
        alert('El numero mayor es: ' +nmayor);
    }

    else {
        nmayor=n2;
       
        console.log("el numero mayor es: " +nmayor);
        alert('El numero mayor es: ' +nmayor);
    }
}

//7.

function opMenor(){
    let nu1;
    let nu2;
    let nu3;
    let numenor;

    nu1= parseInt(prompt('Ingrese el primer numero'));
    nu2= parseInt(prompt('Ingrese el segundo numero'));
    nu3= parseInt(prompt('Ingrese el tercer numero'));

    numenor;

    if (nu1==nu2 && nu1==nu3){
        

        console.log('Todos los numeros son iguales');
        alert('Todos los numeros son iguales');
    }
    else if (nu1<nu2 && nu1<nu3){
        numenor=nu1;

        console.log('Elnumero menor es: ' +nu1);
        alert('Elnumero menor es: ' +nu1);
    }

    else if (nu2<nu1 && nu2<nu3){
        numenor=nu2;

        console.log('Elnumero menor es: ' +nu2);
        alert('Elnumero menor es: ' +nu2);
    }

    else {
        numenor=nu3;

        console.log('Elnumero menor es: ' +nu3);
        alert('Elnumero menor es: ' +nu3);
    }

}

//8.

function opPromedio(){
    let nombre;
    let materia;
    let nota1;
    let nota2;
    let nota3;
    let nota4;
    let nota5;
    let nota6;
    let nota7;
    let nota8;
    let resultado_final;

    nombre= prompt('Ingrese su nombre');
    materia= prompt('Ingrse la materia a evaluar');
    nota1= parseFloat(prompt('Ingrese la primera nota'));
    nota2= parseFloat(prompt('Ingrese la segunda nota'));
    nota3= parseFloat(prompt('Ingrese la tercera nota'));
    nota4= parseFloat(prompt('Ingrese la cuate nota'));
    nota5= parseFloat(prompt('Ingrese la quinta nota'));
    nota6= parseFloat(prompt('Ingrese la sexta nota'));
    nota7= parseFloat(prompt('Ingrese la septima nota'));
    nota8= parseFloat(prompt('Ingrese la octava nota'));

    resultado_final = (nota1+nota2+nota3+nota4+nota5+nota6+nota7+nota8)/8;

    if (resultado_final>= 9.0){
        console.log('Alumno ' +nombre + ' la materia ' +materia + ' felicitaciones ha sido aprobada con alto desempeño, su nota fue ' + resultado_final);
        alert('Alumno ' +nombre + ' la materia ' +materia + ' felicitaciones ha sido aprobada  con alto desempeño ,su nota fue ' +resultado_final);
    }

    else if(resultado_final>=7.5){
        console.log('Alumno ' +nombre + ' la materia ' +materia + ' ha sido aprobada, su nota fue '+ resultado_final);
        alert('Alumno ' +nombre + ' la materia ' +materia + ' ha sido aprobada, su nota fue'+resultado_final);
    }

    else if (resultado_final>=6.3){
        console.log('Alumno ' + nombre + ' la materia ' +materia + ' ha sido aprobada sin embargo debe mejorar, su nota fue ' + resultado_final );
        alert('Alumno ' + nombre + ' la materia ' +materia + ' ha sido aprobado sin embargo debe mejorar, su nota fue' + resultado_final);
    }

    else{
        console.log('Alumno ' +  nombre + ' la materia ' +materia + ' ha sido reprobado, su nota fue ' +resultado_final);
        alert('Alumno ' + nombre + ' la materia ' +materia + ' ha sido reprobado, su nota fue ' +resultado_final);
    }

}

//9.

function opPar(){
    
    let Numero;
    let par;

    Numero= parseInt(prompt('Ingrese el numero'));

    par;
    if (Numero%2==0){
        console.log('El numero ' + Numero + ' es par');
        alert('El numero ' + Numero + ' es par');
    }

    else{
        console.log('El numero ' + Numero + 'es impar');
        alert('El numero ' +Numero + ' es impar');
    }
}

//10.

function opInversion(){

    let num_deaños;
    let valor;
    let interes;
    

    valor = parseInt(prompt('Ingrese el monto a invertir'));
    num_deaños = parseFloat(prompt('Ingrese el numero de años de su inversion'));

    interes= num_deaños*8.4
    ganancias= valor*interes/100
    total=valor+ganancias

    console.log('El valor de interes neto es: ' +ganancias + ' tu saldo total al finalizar la inversión sera: ' +total);
    alert('El valor de interes neto es: ' +ganancias + ' tu saldo total al finalizar la inversión sera: ' +total);
}




//11.

function opRangos(){

    let v1;
    let v2;
    

    v1 = parseInt(prompt('Ingrese el primer valor'));
    v2 = parseInt(prompt('Ingrese el segundo valor'));

    if (v1 < v2) {
        for (let i = v1; i <= v2; i++) {
            console.log('Ahora el número es: ' + i);
            alert('Ahora el número es: ' + i);
        }
    } else {
        alert('El primer valor debe ser menor que el segundo valor');
    }
}

function opGramos(){

    let gr;

    gr = parseInt(prompt('Ingrese el valor en gramos'));
    let lb;
    let kg;
    
    lb =gr/453.592;
    kg= gr/1000;

    console.log('El peso en libras es :' +lb);
    alert('El peso en libras es :' +lb);

    console.log('El peso en kilogramos es:' +kg);
    alert('El peso en kilogramos es :' +kg);
}

function opMonedas(){

    let pesos;

    pesos = parseFloat(prompt('Ingrese el valor a convertir'));
    let usd;
    let euros;
    
    usd =pesos/4.438;
    euros= pesos/4.838;

    console.log('El cambio a dolares es :' + usd);
    alert('El cambio a dolares es:' + usd);

    console.log('El cambio a euros es:' + euros);
    alert('El cambio a euros es:' + euros);
}