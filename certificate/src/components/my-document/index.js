import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

/*Cria estilo com style componente*/
const styles = StyleSheet.create({
	pdf: {
		marginLeft: '10%'
	},
	page: {
		display: 'flex',
		flexDirection: 'row'
	}, section: {
		marginTop: '10%',
		marginLeft: '3%',
		padding: 10,
		flexGrow: 1,
		textAlign: 'center'
	}, image: {
		width: '10%',
		marginLeft: '35%'
	}, user: {
		marginTop: '3%'
	}
});


const MyDocument = (props) => {

	const { name, course, company, startDate, finishDate, workload, user, digitalSignature } = props

	return(
		
			<Document title="Certificado de participação" >
				<Page 
					size="A4" 
					orientation="landscape"
					style={styles.page}>
					<View style={styles.section} >
						
						<Text lineHeight="50px">A comunidade {company} confere ao participante {name} o presente certificado</Text>
						<Text>referente a sua participação no evento {course} realizado do</Text>
						<Text>dia {startDate} ao {finishDate}, totalizando {workload} horas de atividades.</Text>
						<Image style={styles.image} source={digitalSignature} alt="Assinatura Digital" />
						<Text style={styles.user}>{user}</Text>
					</View>
				</Page>
			</Document>	
		
	);
}

export default MyDocument;