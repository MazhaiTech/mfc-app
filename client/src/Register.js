export default function Register(){
    return(
        <div>
            <h1>Create an Account </h1>
        <form>
            <label>First name</label>
            <input type="text" name="firstname" placeholder="Username" />
            <br/>
            <label>Last name</label>
            <input type="text" name="lastname" placeholder="Last Name" />
            <br/>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
            <br/>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
            <br/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Phone Number" max='' />
            <br/>
            <input type="checkbox" name="terms" placeholder="Terms and conditions" />
            <label>Terms and conditions</label>
            <br/>
            <button>Submit</button>
        </form>
        </div>
    )
}