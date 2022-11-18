let seccion_actual;

    function ocultar()
    {
      let secciones = document.getElementsByClassName("seccion");
      for(var i=0;i<secciones.length;i++){
        secciones[i].classList.add("ocultar");
      }

    }

    function cambiarSeccion(id)
    {
      let seccion = document.getElementById("seccion_"+id);
      ocultar();
      seccion.classList.remove("ocultar");
    }

    function store(){
      var name = document.getElementById('nombre');
      var pw = document.getElementById('clave2');
      var pw2 = document.getElementById('clave1');
      
      if(name.value.length == 0){
        alert('El campo nombre de usuario es requerido');
      }
      else if(pw.value.length == 0){
        alert('El campo contraseña es requerido');
      }
        else if(name.value.length == 0 && pw.value.length == 0){
          alert('Please fill in email and password');
        }
        else if(pw.value.length > 8){
          alert('La contraseña debe ser de maximo 8 caracteres');
        }
        else if (pw.value !== pw2.value)
        {
          alert('Las contraseñas no coinciden');
        }
        else{
          localStorage.setItem('name', name.value);
          localStorage.setItem('pw', pw.value);
          alert('Tu cuenta ha sido creada');
          cambiarSeccion(2);
        }
    }

    function store2(){
      var name = document.getElementById('nombre');
      var raza = document.getElementById('raza');
      var alimentacion = document.getElementById('alimentacion');
      var cuidados = document.getElementById('cuidados');
      localStorage.setItem('name', name.value);
      localStorage.setItem('raza', raza.value);
      localStorage.setItem('alimentacion', alimentacion.value);
      localStorage.setItem('cuidados', cuidados.value);
      alert('Tu mascota ha sido agregada');
      cambiarSeccion(6);
    }

    function check(){
      var storedName = localStorage.getItem('name');
      var storedPw = localStorage.getItem('pw');

      var userName = document.getElementById('nombreUsuario');
      var userPw = document.getElementById('claveUsuario');

      if(userName.value == storedName && userPw.value == storedPw){
        alert('Inicio de sesión realizado correctamente');
        cambiarSeccion(4);
      }else{
        alert('Error en login');
      }
}