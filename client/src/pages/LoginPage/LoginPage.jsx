import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import Illustration from "../../assets/images/illustrations.png";
import "./LoginPage.scss"

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div className="login">

      <form className="login-form" onSubmit={() => navigate("/")}>
      <label className="login-form__title page-header">SIGN IN</label>
      <img src={Illustration} alt="Login Image" className="login-form__image"/>
        <div className="login-form__input">
          <label className="login-form__label label-text">EMAIL</label>
          <input className="login-form__text body-medium" type="text" name="email" placeholder="Enter email"></input>
        </div>
        <div className="login-form__input">
          <label className="login-form__label label-text">USERNAME</label>
          <input className="login-form__text body-medium" type="text" name="name" placeholder="Enter you username"></input>
        </div>
        <div className="login-form__input">
          <label className="login-form__label label-text">PASSWORD</label>
          <input className="login-form__text body-medium" type="password" name="password" placeholder="Enter your password"></input>
        </div>
        <div className="login-form__button">
        <Button
          buttonVariant="primary"
          buttonLabel="Log in"
          type="submit"
        />
        </div>
      </form>
    </div>
  );
}

export default LoginPage
