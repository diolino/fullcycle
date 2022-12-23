# fullcycle
Repositorio para o curso Full Cycle Development

#### Desafios do Módulo 07 - DDD: Modelagem Tática e Patterns ###

- # Desafio dos Repositórios
    * Código disponível no diretório "mod07-DDD-Pratica/node/". 
    * Basta entar no diretório e rodar "npm install" e em seguida "npm test npm test src/infrastructure/repository/order.repository.spec.ts" para testar os repositórios e validar o desafio. Caso deseje testar todo o projeto, basta roda "npm test"

#### Desafios do Módulo 01 - Docker ###
- # Desafio Nginx com Node.js
    * Código disponível no diretório "desafio-nginx-com-nodejs". 
    * Basta rodar o docker compose no diretório e acessar http://localhost:8080 para cadastrar as pessoas. A arquiteura contém 3 containers rodando na rede       bridge "node-network":
      - nginx: proxy reverse para a aplicação node. Executa na porta 80 mapeada para a porta 8080 do host
      - node (container app): aplicação node js que cadastra pessoas no banco de dados "nodedb" no mysql.
      - mysql (container db): SGDB iniciado com o banco de dados "nodedb" e com script de ciração da tabela "people".
      
- # Desafio Go
   * Código disponível no diretório "desafio-go"
   * Imagem no docker hub: gtdiolino2/desafiogo:latest
      - Basta executar a imagem sem "-d" para obter  a mensagem "Olá Mundo" impressa pela aplicação go.
         - docker run  gtdiolino2/desafiogo


