import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useFormik } from "formik";
import * as Yup from "yup";

const FormLogin = () => {
  
  //Coloquei onFinish pois no site do Antd está dizendo p/ usar onFinish ao invés de onSubmit
  // link de referência: https://ant.design/components/form/v3
  const onFinish = values => {
    console.log('Received values of form: ', values);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email inválido")
        .required("Campo obrigatório"),
      password: Yup.string()
        .min(8)
        .required("Campo obrigatório")
    })
   
  });

  
  console.log(formik);
  //O article está sendo utilizado do tachyons para colocar na formatação dos campos e a centralização na tela e a sombra
  return (
    <div className="article" style={{ 'width': "40%", 'marginRight':'auto', 'marginLeft': 'auto'}}>
      <Form className="login-form" onFinish={onFinish} >
        <Form.Item>
          <Input
            name="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div style={{color: "#f00"}}>{formik.errors.email}</div>
          ) : null}
        </Form.Item>
        <Form.Item>
          <Input
            name="password"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Senha"
            {...formik.getFieldProps("password")}
          />
            {formik.touched.password && formik.errors.password ? (
              <div style={{color: "#f00"}}>{formik.errors.password}</div>
            ) : null}
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            style={{
              background: "#C6255A",
              "borderColor": "#C6255A",
              "marginRight": "15%",
              "width": "100%"
            }}
            htmlType="submit"
            className="login-form-button"
          >
            Entrar
          </Button>
          
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormLogin;
