function login(usuario, password) {
    const consulta = `SELECT * FROM usuarios WHERE nombre_usuario = '${usuario}' AND contra = '${password}'`;

    const formData = new FormData();
    formData.append('consulta', consulta);

    fetch('php/consultas.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success && data.data.length > 0) {
            alert('Login exitoso');
            window.location.href = 'index.html';
        } else {
            alert('Error al iniciar sesión: Usuario o contraseña incorrectos.');
        }
    })
    .catch(error => {
        console.error('Error al hacer la solicitud:', error);
        alert('Hubo un problema con la solicitud.');
    });
}



// Verificar si existe el formulario de login antes de enganchar el evento
const formLogin = document.getElementById('login-form');
if (formLogin) {
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();

        const usuario = document.getElementById('usuario').value;
        const password = document.getElementById('password').value;

        login(usuario, password);
    });
}



//_________________________________________________________________________________________________________________//

function cargarUsuarios() {
    const consulta = 'SELECT * FROM usuarios';

    const formData = new FormData();
    formData.append('consulta', consulta);

    fetch('php/consultas.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        if (data.success) {
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = '';

            const ul = document.createElement('ul');
            data.data.forEach(usuario => {
                const li = document.createElement('li');
                li.textContent = `Usuario: ${usuario.nombre_usuario}, Email: ${usuario.email}`;
                ul.appendChild(li);
            });

            resultadoDiv.appendChild(ul);
        } else {
            alert('Error al cargar los usuarios: ' + (data.message || 'No se especificó un mensaje'));
        }
    })
    .catch(error => {
        console.error('Error al hacer la solicitud:', error);
        alert('Hubo un problema con la solicitud.');
    });
}

// Ahora sí, enganchar el botón de cargar usuarios
const botonCargar = document.getElementById('cargarUsuarios');
if (botonCargar) {
    botonCargar.addEventListener('click', cargarUsuarios);
}
