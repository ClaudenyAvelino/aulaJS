
  function validar() {
    let email = document.getElementById("email").value;

    if (email.includes("@")) {
      document.getElementById("aviso").innerHTML = "Email válido";
    } else {
      document.getElementById("aviso").innerHTML = "Email inválido";
    }
  }

