function sendMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;

  if (!name || !message) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  window.location = `https://wa.me/+556899815872?text=Olá,%20me%20chamo%20${name}.%0A%0A${message}`;
}
