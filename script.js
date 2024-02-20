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
    img.style.display = 'none';
    modal.style.display = 'block';
});
document.getElementById('button3').addEventListener('click', function() {
    p.textContent = "¿Cuál es la ventaja de hacer uso del javascript al utilizar los métodos de append, appendchild e insertbefore?";
    p2.textContent = "La ventaja es que se pueden agregar elementos al DOM de manera dinámica, es decir, sin necesidad de recargar la página.";
    img.style.display = 'none';
    modal.style.display = 'block';
});
document.getElementById('button4').addEventListener('click', function() {
    p.textContent = "Mi Pokemón favorito es:";
    img.src = 'images/sceptile.png';
    img.width = 400;
    img.height = 400;
    p2.textContent = "Sceptile, fue el primer pokemón que tuve en mi primer juego de pokemón, es muy nostalgico.";
    modal.style.display = 'block';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
let circle = document.getElementById('circle');

window.addEventListener('mousemove', function(e) {
    circle.style.left = e.pageX - 50 + 'px'; // Subtract half the width
    circle.style.top = e.pageY - 50 + 'px'; // Subtract half the height
});