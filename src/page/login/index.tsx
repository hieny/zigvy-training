// import { useState } from "react";
// import Input from "../../components/input/Input";
import "./index.scss";
import CountryCode from "./components/countryCode";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Web2Login from "./components/Web2Login";
// import { phoneRegExp } from "../../utils/regex";
import SeparateLine from "../../components/SeperateLine/SeparateLine";
import FormLayoutControler from "../../components/Controller";
import FormInput from "../../components/FormInput";

// type LoginFormInput = {
//   phoneNumber: string;
//   // userName: string;
//   // password: string;
// };

type SignUp = {
  userName: string;
  password: string;
  countryCode: string;
};

export default function Login() {
  const validateSchema = Yup.object().shape({
    userName: Yup.string().required("username is required"),
    password: Yup.string().required("password is required"),
    countryCode: Yup.string().required("countrycode is required"),
  });
  const formOptions = { resolver: yupResolver(validateSchema) };
  const {
    // register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignUp>(formOptions);

  const onSubmit: SubmitHandler<SignUp> = (data) => {
    console.log(data);
    window.alert(JSON.stringify(data));
  };

  return (
    <div className="login">
      <p className="login_title">Log in or sign up</p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login_content">
            
            <CountryCode
              control={control}
              className={`login_input ${
                errors.countryCode?.message ? "is-valid" : ""
              }`}
              name={"countryCode"}
              error={errors.countryCode?.message}
            />

            <SeparateLine />

            {/* userName */}
            <FormLayoutControler
              label="userName"
              error={errors.userName?.message}
            >
              <FormInput
                type="text"
                name="userName"
                control={control}
                className={`login_input ${
                  errors.userName?.message ? "is-valid" : ""
                }`}
              />
            </FormLayoutControler>

            {/* password */}
            <FormLayoutControler
              label="Password"
              error={errors.password?.message}
            >
              <FormInput
                type="password"
                name="password"
                control={control}
                className={`login_input ${
                  errors.password?.message ? "is-valid" : ""
                }`}
              />
            </FormLayoutControler>
          </div>

          <p className="policy">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. Privacy Policy
          </p>
          <button className="btn_login" type="submit">
            Continue
          </button>
        </form>
        {/* <div className="divider">---------------or---------------</div> */}
        <Web2Login />
      </div>
    </div>
  );
}
