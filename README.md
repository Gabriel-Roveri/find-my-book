# Books API

<p id="desc">API de livros </p>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
<ul>
    <li><a href="#desc">Descrição</a></li>
    <li><a href="#proj-status">Status do projeto</a></li>
    <li><a href="#pre">Pré requisitos</a></li>
    <li><a href="#mapa">Mapa do projeto</a></li>
    <li><a href="#tecnologias">Técnologias utilizadas</a></li>
</ul>

## :rocket: Status do projeto
<h4 id="proj-status" align="left">Em construção...</h4>

## Pré requisitos
<p id="pre"></p>

você precisa ter instalado:

<ul>
    <li> 
        <a href="https://nodejs.org/en/download">NodeJS (Latest version)</a>
    </li>
    <li> 
        <a href="https://expressjs.com/pt-br/starter/installing.html">ExpressJS (Version 4.18.1)</a>
    </li>
    <li> 
        <a href="https://expressjs.com/pt-br/starter/installing.html">Nodemon (Version 3.0.1)</a>
    </li>
    <li> 
        <a href="https://www.mongodb.com/pt-br">MongoDB (Latest version)</a>
    </li>
    <li> 
        <a href="https://mongoosejs.com/">Mongoose (Version 7.3.4)</a>
    </li>
</ul>
  
## Mapa do projeto
<p id="mapa"></p>

```
├───server.js
├───package-lock.json
├───package.json
├───node-modules
└───src
      ├──app.js
      ├───config
      |     └─dbConnect.js
      ├───routes
      |     ├───index.js
      |     └─bookRoutes.js
      ├───middlewares
      |     ├─middleware404.js
      |     └─middlewareChooser.js
      ├───errors
      |     ├───BaseError.js
      |     ├───IncorrectReq.js
      |     ├───noFound.js
      |     └─ValidationError.js
      ├───controllers
      |     └─bookController.js
      └──models
            ├───globalValidator.js
            ├───index.js
            └─Book.js

```

## Técnologias utilizadas
<p id="tecnologias"></p>

- [Javascript]
- [NodeJS]
- [ExpressJS]
- [Nodemon]
- [Postman]
