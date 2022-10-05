# fullcycle
Repositorio para o curso Full Cycle Development

#### Desafio do Módulo 01 - Docker ###
- Nginx com Node.js: diretório "desafio-nginx-com-nodejs". 
    * Basta rodar o docker compose no diretório e acessar http://localhost:8080 para cadastrar as pessoas. A arquiteura contém 3 containers rodando na rede       bridge "node-network":
      - nginx: proxy reverse para a aplicação node. Executa na porta 80 mapeada para a porta 8080 do host
      - node: aplicação node js que cadastra pessoas no banco de dados "nodedb" no mysql.
      - mysql: SGDB iniciado com o banco de dados "nodedb" e com script de ciração da tabela "people".


