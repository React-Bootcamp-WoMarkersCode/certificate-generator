import React, { Component } from 'react';
import Event from '../event/index';
import { Button } from 'antd';


import './styles.css';

function ListEvents(props) {

	return (
		<>
		<h1 className="title">Eventos Cadastrados</h1>
		<Button className="button-add">+ Cadastrar mais um evento</Button>
		<Event />
		</>
	);
}

export default ListEvents;