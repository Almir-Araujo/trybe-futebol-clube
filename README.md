Projeto com foco na utilização de Node.js, TypeScript com POO. Desenvolvimento do Backend de uma aplicação que administra resultados de partidas de futebol. A aplicação conta com endpoint para login da pessoa usuária com criptografia de senha e validação de token para ações sensíveis como cadastro e alterações das partidas e atualização dos resultados dos jogos.

O banco de dados utilizado foi do tipo relacional MySQL.

Importante destacar que os os códigos escritos por mim se encontram-se no caminho app/backend/src/. No caso do arquivo app.ts, apenas o seguinte trecho foi desenvolvido por mim:   

    this.app.use('/login', routes.login);
    this.app.use('/teams', routes.team);
    this.app.use('/matches', routes.match);
    this.app.use('/leaderboard', routes.leaderboard);
    this.app.use(errorMiddleware);
 
Todos os outros arquivos, incluindo o Frontend, foram desenvolvidas pela equipe da Trybe, pois o foco era trabalhar e desenvolver apenas o Backend para esse projeto.
