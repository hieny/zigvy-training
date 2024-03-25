import "./index.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import * as Yup from "yup";
import FormLayoutControler from "../../components/Controller";
import FormInput from "@/components/FormInput";
import { useUserLogin } from "@/services/queries/user/user.query";
import { UserloginType } from "@/services/queries/user/user.type";
// import { AxiosError } from "axios";

type LoginType = {
  isModal: boolean;
  handleCloseModal: () => void;
};
export default function Login({handleCloseModal }: LoginType) {
  const validateSchema = Yup.object().shape({
    userName: Yup.string().required("username is required"),
    passWord: Yup.string().required("password is required"),
  });
  const formOptions = { resolver: yupResolver(validateSchema) };
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserloginType>(formOptions);
  const loginMutation = useUserLogin();

  const onSubmit: SubmitHandler<UserloginType> = (data) => {
    loginMutation.mutate(data);
  };

  if (loginMutation.isSuccess) {
    handleCloseModal()
  }

  return (
    <div className="login">
      <p className="login_title">Log in or sign up</p>
      <div>
        <p>{loginMutation.error?.response?.data.message}</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="login_content">
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
              error={errors.passWord?.message}
            >
              <FormInput
                type="password"
                name="passWord"
                control={control}
                className={`login_input ${
                  errors.passWord?.message ? "is-valid" : ""
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
      </div>
    </div>
  );
}
