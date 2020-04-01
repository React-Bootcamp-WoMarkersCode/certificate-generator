import React, { useState } from 'react'
import { useFormik, FormikProvider } from 'formik';
import { Field, Form, ErrorMessage } from 'formik';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as Yup from 'yup';
import './styles.css';

const FormRegister = () => {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			password: "",
			remember: true,
		},
		validationSchema: Yup.object().shape({
			institution: Yup.string().required('Required'),
			email: Yup.string().email('E-mail inválido').required('Required'),
			password: Yup.string().min(8).required('Required')
		}),
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2));
		}
	})

	const { handleSubmit, values } = formik

	return (
		<>
			<div className="form">	
			<FormikProvider value={formik}>
				<Form onSubmit={handleSubmit}>
					<label htmlFor="name" className="form-label">Nome</label>
					<Field name="name" type="text" className="form-field"/>
					<ErrorMessage name="name" />
					
					<label htmlFor="email" className="form-label">E-mail</label>
					<Field name="email" type="text" className="form-field"/>
					<ErrorMessage name="email" />
					
					<label htmlFor="password" className="form-label">Senha</label>
					<Field name="password" type="password" className="form-field"/>
					<ErrorMessage name="password" />

					<button type="submit" className="button">Cadastrar minha conta</button>
				</Form>
			</FormikProvider>

		</div>
		</>
	);
}

export default FormRegister;