import React, { useState } from 'react'
/*Importando lista de participantes*/
import { eventos } from '../../services/eventos'

const CreateEvent = (props) => {

	const { course, company, workload, startDate, finishDate} = props
	const [ eventosData, setEventos ] = useState(eventos)

	setEventos([...eventosData, {
		email: "dianaregina22@yahoo.com",
		company: company, 
		course: course,
		startDate: startDate, 
		finishDate: finishDate,
		workload: workload, 
		logo: "", 
		digitalSignature: "", 
		participants: [] 
	}])
	eventosData.map(itemJson => {
		console.log(itemJson.course)
	})


	return null

}

export default CreateEvent;