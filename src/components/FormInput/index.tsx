import { Control, FieldValues, Path } from "react-hook-form";
import Input from "../Input/Input";
import { FormInputType } from "./types";

type FormInputPropTypes<T extends FieldValues> = {
  type: FormInputType;
  control: Control<T>;
  name: Path<T>;
  className: string | undefined;
  list?: string;
  options?: string[];
};

export default function FormInput<T extends FieldValues>({
  type,
  control,
  name,
  className,
  list,
  options,
}: FormInputPropTypes<T>) {
  const renderFormContent = () => {
    console.log("options", options);
    return (
      <>
        {type !== "select" ? (
          <Input
            name={name}
            control={control}
            type={type}
            className={className}
          />
        ) : (
          <>
            <Input
              name={name}
              control={control}
              type="text"
              className={className}
              list={list}
            />
            <datalist id={list}>
              {
                options?.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
            </datalist>
          </>
        )}
      </>
    );
  };

  return <div>{renderFormContent()}</div>;
}
