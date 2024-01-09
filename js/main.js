function sendMessage() {
  const name = encodeURIComponent(document.getElementById("name").value);
  const message = encodeURIComponent(document.getElementById("message").value);

  if (!name || !message) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const whatsappLink = `https://api.whatsapp.com/send?phone=+556899815872&text=Olá,%20me%20chamo%20${name}.%0A%0A${message}`;

  window.location.href = whatsappLink;
}
