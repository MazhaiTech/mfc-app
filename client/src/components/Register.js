import "./Register.css";

export default function Register() {
  return (
    <center>
      <form>
      <h2 className="acc">
        Register your account
      </h2>
      <div>
      <label className="mn">First name</label>
      <input className="line-input1" type="text" name="firstname" placeholder="First name" />
      <br/>
      <label className="mn">Last name</label>
      <input className="line-input1" type="text" name="lastname" placeholder="Last name" />
      <br/>
      <label className="mn">Email</label>
      <input className="line-input1" type="email" name="email" placeholder="Email name" />
      <br/>
      <label className="mn">Password</label>
      <input className="line-input1" type="password" name="password" placeholder="Password" />
      <br/>
      <label className="mn">Confirm Password</label>
      <input className="line-input1" type="password" name="password2" placeholder="Confirm Password" />
      <br/>
      <label className="mn">Address</label>
      <input className="line-input1" type="text" name="address" placeholder="Address" />
      <br/>
      <input className="" type="checkbox" row="5" cols="5" name="terms" placeholder="Terms and conditions" />
      <label className="checkbox-label">I have agreed to the <a href="">Terms and conditions</a></label>
      </div>
      <br/>
      <button>Submit</button>
    </form>
    </center>
  );
}
