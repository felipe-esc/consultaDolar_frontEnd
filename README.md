# Consulta Dólar - FrontEnd

Este projeto foi desenvolvido para um processo seletivo utilizando Angular 9.

O principal objetivo do projeto é implementar um microsserviço simples de frontend que passando uma data desejada realiza uma consulta à api que criei (que consulta uma outra api do Banco Central) e retorna o resultado para ser exibido para o usuário.

### ideias para melhorias futuras e continuações:
- atualizar o angular-core
- consertar as vunerabilidades nas dependências.

### Notas:
- foi preciso fazer um work-around pra fazer o projeto buildar(desativar ivy no angular devido a problemas de imports do core), idealmente isso nao seria o melhor a ser feito. Poderia ter atualizado o projeto e sumido com isso mais facilmente, mas me mantive na versão 9 pois era requisito do processo seletivo. Pode ser também algum problema na instalação local do node/npm/angular cli, mas não consegui ver.