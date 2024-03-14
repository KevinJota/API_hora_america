function buscarHorario() {
  const cidadeInput = document.getElementById('cidade');
  const cidade = cidadeInput.value.trim(); // trim não permite espaço em branco

  // Verifica se o campo de entrada não está vazio
  if (cidade !== '') {
      // chama a url da API
      fetch(`http://worldtimeapi.org/api/timezone/America/${cidade}`)
          .then(response => response.json())
          .then(data => {
              const horario = parseInt(data.datetime.slice(11, 13)); // Extrai apenas a hora e converte para número inteiro
              const resultadoDiv = document.getElementById('resultado');
              // pega o resultado e aplica no elemento com a estilização no HTML
              resultadoDiv.innerHTML = `<h3>Horário atual da cidade de ${cidade}: ${horario}:00</h3>`;

              // Verifica se é dia ou noite e aplica a estilização correspondente
              if (horario >= 6 && horario < 18) {
                  // Dia
                  day();
              } else {
                  // Noite
                  night();
              }
          })
          .catch(error => {
              console.error(`Erro ao obter o tempo para ${cidade}`, error);
              const resultadoDiv = document.getElementById('resultado');
              resultadoDiv.innerHTML = `<p>Ocorreu um erro ao buscar o horário para ${cidade}. Por favor, verifique o nome da cidade e tente novamente.</p>`;
          });
  }
}

// Função para mudar a estilização para noite
function night() {
  var headerImg = document.getElementById('img_situacao');
  var body = document.body;

  headerImg.classList.add('fade-out');
  body.classList.add('fade-out');

  setTimeout(function () {
      headerImg.src = 'img/moon.gif';
      body.style.background = "linear-gradient(0deg, rgba(0,81,207,1) 0%, rgba(0,1,40,1) 100%)";

      headerImg.classList.remove('fade-out');
      body.classList.remove('fade-out');
  }, 800); // Tempo da transição (em milissegundos)
}

// Função para mudar a estilização para dia
function day() {
  var headerImg = document.getElementById('img_situacao');
  var body = document.body;

  headerImg.classList.add('fade-out');
  body.classList.add('fade-out');

  setTimeout(function () {
      headerImg.src = 'img/sun.gif';
      body.style.background = "linear-gradient(rgb(91, 206, 255), rgb(69, 69, 244))";

      headerImg.classList.remove('fade-out');
      body.classList.remove('fade-out');
  }, 800); // Tempo da transição (em milissegundos)
}



