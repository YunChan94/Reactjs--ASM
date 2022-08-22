import "./RegisterForm.css";

const RegisterForm = () => {
  return (
    <div className="form">
      <h1>Save time, save money!</h1>
      <p>Sign up and we'll send the best deals to you</p>
      <div className="formContainer">
        <input className="" type="text" placeholder="Your email"></input>
        <button>Subscribe</button>
      </div>
    </div>
  );
};
export default RegisterForm;
