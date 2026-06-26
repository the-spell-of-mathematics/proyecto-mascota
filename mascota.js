// ==========================================
// ETAPAS 1 AL 6: EL OBJETO MASCOTA
// ==========================================

const mascota = {
    nombre: "Teddy",
    tipo: "oso",
    hambre: 50,      // 0 = lleno, 100 = muerto de hambre
    felicidad: 50,   // 0 = triste, 100 = feliz
    energia: 50,     // 0 = agotado, 100 = lleno de energía

    // Etapa 2: Método describir y this
    describir() {
        return `${this.nombre} es un ${this.tipo}.`;
    },

    // Etapa 3: Método alimentar (baja el hambre)
    alimentar() {
        this.hambre = Math.max(0, this.hambre - 20);
        console.log(`${this.nombre} comió 🧁 - Hambre: ${this.hambre}`);
    },

    // Etapa 4: Métodos jugar y dormir
    jugar() {
        this.felicidad = Math.min(100, this.felicidad + 20);
        this.energia = Math.max(0, this.energia - 15);
        console.log(`${this.nombre} jugó 🎈 - Felicidad: ${this.felicidad}, Energía: ${this.energia}`);
    },

    dormir() {
        this.energia = Math.min(100, this.energia + 30);
        console.log(`${this.nombre} durmió 💤 - Energía: ${this.energia}`);
    },

    // Etapa 5: Ver todos los stats numéricos
    verEstado() {
        Object.entries(this)
            .filter(([clave, valor]) => typeof valor === "number")
            .forEach(([clave, valor]) => console.log(`${clave}: ${valor}`));
    }
};

// --- Impresiones en consola pedidas en las misiones ---

// Misión Etapa 1
console.log(`Nombre: ${mascota.nombre}`);
console.log(`Tipo: ${mascota["tipo"]}`);

// Misión Etapa 2
console.log(mascota.describir());

// Misión Etapa 6: Clon VIP y destructuring
const mascotaVIP = { ...mascota, accesorio: "corona 👑", felicidad: 100 };
console.log(`VIP felicidad: ${mascotaVIP.felicidad} | accesorio: ${mascotaVIP.accesorio}`);
console.log(`Original felicidad: ${mascota.felicidad}`);

const { nombre, tipo } = mascota;
console.log(`Mi mascota: ${nombre} (${tipo})`);


// ==========================================
// CONEXIÓN CON EL HTML Y LOS GIFS
// ==========================================

const elHambre = document.getElementById('hambre');
const elFelicidad = document.getElementById('felicidad');
const elEnergia = document.getElementById('energia');
const imagenMascota = document.getElementById('pet-image');

let animacionEnCurso = false;

function actualizarEstadoHTML() {
    elHambre.innerText = mascota.hambre;
    elFelicidad.innerText = mascota.felicidad;
    elEnergia.innerText = mascota.energia;
}

function cambiarGifTemporal(nuevoGif, tiempo) {
    if (animacionEnCurso) return; 
    
    animacionEnCurso = true;
    imagenMascota.src = nuevoGif;
    
    setTimeout(() => {
        imagenMascota.src = "oso_normal.gif"; 
        animacionEnCurso = false;
    }, tiempo);
}

// Funciones que llaman a los métodos del objeto al hacer clic en los botones
function alimentar() {
    if (mascota.hambre > 0) {
        mascota.alimentar(); // Llama a la Etapa 3
        cambiarGifTemporal("oso_comiendo.gif", 2500); 
        actualizarEstadoHTML();
    }
}

function jugar() {
    if (mascota.energia >= 15) {
        mascota.jugar(); // Llama a la Etapa 4
        cambiarGifTemporal("oso_jugando.gif", 2500);
        actualizarEstadoHTML();
    } else {
        alert("¡Tu osito está muy cansado para jugar! Necesita dormir.");
    }
}

function dormir() {
    mascota.dormir(); // Llama a la Etapa 4
    cambiarGifTemporal("oso_durmiendo.gif", 4000);
    actualizarEstadoHTML();
}

// Inicializar los textos en pantalla al abrir la página
actualizarEstadoHTML();