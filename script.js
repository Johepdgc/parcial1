// Create modal
let modal = document.createElement("div");
modal.id = "myModal";
modal.className = "modal";

// Create modal content
let content = document.createElement("div");
content.className = "modal-content";

// Create paragraph
let p = document.createElement("p");
let p2 = document.createElement("p");
p2.className = "respuesta";
// Append everything
content.appendChild(p);
content.appendChild(p2);
modal.appendChild(content);
document.body.appendChild(modal);

// Event listeners
document.getElementById('button1').addEventListener('click', function() {
    p.textContent = "¿Utilizaron estilos de boostrap o personalizados? ¿Porqué decidieron hacerlo de esta forma?";
    p2.textContent = "R"; 
    modal.style.display = 'block';
});
document.getElementById('button2').addEventListener('click', function() {
    p.textContent = "¿Qué tipo de elementos insertaron por medio de js?";
    p2.textContent = "R";
    modal.style.display = 'block';
});
document.getElementById('button3').addEventListener('click', function() {
    p.textContent = "¿Cuál es la ventaja de hacer uso del javascript al utilizar los métodos de append, appendchild e insertbefore?";
    modal.style.display = 'block';
});
document.getElementById('button4').addEventListener('click', function() {
    p.textContent = "This is a paragraph for button 4.";
    modal.style.display = 'block';
});

window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.getElementById('sharkImg').addEventListener('click', function() {
    document.getElementById('sharkText').style.display = 'block';
});