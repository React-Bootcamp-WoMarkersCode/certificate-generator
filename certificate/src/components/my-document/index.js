import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import  ReactPDF from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'
/*Cria estilo com style componente*/
const styles = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#e4e4e4'
	}, section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
});

const MyDocument = () => {
	return(
		<PDFViewer>
		<Document>
			<Page size="A4" style={styles.page}>
				<View style={styles.section}>
					<Text> Section #1</Text>
				</View>
				<View style={styles.section}>
					<Text> Section #2</Text>
				</View>
			</Page>
		</Document>
		</PDFViewer>
	);
}

export default MyDocument;