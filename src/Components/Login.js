import { useForm } from "react-cool-form";


const Field = ({ label, id, error, ...rest }) => (
  <div className="form__field">
    <label className="form__label" htmlFor={id}>{label}</label>
    <input id={id} {...rest} />
    {error && <p className="form__error">{error}</p>}
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
          <div className="login__container">
            <div className="login__welcome">
              <h3>Welcome</h3>
              <p>Sign in to continue</p>
            </div>
            <form className="form" ref={form} noValidate>
              <Field
                placeholder="Username"
                id="username"
                name="username"
                required
                error={errors.username}
                className="form__input"
              />
              <Field
                placeholder="Password"
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                error={errors.password}
                className="form__input"
              />
              <p className="form__forgotPass">Forgot your password?</p>
              <input className="form__submit" type="submit" value="Sign in" />
              <p className="form__separator">or</p>
              <input className="form__submit form__submit--NHS" type="submit" value=" " />
            </form>
            <div className="login__terms">
              <p className="login__terms--doc">Are you a doctor? <a href="./admin">Click here</a></p>
              <p>By signing in, you accept our Terms and Conditions</p>
            </div>
          </div>
    );
}

export default Login;

