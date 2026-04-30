document.getElementById("formContato").addEventListener("submit", function(event) {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;
  let mensagem = document.getElementById("mensagem").value;

  if (nome === "" || email === "" || mensagem === "") {
    alert("Preencha todos os campos!");
  } else {
    alert("Formulário enviado com sucesso!");
  }
});


document.getElementById("modo").addEventListener("click", function() {
  document.body.classList.toggle("dark");
});


document.querySelectorAll('a[href^="#"]').forEach(function(link) {
  link.addEventListener("click", function(e) {
    e.preventDefault();

    const destino = document.querySelector(this.getAttribute("href"));

    if (destino) {
      destino.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
