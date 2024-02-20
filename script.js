//Variables
let modal = document.createElement("div");
let content = document.createElement("div");
let p = document.createElement("p");
let p2 = document.createElement("p");
let img = document.createElement("img");

//Atributos
p2.className = "respuesta";
content.className = "modal-content";
modal.id = "myModal";
modal.className = "modal";

// Appends
content.appendChild(p);
content.appendChild(p2);
content.appendChild(img);
modal.appendChild(content);
document.body.appendChild(modal);

// Event listeners
document.getElementById('button1').addEventListener('click', function() {
    p.textContent = "¿Utilizaron estilos de boostrap o personalizados? ¿Porqué decidieron hacerlo de esta forma?";
    p2.textContent = "Si, utilice bootstrap para darle un estilo más agradable a la página, pero la mayoria de esilización la hice con CSS puro. La decisión de elección fue por la libertad y facilidad de comprencion de CSS"; 
    img.style.display = 'none';
    modal.style.display = 'block';
});
document.getElementById('button2').addEventListener('click', function() {
    p.textContent = "¿Qué tipo de elementos insertaron por medio de js?";
    p2.textContent = "Elementos p y div";
    img.style.display = 