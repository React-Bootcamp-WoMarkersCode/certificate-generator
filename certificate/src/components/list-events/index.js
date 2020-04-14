import React from 'react';
import Event from '../event/index';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import '../../pages/create-event/index';

import './styles.css';

function ListEvents(props) {

	return (
		<>
		<h1 className="title">Eventos Cadastrados</h1>
		<Button className="button-add"><Link to="/create-event">+ Cadastrar mais um evento</Link></Button>
		<Event />
		</>
	);
}

export default ListEvents;