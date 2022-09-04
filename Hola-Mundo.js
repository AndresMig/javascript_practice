document.write("Hola mundo desde fichero externo");
console.log("Muestra esto en la consola ");
console.log(88+4);


//Cambiar color de forma aleatoria con el color azul fijo.
function cambioColor(event){
    let new_color = Math.random().toString().slice(3, 7);
    event.target.style = `background-color:#${new_color}99`;
    console.log(`#${new_color}99`);

}
//todo lo que se le escriba en el text_box se imprima en el html
function Imprimir(){
    //Esta variable toma el valor del input que queremos imprimir
    const Impresion = document.getElementById('TextBox1').value;
    //Esta variable toma la etiqueta con todas las etiquetas que estan dentro de esta
    const body = document.getElementById('IdBody');
    //Aqui creamos una variable que crea etiquetas, createElement crea una etiqueta y esta seria igual a la etiqueta creada
    const p = document.createElement("p");
    //Modificar el html del elemento
    p.innerText = Impresion;
    //Aqui le asignamos la etiqueta como hijo para que se le agregue al html
    body.appendChild(p);
}

// Hacer un boton que agregue texto y cambie de color cuando le de click

function ImprimirTextDin(){
    const Impresion = document.getElementById('TextBox1').value;
    const body = document.getElementById('IdBody');
    const p = document.createElement("p");
    p.innerHTML = Impresion;
    p.onclick = cambioColor;
    body.appendChild(p);
}

function ImprimirTextDin2(){
    const Impresion = document.getElementById('TextBox1').value;
    const body = document.getElementById('IdBody');
    body.innerHTML += `<p onclick="cambioColor(event)">${Impresion}</p>`;
}
