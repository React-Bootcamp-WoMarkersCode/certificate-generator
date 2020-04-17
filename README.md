<p align="center">
  <img src="https://user-images.githubusercontent.com/46378210/79054531-f2f00980-7c1b-11ea-81ca-fa7ef7196566.png">
</p>

## Desenvolvedoras :octocat:

[<img src="https://avatars2.githubusercontent.com/u/40778029?s=400&u=0ff80f01d3cb66b2af110aea5d30701d8ac6b6ec&v=4" width=115><br><sub>Bee Bones</sub>](https://github.com/beebones) |[<img src="https://media-exp1.licdn.com/dms/image/C4E03AQGE1Yb8mAu4_A/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=-ANjM-l29GR6AVf_OxXkfk7NH424lVgJmjQIgIos2Ck" width=115><br><sub>Chaiana Hermes</sub>](https://github.com/chaihermes) | 
| :---: | :---:

| [<img src="https://avatars2.githubusercontent.com/u/46378210?s=400&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Diana Regina</sub>](https://github.com/Diana-ops) | [<img src="https://avatars0.githubusercontent.com/u/56303576?s=400&u=b3afc995a8a4a0a5b0af9ff64e4953c907927f23&v=4" width=115><br><sub>Rose Ahakawa</sub>](https://github.com/ahakawa) |
| :---: | :---:

## Descrição do projeto :star:

<p align="justify">
Desenvolver uma plataforma capaz de gerar certificados em PDFe  realizar dowload para participantes de eventos/metups/bootcamps e cursos.
</p>

<p align="center">
<img src="https://user-images.githubusercontent.com/46378210/79620508-7f03a480-80e6-11ea-8d38-a25f23336690.png"/>
</p>

## O que a plataforma é capaz de fazer :checkered_flag:

:trophy: Cadastrar organizadores 

:trophy: Cadastrar eventos 

:trophy: Cadastrar participantes para cada evento

:trophy: Gerar PDF do certificado com as informações preenchidas no formulário para cada participantes para envio de e-mail 

:trophy: Check-list de participantes, permitindo selecionar quem irá receber os certificados 

:trophy: Permite que o organizador do evento escreva sua assinatura digital dentro da plataforma

:trophy: Oferece layout responsivo 

## Deploy da Aplicação com Netlify: :dash:

> https://certificate-generator-womakers-code.netlify.app/

## Como rodar a aplicação :arrow_forward:

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

## JSON :floppy_disk:

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
		"digitalSignature": "https://upload.wikimedia.org/wikipedia/commons/7/7f/Assinatura_Jos%C3%A9_Saramago.png"
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

[Aqui](https://github.com/React-Bootcamp-WoMarkersCode/certificate-generator/blob/DianaRegina/README_PAGES.md) é possível visualizar a **proposta** de layout do projeto.  

## CRUD: 

### Usuários

:heavy_check_mark: O usuário pode ser **criado** na pagina Sign-up a partir de um formulário ou com uma conta existente no Google.

:heavy_check_mark: Os dados do usuário podem ser **acessados** em Login e perfil. 

:heavy_check_mark: Os dados do usuário podem ser **atualizados** em seu perfil a partir de um formulário.

:heavy_check_mark: A conta do usuário pode ser **deletada** em seu perfil.

### Eventos

:heavy_check_mark: Podem ser **criados** a partir de um formulário na lista de eventos.

:heavy_check_mark: Podem ser **acessados** na lista de eventos 

:heavy_check_mark: Podem ser **atualizados**  na lista de eventos a partir de um formulário.

:heavy_check_mark: Podem ser **deletados** na lista de eventos

### Participantes

:heavy_check_mark: Podem ser **criados** a partir de um formulário na lista de participantes.

:heavy_check_mark: Podem ser **acessados** em uma lista na lista de participantes.

:heavy_check_mark: Podem ser **atualizados**, indicando se aquele participante poderá ou não receber um certificado na lista de participantes.

:heavy_check_mark: Podem ser **deletados** na lista de participantes.

## Linguagens e libs utilizadas :books:

- React
- React PDF
- React Router
- AntDesign 
- Login com Google
- jspdf e html2canvas
- Reactjs-Popup
- react-signature-canvas
- React-Spinkit

## Dependencias instaladas no projeto :package:

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

Permite mostrar uma animação enquanto o usuário espera o e-mail ser enviado:

```
$ yarn add react-spinkit
```
<hr/>

## Licença :trident:

The MIT License (MIT)

Copyright :copyright: 2020 Certificate Generator
