import React from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


const FormLogin = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  //O article está sendo utilizado do tachyons para colocar na formatação dos campos e a centralização na tela e a sombra
  return (
	<article class="mw5 center bg-white shadow-5 br3 pa3 pa4-ns mv3 ba b--black-10">
    <Form 
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Favor, informar seu email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Favor, informar a senha!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item>
        <a className="login-form-forgot" href="">
          Esqueci a senha
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" style={{background:'#C6255A', 'border-color': '#C6255A', 'margin-right':'15%'}} htmlType="submit" className="login-form-button">
          Entrar
        </Button>
        <a href="">Registrar-se!</a>
      </Form.Item>
    </Form>
	</article>
	
  );
};

export default FormLogin;
