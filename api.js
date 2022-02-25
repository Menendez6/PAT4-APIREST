const nextButton = document.getElementById("next");
const prevButton = document.getElementById("previous");
const nextBtn = document.querySelector("#btn-next");
const prevBtn = document.querySelector("#btn-previous");
const searchBtn = document.querySelector('#btn-form');
// Find a <table> element with id="tabla":
var table = document.getElementById("tabla");
var pagina = 1;
var nombre = null;
var estado = null;
var species = null;
var type = null;
var gender = null;

function buscar(){

    loading.classList.remove("visually-hidden");
    table.style.visibility = "hidden";
	document.getElementById('pagination').style.visibility = "hidden";

    //Borramos los elementos de la tabla
    limpiarTabla();

    let api = 'https://rickandmortyapi.com/api/character/?page=' + pagina;
    if (nombre !== null && nombre != ""){
        api += '&name=' + nombre;
    }
    if (estado !== "Any" && estado!= null){
        api += '&status=' + estado;
    }

    if (species !== null && species != ""){
        api += '&species=' + species;
    }

    if (type !== null && type != ""){
        api += '&type=' + type;
    }

    if (gender !== "Any" && gender!= null){
        api += '&gender=' + gender;
    }

    console.log(api)

    
    fetch(api) //Devuelve una promise
            .then(response =>  response.json())
            .then(data => {
                console.log(data.length)
                if(data.error){
                    document.querySelector('h1').innerHTML = "Not found";
                    return;
                }
                const info = data.info;

                document.querySelector('h1').innerHTML = "Results: " + info.count +", Pages: " + info.pages;

                //Miramos a ver si hay más páginas antes o después de la actual
                if (info.prev === null){
                    prevBtn.classList.add("disabled");
                }else{
                    prevBtn.classList.remove("disabled");
                }

                if (info.next === null){
                    nextBtn.classList.add("disabled");
                }else{
                    nextBtn.classList.remove("disabled");
                }



                const results = data.results;
                
                for(let i = 0;i<results.length;i++){
                    var img = document.createElement('img');
                    img.src = results[i].image;
                    //document.getElementById("data").appendChild(img);
                    

                    // Create an empty <tr> element and add it to the last position of the table:
                    var row = table.insertRow();

                    // Insert new cells (<td> elements) of the "new" <tr> element:
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    cell2.classList.add('align-middle');
                    var cell3 = row.insertCell(2);
                    cell3.classList.add('align-middle');
                    var cell4 = row.insertCell(3);
                    cell4.classList.add('align-middle');
                    var cell5 = row.insertCell(4);
                    cell5.classList.add('align-middle');
                    var cell6 = row.insertCell(5);
                    cell6.classList.add('align-middle');
                    var cell7 = row.insertCell(6);
                    cell7.classList.add('align-middle');
                    var cell8 = row.insertCell(7);
                    cell8.classList.add('align-middle');
                    //var cell2 = row.insertCell(1);

                    // Add some text to the new cells:
                    cell1.appendChild(img);
                    cell2.innerHTML = results[i].name;
                    cell3.innerHTML = results[i].status;
                    cell4.innerHTML = results[i].species;
                    cell5.innerHTML = results[i].type;
                    cell6.innerHTML = results[i].gender;
                    cell7.innerHTML = results[i].origin.name;
                    cell8.innerHTML = results[i].location.name;

                }

        })
    setTimeout(function(){
        table.style.visibility = "visible";
        document.getElementById('pagination').style.visibility = "visible";
        loading.classList.add("visually-hidden");
     }, 500)
    
}

document.addEventListener('DOMContentLoaded',function(){
    buscar();

    document.querySelector('form').onsubmit = () =>{
        pagina = 1;
        //Recogemos los valores introducidos por el usuario
        nombre = document.querySelector('#Name').value;
        estado = document.querySelector('#Status').value;
        species = document.querySelector('#Species').value;
        type = document.querySelector('#Type').value;
        gender = document.querySelector('#Gender').value;

        //Limpiamos los campos
        document.querySelector('#Name').value = '';
        document.querySelector('#Status').value = "Any";
        document.querySelector('#Species').value = '';
        document.querySelector('#Type').value = '';
        document.querySelector('#Gender').value = 'Any';

        buscar();
        //Stop form from submitting
        return false;
    }
});

nextButton.addEventListener("submit", function(){
    pagina ++;
    buscar();
});

prevButton.addEventListener("submit", function(){
    pagina --;
    buscar();
});

function limpiarTabla(){
    var rowCount = tabla.rows.length;
    for (var i = rowCount-1;i>0;i--){
        tabla.deleteRow(i);
    }
}




