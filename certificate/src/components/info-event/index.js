import React from "react";
import { List, Typography, Divider, Tag } from 'antd';
import './style.css'

function InfoEvent(props) {

  const { evento } = props

  const dataEvent = [ 

  	{
  		data: evento.company,
  		description: "Comunidade"
  	},
  	{
  		data: evento.startDate,
  		description: "Data de Inicio"
  	},
  	{
  		data: evento.finishDate,
  		description: "Data de Encerramento"
  	},
  	{
  		data: evento.workload,
  		description: "Carga Horária"
  	},
	  
	];

  return (
  	<>
	  	<div className="up-info">
	  		
	  	</div>
	    <div className="list-info">
		  <Divider orientation="left">{evento.course}</Divider>
		    <List
		      header={<div>Informações do evento</div>}
		      bordered
		      dataSource={dataEvent}
		      renderItem={dataEvent => (
		        <List.Item>
		          <Tag color="default">{dataEvent.description}</Tag>{dataEvent.data}
		        </List.Item>
		      )}
		    />
	    </div>
	</>
  );
}

export default InfoEvent;