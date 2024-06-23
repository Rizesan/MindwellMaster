import {useForm} from "../../hooks/useForm";

export const LoginPage = () => {
  const {name, email,password, onInputChange, onResetForm}=
      useForm({
    name:'',
    email:'',
    password:''
  });
  return (
      <div> log </div>
  )
}