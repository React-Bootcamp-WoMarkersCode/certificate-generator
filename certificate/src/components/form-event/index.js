import React, { useState, useEffect }  from 'react'
import { Form, DatePicker, Button, Input, InputNumber } from 'antd';
import UploadImg from '../upload-img/index'

import data from '../../services/events.json'

const { RangePicker } = DatePicker;

/*Constroi o layout do input de datas*/
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

/*Constroi o layout do input de name/curso*/
const formInputLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
  },
};

/*Define as regras para que a data seja aceita */
const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Este campo é obrigatório!',
    },
  ],
};

/*Define as regras para que os inputs de texto sejam aceitos */
const rangeInputs = {
	rules: [
    	{
        	required: true,
            message: 'Por favor, preencha esse campo',
        },
	],
};

const FormEvent = () => {

  /*Estado do JSON de eventos*/
  const [ eventosData, setEventos ] = useState(data)

  const onFinish = fieldsValue => {

    /*Dados do calendário*/
    const rangeValue = fieldsValue['range-picker'];

    /*Adicionando novo evento*/
    setEventos([
      ...eventosData, {
        email: "dianaregina22@outlook.com.br",
        company: fieldsValue.company, 
        course: fieldsValue.course,
        startDate: rangeValue[0].format('YYYY-MM-DD'), 
        finishDate: rangeValue[1].format('YYYY-MM-DD'),
        workload: fieldsValue.workload,
        logo: "",
        digitalSignature: "",
        participants: []
      }
    ])
    console.log(eventosData)

  };

  return (
    <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>     

        <Form.Item
	        {...formInputLayout}
	        {...rangeInputs}
	        name="company"
	        label="Empresa/Startup/Organização" >
          <Input placeholder="Digite a empresa responsável pelo evento" />
        </Form.Item>

        <Form.Item
          {...formInputLayout}
          {...rangeInputs}
          name="course"
          label="Curso/Evento">
          <Input placeholder="Digite o nome do evento"  />
        </Form.Item>

        <Form.Item 
          label="Carga Horária" 
          name="workload" >
          <InputNumber /> 
        </Form.Item>

        <Form.Item 
          name="range-picker" 
          label="Data de inicio/fim do evento" 
          {...rangeConfig}>
          <RangePicker />
        </Form.Item>

        <UploadImg/>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Cadastrar Novo Evento
          </Button>
        </Form.Item>

    </Form>
  );
};

export default FormEvent;