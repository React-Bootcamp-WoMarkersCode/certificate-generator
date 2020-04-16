<p align="center">
  <img src="https://user-images.githubusercontent.com/46378210/79054531-f2f00980-7c1b-11ea-81ca-fa7ef7196566.png">
</p>

## Desenvolvedoras :octocat:

[<img src="https://avatars2.githubusercontent.com/u/40778029?s=400&u=0ff80f01d3cb66b2af110aea5d30701d8ac6b6ec&v=4" width=115><br><sub>Bee Bones</sub>](https://github.com/beebones) |[<img src="https://media-exp1.licdn.com/dms/image/C4E03AQGE1Yb8mAu4_A/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=-ANjM-l29GR6AVf_OxXkfk7NH424lVgJmjQIgIos2Ck" width=115><br><sub>Chaiana Hermes</sub>](https://github.com/chaihermes) | 
| :---: | :---:

| [<img src="https://avatars2.githubusercontent.com/u/46378210?s=400&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Diana Regina</sub>](https://github.com/Diana-ops) | [<img src="https://avatars0.githubusercontent.com/u/56303576?s=400&u=b3afc995a8a4a0a5b0af9ff64e4953c907927f23&v=4" width=115><br><sub>Rose Ahakawa</sub>](https://github.com/ahakawa) |
| :---: | :---:

## Descrição do projeto

Desenvolver uma plataforma capaz de gerar certificados em PDFe  realizar dowload para participantes de eventos/metups/bootcamps e cursos.

## O que a plataforma é capaz de fazer

- Cadastrar organizadores 
- Cadastrar eventos 
- Cadastrar participantes para cada evento
- Gerar PDF com as informações preenchidas no formulário para cada participantes via dowload e/ou envio de e-mail 
- Check-list de participantes, permitindo selecionar quem irá receber os certificados 
- Permite que o organizador do evento escreva sua assinatura digital dentro da plataforma
- Oferece layout responsivo 

## Como rodar a aplicação

No terminal, clone o projeto: 

```
git clone https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator
```

Entre na pasta do projeto:  

```
cd certificate-generator
```

Instale as dependecias:

```
yarn install
```

Execute a aplicação:

```
yarn start
```

Pronto, agora é possível acessar a aplicação a partir da rota http://localhost:3000/ 

## JSON

A nossa simulação de banco de dados foi feita com JSON. Foram separados um para [usuarios](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/certificate/src/services/users.json), [participantes](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/certificate/src/services/participantes.json) e [eventos](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/certificate/src/services/events.json):

### Usuario: 

```
	{
		"name": "Lais Lima",
		"email": "laislima98@hotmail.com",
		"password": "lais123",
		"token": true,
		"avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9-U_HbQAipum9lWln3APcBIwng7T46hdBA42EJv8Hf6Z4fDT3&usqp=CAU"
	},

```

### Evento: 

```
	{	
		"user": "Lais Lima",
		"company": "WomakersCode", 
		"course": "Bootcamp React",
		"startDate": "01/02/2020", 
		"finishDate": "28/03/2020",
		"workload": "56", 
		"logo": "https://miro.medium.com/max/478/1*jriufqYKgJTW4DKrBizU5w.png", 
		"digitalSignature": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Assinatura_Jos%C3%A9_Saramago.png", 
		"token": false
	},
```

### Participante: 

```
	{
		"name": "Chaiana Hermes",
		"email": "chaiana_hermes@yahoo.com.br",
		"present": true,
		"receiveCertificate": false,
		"course": "Bootcamp React"
	}
```

## Paginas: 

[Aqui](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/README_PAGES.md) é possível visualizar a proposta de layout do projeto.  

## CRUD: 

### Usuários

- [X] O usuário pode ser **criado** na pagina de Sign-up a partir de um formulário ou com uma conta existente no Google
- [X] Os dados do usuário podem ser **acessados** na pagina de Sign-in e Profile
- [X] Os dados do usuário podem ser **atualizados** na pagina de Profile a partir de um formulário
- [X] A conta do usuário pode ser **deletada** na pagina de Profile

### Eventos

- [X] Podem ser **criados** a partir de um formulário na pagina List Of Events 
- [X] Podem ser **acessados** na pagina List Of Events 
- [X] Podem ser **atualizados** na pagina List of Events a partir de um formulário
- [X] Podem ser **deletados** na pagina List of Events

### Participantes

- [X] Podem ser **criados** a partir de um formulário na pagina List Presents 
- [X] Podem ser **acessados** em uma lista na pagina List Presents
- [X] Podem ser **atualizados**, indicando se aquele participante poderá ou não receber um certificado na pagina List Presents
- [ ] Nenhuma ação foi feita para exlcuir os participantes

## Linguagens e libs utilizadas 

- React
- React PDF
- React Router
- AntDesign 
- Login com Google
- jspdf e html2canvas
- Reactjs-Popup
- react-signature-canvas

## Dependencias instaladas no projeto

Criação da base do projeto

```
$ yarn create react-app certificate
```

React Router

```
$ npm install react-router-dom
```
AntDesgin 

```
$ yarn add antd
```

React PDF
```
$ yarn add @react-pdf/renderer
```
Autenticação com Google
```
$ npm install react-google-login
```

Para mandar PDF por email
```
$ yarn add jspdf
```
Para inserir HTML no corpo do email

```
$ yarn add html2canvas
```

Para desenvolver a assinatura digital

```
$ yarn add reactjs-popup
$ yarn add react-signature-canvas
```
<hr/>

## Licença

The MIT License (MIT)

Copyright (c) 2020 Certificate Generator
