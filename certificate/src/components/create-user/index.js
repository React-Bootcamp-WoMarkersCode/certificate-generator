import React, { useState } from 'react'

/*Importando JSON de usuários*/
import data from '../../services/users.json'


function CreateUser(props) {

		/*Recebendo os dados do Google ou Formulário de Registro*/
		const { name, email, password, avatar } = props

		/*Estado do JSON de usuarios*/
	  	const [ usersData, setUsers ] = useState(data)

	  	/*Verifica se a conta já existe*/
	  	const [ createUser, setCreateUser ] = useState(false)


		/*Verificando existencia de usuário*/
		usersData.map(emailCadastrado => {

			if(emailCadastrado.email === email) {
				alert('Esta conta já está cadastrada')

			} else if (!createUser) {
				/*Adicionando novo usuário*/
				alert('Criando o usuário', name)
				setCreateUser(true)

				/*Coloquei a senha como true pois o usuário 
				já fez o login com o google*/
				setUsers([
			      ...usersData, {
			        name: name,
			        email: email,
			        password: password, 
			        token: false,
			        avatar: avatar
			      }
			    ])
			    
			}
		})

		console.log(usersData)

		return null;

}

export default CreateUser;