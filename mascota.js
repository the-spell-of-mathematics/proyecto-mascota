// Variables de estado inicial de la mascota
let hambre = 50;
let felicidad = 50;
let energia = 100;

// Conectar Javascript con el HTML
const elHambre = document.getElementById('hambre');
const elFelicidad = document.getElementById('felicidad');
const elEnergia = document.getElementById('energia');
const imagenMascota = document.getElementById('pet-image');

// Función para actualizar los textos en la pantalla
function actualizarEstado() {
    elHambre.innerText = hambre;
    elFelicidad.innerText = felicidad;
    elEnergia.innerText = energia;
}

// Función para alimentar (¡Aquí ocurre el cambio de imagen!)
function alimentar() {
    if (hambre > 0) {
        hambre -= 15;
        if (hambre < 0) hambre = 0; // El hambre no puede ser menor a 0
        
        // Cambia a la imagen de la boca abierta
        imagenMascota.src = "conejo_comiendo.jpg";
        
        // Regresa a la imagen normal después de 1 segundo (1000 milisegundos)
        setTimeout(() => {
            imagenMascota.src = "conejo_normal.jpg";
        }, 1000);
    }
    actualizarEstado();
}

// Función para jugar
function jugar() {
    if (energia >= 10) {
        felicidad += 15;
        energia -= 10;
        if (felicidad > 100) felicidad = 100;
    } else {
        alert("¡Tu conejito está muy cansado para jugar! Necesita dormir.");
    }
    actualizarEstado();
}

// Función para dormir
function dormir() {
    energia += 30;
    if (energia > 100) energia = 100;
    alert("Zzz... El conejito ha descansado.");
    actualizarEstado();
}

// El paso del tiempo: el hambre aumenta y la felicidad baja automáticamente
setInterval(() => {
    hambre += 2;
    if (hambre > 100) hambre = 100;
    
    felicidad -= 2;
    if (felicidad < 0) felicidad = 0;
    
    actualizarEstado();
}, 4000); // Esto ocurre cada 4 segundos