const draggable1 = document.getElementById('draggable1');
const draggable2 = document.getElementById('draggable2');
const dropzone1 = document.getElementById('dropzone1');
const dropzone2 = document.getElementById('dropzone2');

// Eventos de inicio de arrastre para cada imagen
draggable1.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);  // Almacena el ID de la imagen que se está arrastrando
});
draggable2.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);  // Almacena el ID de la imagen que se está arrastrando
});

// Permitir arrastre en ambas áreas de destino (dropzone1 y dropzone2)
dropzone1.addEventListener('dragover', (e) => {
    e.preventDefault();  // Evita el comportamiento predeterminado para permitir el "drop"
});
dropzone2.addEventListener('dragover', (e) => {
    e.preventDefault();  // Evita el comportamiento predeterminado para permitir el "drop"
});

// Evento de soltado en dropzone1
dropzone1.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');  // Obtiene el ID de la imagen arrastrada
    const draggableElement = document.getElementById(id);  // Selecciona la imagen por su ID
    draggableElement.classList.add('dropped-image');  // Mantiene el tamaño de la imagen
    dropzone1.appendChild(draggableElement);  // Coloca la imagen dentro de dropzone1
    e.dataTransfer.clearData();  // Limpia los datos de arrastre
    checkDropzones();  // Llama a la función para verificar las zonas de soltado
});

// Evento de soltado en dropzone2
dropzone2.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text');  // Obtiene el ID de la imagen arrastrada
    const draggableElement = document.getElementById(id);  // Selecciona la imagen por su ID
    draggableElement.classList.add('dropped-image');  // Mantiene el tamaño de la imagen
    dropzone2.appendChild(draggableElement);  // Coloca la imagen dentro de dropzone2
    e.dataTransfer.clearData();  // Limpia los datos de arrastre
    checkDropzones();  // Llama a la función para verificar las zonas de soltado
});

// Función para verificar si hay una imagen en cada zona de soltado
function checkDropzones() {
    const imagensi = false;
    const imagensi2 = false;
    const hasImageInDropzone1 = dropzone1.querySelector('img') !== null;
    const hasImageInDropzone2 = dropzone2.querySelector('img') !== null;

    console.log("Dropzone 1 tiene imagen:", hasImageInDropzone1);
    console.log("Dropzone 2 tiene imagen:", hasImageInDropzone2);

    // Puedes realizar alguna acción adicional si una imagen está presente
    if (hasImageInDropzone1) {
        console.log("Imagen detectada en Dropzone 1");
        imagensi = true;
    }
    if (hasImageInDropzone2) {
        console.log("Imagen detectada en Dropzone 2");
        imagensi2 = true;
    }
}