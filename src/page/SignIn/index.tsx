import FormLayoutControler from "@/components/Controller";
import FormInput from "@/components/FormInput";
import { useUserLogin } from "@/services/queries/user/user.query";
import { UserloginType } from "@/services/queries/user/user.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function SignInPage() {
  const loginMutation = useUserLogin();

  const navigate = useNavigate();

  const validateSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("<PASSWORD>"),
  });
  const formOptions = { resolver: yupResolver(validateSchema) };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserloginType>(formOptions);

  const onSubmit: SubmitHandler<UserloginType> = (data) => {
    loginMutation.mutate(data);
  };

  if (loginMutation.isSuccess) {
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormLayoutControler label="Username" error={errors.username?.message}>
          <FormInput
            type="text"
            name="username"
            control={control}
            className={`login_input ${
              errors.username?.message ? "is-valid" : ""
            }`}
          />
        </FormLayoutControler>
        <FormLayoutControler label="Password" error={errors.password?.message}>
          <FormInput
            type="password"
            name="password"
            control={control}
            className={`login_input ${
              errors.password?.message ? "is-valid" : ""
            }`}
          />
        </FormLayoutControler>

        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}
