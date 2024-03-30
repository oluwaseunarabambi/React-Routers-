import Nav from "./Nav";
import '../css-folders/Login.css'

const Login = () => {

  return (
    <>
      <Nav></Nav>
      <h2>Login</h2>

      <div className="form-container">
        <form>
          <label>
            First Name:
            <input type="text" placeholder="Enter First Name" />
          </label><br />
          <label>
            Last Name:
            <input type="text" placeholder="Enter Last Name" />
          </label><br />
          <label>
            Email Address:
            <input type="email" placeholder="Enter Your Email" />
          </label><br />
          <label>
            Password:
            <input type="password" placeholder="Enter Password" />
          </label><br />
          <label>
            Image:
            <input type="file" name="image" accept="image" />
          </label><br />
          <button type="submit">Submit</button>
        </form>
      </div>

    </>
  );

};

export default Login;