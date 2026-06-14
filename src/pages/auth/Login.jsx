import {  Form, Formik } from "formik";
import * as Yup from "yup";
import AuthFormikControl from "../../components/authForm/AuthFormikControl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialValues = {
  phone: "",
  password: "",
  remember: false,
};
const onSubmit = (values , navigate) => {
  axios.post('https://ecomadminapi.azhadev.ir/api/auth/login' , {
  ...values,
    remember : values.remember ? 1 : 0

  }).then(res => {
      console.log(res.status)

    if (res.status == 200) {
      localStorage.setItem('loginToken' , JSON.stringify(res.data));
           navigate('/')
    }

  })
};
const validationSchema = Yup.object({
  phone: Yup.number().required("لطفا این قسمت را پر کنید"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .matches(/^[a-zA-Z0-9@!%$?&]+$/, "فقط از حروف و اعداد استفاده شود"),
  remember: Yup.boolean(),
});

const Login = () => {
const navigate = useNavigate()

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values)=>onSubmit(values , navigate)}
      validationSchema={validationSchema}
    >
      {(formik) => {
   
        return (
          <div className="wrap-login100">
            <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
              <span className="login100-form-title">ورود اعضا</span>

              <AuthFormikControl
                formik={formik}
                control="input"
                type="text"
                name="phone"
                icon="fa fa-mobile"
                label="شماره موبایل"
              />

              <AuthFormikControl
                formik={formik}
                control="input"
                type="password"
                name="password"
                icon="fa fa-lock"
                label="رمز عبور"
              />

            <AuthFormikControl
                control="switch"
                name="remember"
                label="مرا به خاطر بسپار"
            />
             
             
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" type="submit">ورود</button>
              </div>
            </Form>
            <div className="login100-pic js-tilt" data-tilt>
              <img  src="/assets/auth/images/pic1.png" alt="IMG" />
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default Login;
