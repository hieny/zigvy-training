import { Control, FieldValues, Path } from "react-hook-form";
import FormLayoutControler from "../../../../components/Controller";
import FormInput from "../../../../components/FormInput";
import "./index.scss";

type CountryCodePropType<T extends FieldValues> = {
  control: Control<T>
  name: Path<T>,
  error: string | undefined
  className: string
}
export default function CountryCode<T extends FieldValues>({control, error, name, className}: CountryCodePropType<T>) {
  return (
    <div className="country_code">
      <FormLayoutControler error={error} label="Country code">
        <FormInput className={className} control={control} name={name} type="select" list="countryCode" options={[
          "VN (+84)", "US (+01)","UK (+48)","USK (+84)"
        ]}/>
      </FormLayoutControler>
    </div>
  );
}
