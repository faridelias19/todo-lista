let tareas = [
    {
        descripcion: "Estudiar JavaScript",
        completado: false
    },
    {
        descripcion: "Hacer la tarea de HTML",
        completado: true
    },
    {
        descripcion: "Practicar CSS",
        completado: false
    }
];

function mostrarTareas() {
    const lista = document.getElementById("listaTareas");

    lista.innerHTML = "";

    tareas.forEach(function (tarea, indice) {
        const elemento = document.createElement("li");

        const descripcion = document.createElement("span");
        descripcion.textContent = tarea.descripcion;
        descripcion.className = "descripcion";

        if (tarea.completado) {
            descripcion.classList.add("completada");
        }

        const botones = document.createElement("div");
        botones.className = "botones";

        const botonCambiar = document.createElement("button");
        botonCambiar.textContent = "Cambiar";
        botonCambiar.className = "cambiar";
        botonCambiar.onclick = function () {
            cambiarTarea(indice);
        };

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Borrar";
        botonEliminar.className = "eliminar";
        botonEliminar.onclick = function () {
            borrarTarea(indice);
        };

        botones.appendChild(botonCambiar);
        botones.appendChild(botonEliminar);

        elemento.appendChild(descripcion);
        elemento.appendChild(botones);

        lista.appendChild(elemento);
    });

    actualizarContadores();
}

function agregarTarea() {
    const input = document.getElementById("inputTarea");
    const descripcion = input.value.trim();

    if (descripcion === "") {
        alert("Por favor, escribe una tarea.");
        return;
    }

    tareas.push({
        descripcion: descripcion,
        completado: false
    });

    input.value = "";

    mostrarTareas();
}

function borrarTarea(indice) {
    tareas.splice(indice, 1);
    mostrarTareas();
}

function cambiarTarea(indice) {
    tareas[indice].completado = !tareas[indice].completado;
    mostrarTareas();
}

function actualizarContadores() {
    document.getElementById("totalTareas").textContent =
        tareas.length;

    const realizadas = tareas.filter(function (tarea) {
        return tarea.completado === true;
    }).length;

    document.getElementById("tareasRealizadas").textContent =
        realizadas;
}

mostrarTareas();