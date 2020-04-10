# Certificate Generator

## What is goal of your project? 

The objective is to develop an application to generate certificates for all students and participants of events and courses at WoMakersCode and even other technology institutions.

Certificates will be sent by email to all confirmed participants.

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
