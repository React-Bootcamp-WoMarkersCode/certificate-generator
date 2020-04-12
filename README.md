<p align="center">
  <img src="https://user-images.githubusercontent.com/46378210/79054531-f2f00980-7c1b-11ea-81ca-fa7ef7196566.png">
</p>

## Desenvolvedoras :octocat:

| [Chaiana Hermes](https://github.com/chaihermes) |
[Bee Bones](https://github.com/beebones) |
[Rose Ahakawa](https://github.com/ahakawa) |
[Diana Regina](https://github.com/Diana-ops) |

## Descrição do projeto

Desenvolver uma plataforma capaz de gerar certificados em PDFe  realizar dowload para participantes de eventos/metups/bootcamps e cursos.

## O que a plataforma é capaz de fazer

- Cadastrar organizadores 
- Cadastrar eventos 
- Cadastrar participantes para cada evento
- Gerar PDF com as informações preenchidas no formulário para cada participantes 
- Check-list de participantes, permitindo selecionar quem irá receber os certificados 
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

## Pages 

[Here](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/README_PAGES.md) you can see the layout of pages and what your componets 

### List of Pages:

- Home
- SingUp
- SingIn
- Profile
- Edit profile
- List of Events
- Create event
- Edit event
- List Presents
- Confirm certificate to send
- Page of confirmation
- Page not found

## Architeture 

How we can do for organize our paths of project:

```
src/
  assets/ #Images 
  
  pages/ #Each page will can to be in other directory with index.js and style.css (example: home/index.js and home/style.css)
  
  components/ #Each component will can to be in other directory with index.js and style.css (example: menu/index.js and menu/style.css)
  
  services/ #We can put the csv file
  
  style/ #Gloabal style
  
  App.js 
  
  index.js #Start of application
  
  routes.js #Routes of our application
```

### List of models of certificate: 

- [RockectSeat](https://skylab.rocketseat.com.br/api/files/certificates/d9bb2df6-c24b-4500-b3cd-410ff05cb0dc.pdf)
- [Alura](https://cursos.alura.com.br/user/bea-ali/course/consultas-sql-server-2017/certificate)

## List of developers work in it

:octocat: [Chaiana](https://github.com/chaihermes)
:octocat: [Bee](https://github.com/beebones) 
:octocat: [Rose](https://github.com/ahakawa)
:octocat: [Sabrina](https://github.com/sabrinabuco)
:octocat: [Diana Regina](https://github.com/Diana-ops)

## Languages and resources 

- React
- React PDF
- React Router
- Redux 
- AntDesign 
- Login com Google

## How to Run Application

## What I install in this project

I create a react project

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

Authentication with Google and React 
```
$ npm install react-google-login
```
Redux 
```
$ yarn add --dev redux react-redux
```
