const cargar = document.getElementById("btnGet");


function getInfo(e) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/users", true);
    xhr.onload = function () {
      const post = JSON.parse(this.responseText);
      const listado = document.getElementById("listado");
      let usuarios = "";
      post.forEach((post) => {
        usuarios += `   
        <tr>
        <th scope="row">${post.id}</th>
        <td>${post.name}</td>
        <td>${post.username}</td>
        <td>${post.phone}</td>
        <td>${post.website}</td>
        <td><button type="button" class="btn btn-danger" onclick="eliminar(${post.id})">Eliminar</button></td>
        <td><button type="button" class="btn btn-primary" >Editar</button></td>
      </tr> `;
      });
      listado.innerHTML = usuarios;
    };
    xhr.send();
}
getInfo();

/*cargar.addEventListener("click", getInfo);
function getInfo(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/users", true);
    xhr.onload = function () {
      const post = JSON.parse(this.responseText);
      const listado = document.getElementById("listado");
      let usuarios = "";
      post.forEach((post) => {
        usuarios += `   
        <tr>
        <th scope="row">${post.id}</th>
        <td>${post.name}</td>
        <td>${post.username}</td>
        <td>${post.phone}</td>
        <td>${post.website}</td>
        <td><button type="button" class="btn btn-danger" onclick="eliminar(${post.id})">Eliminar</button></td>
        <td><button type="button" class="btn btn-primary" >Editar</button></td>
      </tr> `;
      });
      listado.innerHTML = usuarios;
    };
    xhr.send();
  }*/
  var nuevasad = document.getElementById("hola");

  var form = document.getElementById("form");


  form.addEventListener("submit", agregarDatos);
  function agregarDatos(e){

    var maximo = 500;
    var minimo = 0;
    var idNuevo = Math.floor(Math.random()*((maximo+1)-minimo)+minimo);
    console.log(idNuevo);
    let nombreNuevo = document.getElementById("nombreNuevo").value;
    let usernameNuevo = document.getElementById("usernameNuevo").value;
    let celularNuevo = document.getElementById("celularNuevo").value;
    let sitioNuevo = document.getElementById("sitioNuevo").value;
    
    var data = {};
    data.id = idNuevo;
    data.name = nombreNuevo;
    data.username = usernameNuevo,
    data.phone = celularNuevo,
    data.website = sitioNuevo
    var json = JSON.stringify(data);
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/users", true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');

    xhr.send(json);
    e.preventDefault();

  }  



 

function eliminar(id){
var xhr = new XMLHttpRequest();
xhr.open("DELETE", "http://localhost:3000/users/"+id, true);
xhr.send(null);
window.event.preventDefault();
 }