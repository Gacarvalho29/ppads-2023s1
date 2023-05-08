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

![image](https://user-images.githubusercontent.com/85353380/236956287-a305d6ff-1e0b-4723-b44c-60fb510c7107.png)
  
<!-- https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#R3VjbcpswEP0aPzYDFjj2o29NO5POeOrONM2bArJRKlhGiBjy9V0ZmYtxnGSSFFo%2FYO1hhaRzVruIAZmH2ZWkcfANfCYGQ8vPBmQxGA5ty7XwTyN5gbhjuwC2kvvGqQLW%2FJEdeho05T5LGo4KQCgeN0EPooh5qoFRKWHXdNuAaI4a0y1rAWuPijb6k%2FsqKNDx8LLCvzC%2BDQ4j26NJcSekB2ezkiSgPuxqEFkOyFwCqKIVZnMmNHkHXop%2Bn5%2B4W05Mski9pMPvr74dLzLlZ7f33tpa%2F3j0Z5%2FMMh6oSM2CzWRVfmBgF3DF1jH1tL1DlQdkFqhQoGVjkyZxwfuGZwyHmpknMqlY9uRU7ZIAjBwGIVMyRxfTYXiIGhM0jjF3lQKuZbCgxn4JUqP6tnx0RQw2DDev4Mm%2BbPHCfAwUY4JUAWwhomJZoTMJaeRrThYWWpXPNUBs2LtnSuUm6mmqoMkty7i6qbV%2F6UddkKOfubnIzEB7I68ZKyY50sCkwYql6Pmf1weXC6n02DlezJakcsvUOT%2FrtOCSCar4Q3Mi76%2FeuEv1rAu3oZ%2F7TwjmdirYpC%2FbzX61WCiJzG%2FqRk12bVaP2lt5hyKP3ijyvutUSprXHGLgkUpqT15poJbdSTO72%2BOjwvWM%2F7Dpj41iBlW4lUt5QwS2CuNKwoYlCchWaGJlj3UzDcXUU%2BhAZrr8cXyLuKZ3TKwg4YpDhC53oBSENYep4Ft9Q8FRXYVUCR6xefleU8XIm2qr7RyxP2wXV3Kito4%2BrLSSvuz1fpVW54WbeNJponb6It7rE3UHWo27yLfEcptv0%2Fb5fNvyPz5YHPmXb92n%2FT8mPzut%2FDz1Qx7xREk8Zkl94gS8rBFgIf2%2FUjZxO07Z4xb5VwwX43GqiU%2BowBFRAKbHTkWbfRwCz%2B86FTxzuHwH8pwj8pwTh8myBtbZG38Ue5Oz7PFoAxIjdk4G00t9nblszyboK%2FaJIOkVoYR0TejhW1GN0e%2BMCv64J9QLaEj9fgXhqHPK3FNBuOdrX4xAcugVY%2FaJnPeXKRu1KFtGD8WmjUDxDdaGatdOSb%2F4O%2FUN7b34Q7P6jFkU%2BOpjMFn%2BAQ%3D%3D -->

# Descrição dos casos de uso
  
**1. Realizar Chamada:**
O professor acessa o sistema para registrar a presença dos alunos na sala de aula.
O sistema apresenta a lista de alunos matriculados na turma.
O professor marca a presença dos alunos ausentes ou tardios.
O sistema registra a presença dos alunos e atualiza a lista de presença.


**2. Gerar Relatório Diário:**  
O professor acessa o sistema para gerar um relatório diário sobre a presença dos alunos na 
turma.
O sistema apresenta as opções de escolha das turmas (sala de aula).
O professor seleciona a turma para a qual deseja gerar o relatório.
O sistema apresenta o relatório com as informações sobre a presença dos alunos na turma.

**Fluxo Alternativo:**
2.1 Caso o professor queira gerar o relatório para uma disciplina específica, o sistema apresenta as opções de escolha das disciplinas para aquela turma selecionada.
2.2 O professor seleciona a disciplina para a qual deseja gerar o relatório.
2.3 O sistema apresenta o relatório com as informações sobre a presença dos alunos naquela disciplina na turma selecionada.
2.4 Caso o professor queira gerar o relatório para um aluno específico, o sistema apresenta as opções de escolha dos alunos na turma e na disciplina selecionadas.
2.5 O professor seleciona o aluno para o qual deseja gerar o relatório.
2.6 O sistema apresenta o relatório com as informações sobre a presença daquele aluno na turma e na disciplina selecionadas.

**3. Gerenciar Salas de Aula:**
O professor acessa o sistema para gerenciar as informações sobre as salas de aula.
O sistema apresenta as opções de gerenciamento (adicionar, editar ou excluir informações 
sobre as salas de aula).
O professor seleciona a opção desejada e realiza as alterações necessárias.
O sistema atualiza as informações sobre as salas de aula.


**4. Gerenciar Informações dos Alunos:**
O professor acessa o sistema para gerenciar as informações sobre os alunos matriculados na 
turma.
O sistema apresenta as opções de gerenciamento (adicionar, editar ou excluir informações 
sobre os alunos).
O professor seleciona a opção desejada e realiza as alterações necessárias.


**5. Enviar Notificação aos Responsáveis:**
O sistema verifica a presença dos alunos na turma.
Se um aluno tiver faltado em mais de 20% das aulas (80% ou menos de presença), o sistema 
envia uma notificação por e-mail aos responsáveis do aluno.
O e-mail contém as informações sobre as faltas do aluno e um aviso sobre a importância da 
frequência escolar.

# Protótipos de tela

![image](https://user-images.githubusercontent.com/85083155/221700466-77229d5c-cb25-4566-adc4-db558216d510.png)

![image](https://user-images.githubusercontent.com/85083155/221700407-98cb166a-b97a-49da-ae24-02ae3ef7bc5b.png)

![image](https://user-images.githubusercontent.com/85083155/221700608-b7438945-b76e-4699-89e2-e475028d2d40.png)

![image](https://user-images.githubusercontent.com/85083155/221700652-79f2986f-50e7-4911-93ce-04b81099fb8d.png)

![image](https://user-images.githubusercontent.com/85083155/221700693-b154a7c1-c5fc-4c56-8a6b-279a381a7106.png)


# Modelo de domínio

![image](https://user-images.githubusercontent.com/85083155/223229559-1b47ea57-d12d-4514-9d42-978872c97f5f.png)

# Decisões de arquitetura

Vamos utilizar para fazer o front-end as linguagens HTML, CSS e JavaScript junto com o framework do AngularJS e para o backend iremos usar NestJs.
Para o banco de dados será usado o ElephantSQL.

# Referências

*&lt;Lista de referências&gt;*
