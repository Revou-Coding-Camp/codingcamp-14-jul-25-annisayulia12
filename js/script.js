document.addEventListener("DOMContentLoaded", function () {
  // Auto isi nama pengguna dari prompt atau default
  const name = prompt("Siapa nama kamu?") || "Guest";
  document.getElementById("userName").textContent = name;

  // Form handler
  const form = document.getElementById("messageForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInput = document.getElementById("name").value;
    const genderInput = document.getElementById("gender").value;
    const messageInput = document.getElementById("messageText").value;
    const time = new Date().toLocaleString();

    document.getElementById("currentTime").textContent = time;
    document.getElementById("outputName").textContent = nameInput;
    document.getElementById("outputGender").textContent = genderInput;
    document.getElementById("outputMessage").textContent = messageInput;

    form.reset();
  });

});
