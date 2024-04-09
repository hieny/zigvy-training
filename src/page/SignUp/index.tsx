import FormLayoutControler from "@/components/Controller";
import FormInput from "@/components/FormInput";
import { useUserSignUp } from "@/services/queries/user/user.query";
import { UserSignUpType } from "@/services/queries/user/user.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function SignUpPage() {
  const signUpMutation = useUserSignUp();
  const navigate = useNavigate();
  const validateSchema = Yup.object().shape({
    username: Yup.string().required("username is required"),
    password: Yup.string().required("<PASSWORD>"),
    email: Yup.string().required("email is required"),
    name: Yup.string().required("name is required"),
  });
  const formOptions = { resolver: yupResolver(validateSchema) };

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<UserSignUpType>(formOptions);

  const onSubmit: SubmitHandler<UserSignUpType> = (data) => {
    signUpMutation.mutate(data);
  };

  if (signUpMutation.isSuccess) {
    navigate("/sign-in");
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
        <FormLayoutControler label="Full name" error={errors.name?.message}>
          <FormInput
            type="text"
            name="name"
            control={control}
            className={`login_input ${errors.name?.message ? "is-valid" : ""}`}
          />
        </FormLayoutControler>
        <FormLayoutControler label="email" error={errors.email?.message}>
          <FormInput
            type="email"
            name="email"
            control={control}
            className={`login_input ${errors.email?.message ? "is-valid" : ""}`}
          />
        </FormLayoutControler>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
