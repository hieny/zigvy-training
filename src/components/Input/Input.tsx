import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { FormInputType } from "../FormInput/types";
import "./index.scss";

type InputProps<T extends FieldValues> = UseControllerProps<T> & {
  className?: string;
  type: FormInputType;
  checked?: boolean;
  list?:string
};

function Input<T extends FieldValues>(props: InputProps<T>) {
  const { field } = useController(props);
  // console.log(field);
  return (
    <div>
      <input
        type={props.type}
        {...field}
        placeholder={props.name}
        className={props.className}
        checked={props.checked}
        list={props.list}
      />
    </div>
  );
}

export default Input;
