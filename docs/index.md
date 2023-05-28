<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>


<font size="+12"><center>
Escola Octogono
</center></font>

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
- [Protótipos de tela](#protótipos-de-tela)
- [Modelo de domínio](#modelo-de-domínio)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)
- [Referências](#referências)


# Autores

*Arthur Hardt - 32159341 <br>
Gabriel Carvalho - 32142293 <br>
Gustavo Carmassi - 32046693 <br>
Gustavo Direnzi - 31948421 <br>*


# Descrição do projeto

Este projeto visa resolver o problema da organização do processo de chamada na escola Octógono. Com o objetivo de facilitar o trabalho dos professores e aumentar a eficiência da chamada, o sistema de chamada foi desenvolvido para ser utilizado pelos docentes da escola. Destina-se ao público interno da escola, ou seja, professores e alunos, com a finalidade de tornar a rotina escolar mais dinâmica e produtiva. Com este sistema, a Octógono espera melhorar a experiência dos professores e alunos no ambiente escolar.<br>
<a href="https://ppads-site-presenca-2023.s3.sa-east-1.amazonaws.com/turma">Site-Presença

# Diagrama de casos de uso

![image](https://github.com/Carmassi/ppads-2023s1/assets/85353380/8c2f015e-1c4c-420e-8594-61096634ec2c)
  
<!-- 
 
https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R7Zldb5swFIZ%2FTS5bAYaEXOZr3bROipZJ23ozuXAa3BqMjEmgv34mmO%2BEpmqzRNt6U%2FvlxMBzjl87zgDN%2FOSG49D7wlygA0NzkwGaDwxDN5Ep%2F2VKmiujoRLWnLgqqBJW5BmUqCk1Ji5EjUDBGBUkbIoOCwJwREPDnLNtM%2ByB0eZdQ7yGjrByMO2q34krvFy1jVGlfwSy9oo768NxfsXHRbB6k8jDLtvWJLQYoBlnTOQtP5kBzeAVXPLPfThwtXwwDoE45gNPn1w9nCfCTe4enZW2%2BvbsTq%2FUa2wwjdULq4cVaUFg6xEBqxA7WX8rszxAU0%2F4VPZ02cRRmHN%2FIAnIW027z6UedQNcQFKT1HPeAPNB8FSGqKuGpZipojFVd1tlYIiU5tXolyJWWV%2BXQ1dgZEOxeQUnfdThAq4sFNVlXHhszQJMF5U65SwO3IzJXJO9KuaWsVDRewQhUlX1OBasyRYSIn7U2j%2Bzoa5R609dnCfqRrtOWussgROJAbjSDmYoYjF3oA%2BDmoGYr0H0xak8ZIx6E86BYkE2zcn2%2Ftmzz5k97dpq5M%2B6xIRZl5Wwji0tOXuAKGK8k0npq2HWjH06cYQMQNPMaYj08Ft8D3TJIiIIC2TIPROC%2BbWACSXr7IJgLVdjsaAkgFm5qvSm4Xhn082ms%2BlG19r2OtvJjA39NzaJwTxynowva5qY%2F6qvHZsv%2B73ztfvohHOc1gJCRgIR1UZeZkJt1o%2Basx7Zra3aS%2FHj%2FnikWW%2BKN9tbx1a8pWl98bKRE6kquUR7VHGHP5zF3VNya042i0X0eTY1Rr%2BKNeBctT1qFrf%2B6uKWNc3TbKwr7VrT7ELJhxvapVCNuOul9d7%2BCdOq5tPOoHxn8Accbm8RXMzq9Ib8a83UWy8k%2FrQ53kvZOIcplvucwlT0fhNqx1v2%2B5pQH8HaRnTGGHchkN%2Fl%2F7KtKLLOvBW1O6xvQL6fQzDPDpBI5JBQksBR1xMoJWGUzf0XDiveAZvZwmbuOZwod%2FV1bvapuI17uYXFFyeIsmMy7OJIcFm9l0URoXNTLI4sahi%2FAqbkeUfR8bAv0V0Us%2BHZkVkdZBOXONLgdsykGlxYmel7PO5kzA4vtQcnq4i5%2F3Z%2F6%2FDZQ%2FEwsmFrmT2hv8ludf6dL9nVrwho8Rs%3D

-->

# Descrição dos casos de uso
  
**1. Realizar Chamada:**
O professor acessa o sistema para registrar a presença dos alunos na sala de aula.
O sistema apresenta a lista de alunos matriculados na turma.
O professor marca a presença dos alunos ausentes ou tardios.
O sistema registra a presença dos alunos e atualiza a lista de presença.
  
**Fluxo Alternativo:**
  
 1.1. O professor acessa o sistema fora do horãrio da aula
  
 1.2. Insere a data e horário da aula
  
 1.3. O sistema apresenta a lista de alunos matriculados na turma.
  
 1.4. O professor marca a presença dos alunos ausentes ou tardios.
  
 1.5. O sistema registra a presença dos alunos e atualiza a lista de presença.

  
**2. Gerenciar Alunos:**
O professor/coordenador acessa o sistema para gerenciar as informações sobre os alunos matriculados na 
turma.
O sistema apresenta as opções de gerenciamento (adicionar, editar ou excluir informações 
sobre os alunos).
O professor/coordenador seleciona a opção desejada e realiza as alterações necessárias.
  
**3. Gerenciar professores cadastrados:**
O coordenador acessa o sistema para gerenciar as informações sobre os professores cadastrados.
O sistema apresenta as opções de gerenciamento (adicionar, editar ou excluir informações 
sobre as salas de aula).
O coordenador seleciona a opção desejada e realiza as alterações necessárias.
O sistema atualiza as informações sobre os professores cadastrados.
  
**4. Gerenciar disciplinas:**
O coordenador acessa o sistema para gerenciar as disciplinas.
O sistema apresenta as opções de gerenciamento (adicionar, editar ou excluir informações 
sobre as salas de aula).
O coordenador seleciona a opção desejada e realiza as alterações necessárias.
O sistema atualiza as informações sobre as disciplinas.
  
**5. Gerenciar turmas:**
O coordenador acessa o sistema para gerenciar as turmas.
O sistema apresenta as opções de gerenciamento (adicionar, editar ou excluir informações 
sobre as salas de aula).
O coordenador seleciona a opção desejada e realiza as alterações necessárias.
O sistema atualiza as informações sobre as turmas.

# Protótipos de tela

![image](https://user-images.githubusercontent.com/85083155/221700466-77229d5c-cb25-4566-adc4-db558216d510.png)

![image](https://user-images.githubusercontent.com/85083155/221700407-98cb166a-b97a-49da-ae24-02ae3ef7bc5b.png)

![image](https://user-images.githubusercontent.com/85083155/221700608-b7438945-b76e-4699-89e2-e475028d2d40.png)

![image](https://user-images.githubusercontent.com/85083155/221700652-79f2986f-50e7-4911-93ce-04b81099fb8d.png)

![image](https://user-images.githubusercontent.com/85083155/221700693-b154a7c1-c5fc-4c56-8a6b-279a381a7106.png)


# Modelo de domínio

![image](https://github.com/Carmassi/ppads-2023s1/assets/85353380/7aa7f9ad-f4c4-4b8e-bacf-b540fc960e49)

# Decisões de arquitetura

Vamos utilizar para fazer o front-end as linguagens HTML, CSS e JavaScript junto com o framework do AngularJS e para o backend iremos usar NestJs.
Para o banco de dados será usado o ElephantSQL.
  
![image](https://github.com/Carmassi/ppads-2023s1/assets/85353380/1159a8bb-b1b7-4591-9025-84dc9c11a25e)


# Referências

Foram utilizada como referência os links abaixo:

* https://www.youtube.com/watch?v=Osc6rFCtl4A&pp=ygUSQW5ndWxhckpTIGUgTmVzdEpT&ab_channel=F%C3%A1bricadeC%C3%B3digo
* https://www.youtube.com/watch?v=LFlNU30u7d8&pp=ygUSQW5ndWxhckpTIGUgTmVzdEpT&ab_channel=Alura
* https://www.youtube.com/watch?v=_ZsECW9rkJI&ab_channel=nivek
* https://www.youtube.com/watch?v=y24fC9Pqr8I&ab_channel=DigitalFluency
* https://www.youtube.com/watch?v=5pFKw5iLL4s&list=PLVfq1luIZbSmJIuw_EZVP9mFiMED5fGIn&ab_channel=ThomasOliver
