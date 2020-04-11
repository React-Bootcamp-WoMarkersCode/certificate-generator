import React, { useState } from 'react'
import { message } from 'antd';

/*Importando JSON de usuários*/
import data from '../../services/users.json'

import { Redirect } from 'react-router-dom'


function CreateUser(props) {

		/*Verifica se o acesso foi aprovado*/
  		const [ acessAproved, setAproved ] = useState(false)


		/*Recebendo os dados do Google ou Formulário de Registro*/
		const { name, email, password, avatar } = props

		/*Estado do JSON de usuarios*/
	  	const [ usersData, setUsers ] = useState(data)

		/*Verificando se já existe um usuário cadastrado*/
		let listEmails = []

		usersData.map(itemJson => {
			listEmails.push(itemJson.email)
		})



		/*Se o e-mail digitado pelo usuário pelo usuário ainda não está no JSON de usuários*/
		if(!listEmails.includes(email)) {

			message.success('Conta criada com sucesso')
			
			setUsers([
			      ...usersData, {
			        name: name,
			        email: email,
			        password: password, 
			        token: true,
			        avatar: avatar
			      }
			])

			setAproved(true)

		} else {
			message.warning('Este usuário já está cadastrado')
		}

		console.log(usersData)

		return null;
		//return(<>{ acessAproved && <Redirect to="/profile"></Redirect>}</>);

}

export default CreateUser;