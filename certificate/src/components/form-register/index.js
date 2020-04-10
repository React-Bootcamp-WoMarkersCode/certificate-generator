import React, { useState } from 'react'
import { useFormik, FormikProvider, Field, Form, ErrorMessage } from 'formik';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as Yup from 'yup';
import './styles.css';

/*Importando lista de participantes*/
import users from '../../services/users.json'

/*Componentes*/
import CreateUser from '../create-user/index'

const FormRegister = (props) => {

	/*Esses dados podem vir do componente ProfileCard (para editar os dados)*/
	/*Esses dados podem vir do componente FormRegister (para criar uma nova conta)*/
	const { name, email, password, action } = props

	/*Variavel para renderizar o componente CreateUser*/
	const [ createUser, setCreateUser] = useState(false)

	const formik = useFormik({
		initialValues: {
			name: name,
			email: email,
			password: password,
			remember: true,
		},
		validationSchema: Yup.object().shape({
			name: Yup.string().required('Digite seu nome'),
			email: Yup.string().email('E-mail inválido').required('Digite seu e-mail'),
			password: Yup.string().min(4).required('Digite uma senha')
		})
	})

	const { handleSubmit, values } = formik

	/*JSON dos usuários*/
	const [ user, setUser ] = useState(users)

	const actionButton = () => {
		if(action == 'Editar Dados') {

			/*Atualizando os dados*/
			setUser(
				user.map(itemJson => {

					/*Buscando usuário ativo*/
					if(itemJson.token){
						itemJson['name'] = values.name
						itemJson['email'] = values.email
						itemJson['password'] = values.password

						return itemJson
					} else {
						return itemJson
					}
			})
		)


			/*Criando nova conta*/
		} else if (action == 'Cadastrar nova conta') {
			
			if(!values.name || !values.email || !values.password) {
				message.warning('Por favor, preencha todos os campos') 

			} else {

				/*Verificando se já existe um usuário cadastrado*/
				let listEmails = []

				user.map(itemJson => {
					listEmails.push(itemJson.email)
				})

				/*Se o e-mail digitado pelo usuário pelo usuário ainda não está no JSON de usuários*/
				if(!listEmails.includes(values.email)) {
					message.success('Conta criada com sucesso')
					setUser([
					      ...user, {
					        name: values.name,
					        email: values.email,
					        password: values.password, 
					        token: false,
					        avatar: ""
					      }
					])

				} else {
					message.warning('Este usuário já está cadastrado')
				}

					console.log(user)
						
					}
				}
			}
	

	return (
		<>
			<div className="form">	
			<FormikProvider value={formik}>
				<Form onSubmit={handleSubmit}>
					<label htmlFor="name" className="form-label">Nome</label>
					<Field name="name" type="text" className="form-field"/>
					<ErrorMessage 
						render={msg => <p className="msg-error" >{msg}</p>}
						name="name" />
					
					<label htmlFor="email" className="form-label">E-mail</label>
					<Field name="email" type="text" className="form-field"/>
					<ErrorMessage 
						render={msg => <p className="msg-error" >{msg}</p>} 
						name="email" />
					
					<label htmlFor="password" className="form-label">Senha</label>
					<Field name="password" type="password" className="form-field"/>
					<ErrorMessage 
						render={msg => <p className="msg-error" >{msg}</p>} 
						name="password" />

					<button type="submit" onClick={actionButton} className="button">{action}</button>
				</Form>
			</FormikProvider>

		</div>

		</>
	);
}

export default FormRegister;