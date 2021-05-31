import { useForm } from "react-cool-form";

const Field = ({ label, id, error, ...rest }) => (
  <div>
    <label htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p>{error}</p>}
  </div>
);

const Login = (props) =>{


  const { form, use } = useForm({
    defaultValues: { username: "", password: "" },
    onSubmit: (values) =>{
      props.onAuth(values);
    },
  });

  const errors = use("errors", { errorWithTouched: true });


    return(
          <form ref={form} noValidate>
            <Field
              label="Username"
              id="username"
              name="username"
              required
              error={errors.username}
            />
            <Field
              label="Password"
              id="password"
              name="password"
              type="password"
              required
              minLength={8}
              error={errors.password}
            />
            <input type="submit" />
          </form>
    );
}

export default Login;

