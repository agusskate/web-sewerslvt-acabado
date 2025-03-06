function getCurrentDate() {
  const date = new Date();
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  
  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
}

function updateLoader() {
  $('.in2').text(`${getCurrentDate()}`);
}

$(document).ready(function() {
  updateLoader(); //inicializar
  setInterval(updateLoader, 1000); //actualiza los segundos
});


let executed = false;
  setTimeout(() => {
    if (!executed) {
      executed = true;

      $('body').addClass("fade-out");

      setTimeout(() => {
          window.location.href = "./src/html/web.html";
      }, 1000);
    }
  }, 2000);
