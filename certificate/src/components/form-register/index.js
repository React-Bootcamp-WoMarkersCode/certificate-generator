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

import { Redirect } from 'react-router-dom'

const FormRegister = (props) => {

	/*Verifica se o acesso foi aprovado*/
  	const [ acessAproved, setAproved ] = useState(false)

	/*Variavel para renderizar o componente CreateUser*/
	const [ createUser, setCreateUser] = useState(false)


	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
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
					        token: true,
					        avatar: ""
					      }
					])

					setAproved(true)

				} else {
					message.warning('Este usuário já está cadastrado')
				}

					console.log(user)
						
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

					<button type="submit" onClick={actionButton} className="button">Criar conta</button>
				</Form>
			</FormikProvider>

		</div>
		 { acessAproved && <Redirect to="/profile"></Redirect>}
		</>
	);
}

export default FormRegister;