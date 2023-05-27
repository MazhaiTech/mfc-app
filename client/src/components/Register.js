import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import "./Register.css"
export default function Register(){
    return(
        
        <div class='container'>
            

        <form class=" p-3 shadow bg-white rounded mt-5">
            <h3><center>Register your account</center> </h3>
            <div class='form-group row mt-4'>
                <label class='col-sm-2 col-form-label'>First name</label>
                <div class='col-sm-5'>
                    <input type="text" class='form-control' name="firstname" placeholder="First name" />
                </div>
             </div>
            
             <div class='form-group row mt-2'>
                <label class='col-sm-2 col-form-label'>Last name</label>
                <div class='col-sm-5'>
                    <input type="text" class='form-control' name="lastname" placeholder="Last name" />
                </div>
             </div>
            
             <div class='form-group row mt-2'>
                <label class='col-sm-2 col-form-label'>Email</label>
                <div class='col-sm-5'>
                    <input type="email" class='form-control' name="email" placeholder="Email name" />
                </div>
             </div>

             <div class='form-group row mt-2'>
                <label class='col-sm-2 col-form-label'>Password</label>
                <div class='col-sm-5'>
                    <input type="password" class='form-control' name="password" placeholder="Password" />
                </div>
             </div>
            
           <div class='form-group row mt-2'>
                <label class='col-sm-2 col-form-label'>Phone Number</label>
                <div class='col-sm-5'>
                    <input type="tel" class='form-control' name="phonenumber" placeholder="Phone Number" />
                </div>
             </div>
            
            <div class='form-group mt-3'>
                <input class='check' type="checkbox"  name="terms" placeholder="Terms and conditions" />
                <label> I have agree the Terms and conditions</label>
            </div>

            <button class="btn text-light bg-danger fg-light mt-3">Submit</button>
        </form>
        </div>
    )
}