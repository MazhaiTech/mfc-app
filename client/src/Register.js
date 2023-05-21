import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
export default function Register(){
    return(
        <div className="container p-3 shadow  mt-5 bg-white rounded">
            <h3>Create an Account </h3>

        <form>

            <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>First name</label>
                <div className='col-sm-10'>
                    <input type="text" className='form-control' name="firstname" placeholder="First name" />
                </div>
             </div>
            
             <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>Last name</label>
                <div className='col-sm-10'>
                    <input type="text" className='form-control' name="lastname" placeholder="Last name" />
                </div>
             </div>
            
             <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>Email</label>
                <div className='col-sm-10'>
                    <input type="email" className='form-control' name="email" placeholder="Email name" />
                </div>
             </div>

             <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>Password</label>
                <div className='col-sm-10'>
                    <input type="password" className='form-control' name="password" placeholder="Password" />
                </div>
             </div>
            
           <div className='form-group row'>
                <label className='col-sm-2 col-form-label'>Phone Number</label>
                <div className='col-sm-10'>
                    <input type="tel" className='form-control' name="phonenumber" placeholder="Phone Number" />
                </div>
             </div>
            
            <div className='form-group'>
                <input type="checkbox"  name="terms" placeholder="Terms and conditions" />
                <label>Terms and conditions</label>
            </div>

            <button className="btn bg-primary">Submit</button>
        </form>
        </div>
    )
}