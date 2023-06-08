import "./Register.css";

export default function Register() {
  return (
    <center>
      <form>
        <h2 className="heading">
          Register your account
        </h2>
        <div>
          <label className="labels">First name</label>
          <input className="line-input1" type="text" name="firstname" placeholder="First name" />
          <br/>
          <label className="labels">Last name</label>
          <input className="line-input1" type="text" name="lastname" placeholder="Last name" />
          <br/>
          <label className="labels">Email</label>
          <input className="line-input1" type="email" name="email" placeholder="Email" />
          <br/>
          <label className="labels">Password</label>
          <input className="line-input1" type="password" name="password" placeholder="Password" />
          <br/>
          <label className="labels">Confirm Password</label>
          <input className="line-input1" type="password" name="password2" placeholder="Confirm Password" />
          <br/>
          <label className="labels label-address">Address</label>
          <textarea name='address' placeholder='Enter your address'  className='line-input1 area'></textarea>
          <br/>
          <input className="" type="checkbox" name="terms" placeholder="Terms and conditions" />
          <label className="checkbox-label">I have agreed to the <a href="">Terms and conditions</a></label>
        </div>
        <br/>
        <button>Submit</button>
      </form>
    </center>
  );
}
