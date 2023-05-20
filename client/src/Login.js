export default function Login(){
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
            <input type="tel" name="phone" placeholder="Phone Number" />
            <br/>
            <label>Date of Birth</label>
            <input type="date" name="dob" placeholder="Date of Birth" />
            <br/>
            <label>Delivery Address</label>
            <input type="text" name="address" placeholder="Delivery Address" />

        </form>
        </div>
    )
}