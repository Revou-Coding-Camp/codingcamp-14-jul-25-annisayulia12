// Tampilkan tanggal hari ini
document.getElementById('today-date').innerText = new Date().toLocaleDateString();

// Tampilkan waktu saat ini
function updateCurrentTime() {
  const now = new Date();
  document.getElementById('currentTime').innerText = now.toLocaleString();
}
updateCurrentTime();
setInterval(updateCurrentTime, 1000);

// Tangani form
document.getElementById('messageForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const birth = document.getElementById('birth').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const message = document.getElementById('message').value;

  document.getElementById('outputName').innerText = name;
  document.getElementById('outputTTL').innerText = birth;
  document.getElementById('outputGender').innerText = gender;
  document.getElementById('outputMessage').innerText = message;

  this.reset(); // kosongkan form setelah submit
});
