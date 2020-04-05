import React from 'react';
import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import  ReactPDF from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'
import wallpaperCertificate from '../../assets/wallpaper-certificate.png'


/*Cria estilo com style componente*/
const styles = StyleSheet.create({
	pdf: {
		marginLeft: '10%'
	},
	page: {
		flexDirection: 'row'
	}, section: {
		marginTop: '30%',
		marginLeft: '3%',
		padding: 10,
		flexGrow: 1,
		textAlign: 'center',
	}, image: {
		width: '60%',
		padding: 10,
		backgroundColor: 'gray'
	}
});


const MyDocument = () => {
	return(
		<PDFViewer width='100%' height='800'>
			<Document title="Certificado" >
				<Page 
					size="A4" 
					orientation="landscape"
					style={styles.page}>
					<View style={styles.section} >
						<Text lineHeight="50px">A comunidade empresa confere ao participante o presente certificado.</Text>
						<Text>referente a sua participação no evento curso realizado do</Text>
						<Text>dia data inicial aodata final, com carga horaria de carga horaria.</Text>
					</View>
					<View >
						<Image source="https://image.shutterstock.com/image-photo/colorful-flower-on-dark-tropical-260nw-721703848.jpg"/>
					</View>
				</Page>
			</Document>		
		</PDFViewer>
	);
}

export default MyDocument;