import React from 'react'
import { useFormik, FormikProvider } from 'formik';
import { Field, Form, ErrorMessage } from 'formik';
import { Upload, message, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as Yup from 'yup';
import './styles.css';


const FormRegister = () => {
	const formik = useFormik({
		initialValues: {
			institution: "",
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

	const props = {
		name: 'file',
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		headers: {
			authorization: 'authorization-text'
		},
		onChange(info){
			if(info.file.status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if(info.file.status === 'done'){
				message.success(`${info.file.name} file uploaded successfully`);
			} else if (info.file.status === 'error'){
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};
	return (
		<div className="form">	
			<FormikProvider value={formik}>
				<Form onSubmit={handleSubmit}>
					<label htmlFor="institution" className="form-label">Instituição</label>
					<Field name="institution" type="text" className="form-field"/>
					<ErrorMessage name="institution" />
					
					<label htmlFor="email" className="form-label">E-mail</label>
					<Field name="email" type="text" className="form-field"/>
					<ErrorMessage name="email" />
					
					<label htmlFor="password" className="form-label">Senha</label>
					<Field name="password" type="password" className="form-field"/>
					<ErrorMessage name="password" />

					<Upload className="form-upload" {...props} >
						<Button className="form-upload">
							<UploadOutlined  /> Upload LOGO
						</Button>
					</Upload>
					<button type="submit" className="button">Cadastrar meus dados</button>
				</Form>
			</FormikProvider>

		</div>
		

	);
};

export default FormRegister;