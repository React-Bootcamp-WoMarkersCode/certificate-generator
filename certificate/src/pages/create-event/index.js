import React from 'react'
import FormEvent from '../../components/form-event/index'
import UploadImg from '../../components/upload-img/index'
import Footer from '../../components/footer/index'

function CreateEvent(props) {

	return (
		<>
			<FormEvent />
			<UploadImg />
			<Footer />
		</>
	);
}

export default CreateEvent;