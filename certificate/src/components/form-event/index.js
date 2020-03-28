import React, { useState, useEffect }  from 'react'
import { Form, DatePicker, Button, Input } from 'antd';
import UploadImg from '../upload-img/index'

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
      message: 'Please select time!',
    },
  ],
};

/*Define as regras para que os inputs de texto sejam aceitos */
const rangeInputs = {
	rules: [
    	{
        	required: true,
            message: 'Please input your name',
        },
	],
};

const FormEvent = () => {
  const onFinish = fieldsValue => {
    // Should format date value before submit.
    const rangeValue = fieldsValue['range-picker'];
    const rangeTimeValue = fieldsValue['range-time-picker'];

    /*Constroi o formato dos calendarios*/
    const values = {
      ...fieldsValue,
      'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
      'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
      'month-picker': fieldsValue['month-picker'].format('YYYY-MM'),
      'range-picker': [rangeValue[0].format('YYYY-MM-DD'), rangeValue[1].format('YYYY-MM-DD')],
      'range-time-picker': [
        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
      ],
      'time-picker': fieldsValue['time-picker'].format('HH:mm:ss'),
    };
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>     

        <Form.Item
	        {...formInputLayout}
	        {...rangeInputs}
	        name="course"
	        label="Course/Event"
	      >
        <Input placeholder="Digite o nome do evento" />
      </Form.Item>

            <Form.Item
        {...formInputLayout}
        
        name="cargaHoraria"
        label="Carga Horária"
      >
        <Input placeholder="Digite a carga horária do curso" />
      </Form.Item>

      <Form.Item name="range-picker" label="Data de inicio/fim do evento" {...rangeConfig}>
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