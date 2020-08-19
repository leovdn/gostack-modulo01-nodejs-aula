const express = require('express');

const app = express();

app.use(express.json());

const projects = []; // deletar ao colocar em produção

app.get('/projects', (request, response) => {
  const { title, owner } = request.query;
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
  ])
})

app.post('/projects', (request, response) => {
  const { title, owner} = request.body;

  console.log(title, owner);
  return response.json([
    'Projeto 1',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
  ])
})

app.put('/projects/:id', (request, response) => {
  const { id } = request.params;
  console.log(id);
  return response.json([
    'Projeto 5',
    'Projeto 2',
    'Projeto 3',
    'Projeto 4',
  ])
})

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'Projeto 3',
    'Projeto 4',
  ])
})

app.listen(3333, () => {
  console.log('🚀 Backend Started!');
});