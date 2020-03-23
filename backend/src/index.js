const express = require('express');

const PORT = 3333;
const app = express();

app.get('/', (request, response) => {
  return response.json({
    evento: 'Semana OmniStack 11',
    aluno: 'Leonardo Leal'
  });
});

app.listen(PORT, () => console.log('Server listen on port:', PORT));
