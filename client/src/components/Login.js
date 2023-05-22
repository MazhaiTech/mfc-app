import './Login.css'

export default function Login() {
    return (
      <div>
        <center>
          <h2 className="account select">Create Account</h2>
          <div className="image">
            <img src="/Images/mail.png" alt="Mail" />
          </div>
          <p className="mno select">Enter your mobile number to create an account</p>
          <p className="otp select">We will send you a one-time password (OTP)</p>
          <input
            type="text"
            className="line-input"
            id="numberInput"
            placeholder="Enter mobile Number"
           // onInput={checkInput}
            pattern="[0-9]{10}"
            required
          />
          <br /><br /><br /><br />
          <div className="error-message"></div>
          <button type="submit" className="button">Send</button>
        </center>
      </div>
    );
  }
  