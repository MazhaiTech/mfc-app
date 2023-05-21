import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
export default function Register(){
    return(
        <div className="container p-3 shadow  mt-5 bg-white rounded">
            <h3>Create an Account </h3>

        <form>

            <div className='form-group row mt-2'>
                
                <div className='col-md-5 mb-3'>
                <label className=' col-form-label'>First name</label>
                    <input type="text" className='form-control' name="firstname" placeholder="First name" />
                </div>
             
             <div className='col-md-5 mb-3'>
                <label className=' col-form-label'>Last name</label>
                    <input type="text" className='form-control' name="lastname" placeholder="Last Name" />
                </div>
             </div>
            
             <div className='form-group row mt-2'>
                <label className='col-sm-2 col-form-label'>Email</label>
                <div className='col-sm-5'>
                    <input type="email" className='form-control' name="email" placeholder="Email" />
                </div>
             </div>

             <div className='form-group row mt-2'>
                <label className='col-sm-2 col-form-label'>Password</label>
                <div className='col-sm-5'>
                    <input type="password" className='form-control' name="password" placeholder="Password" />
                </div>
             </div>
            
           <div className='form-group row mt-2'>
                <label className='col-sm-2 col-form-label'>Phone Number</label>
                <div className='col-sm-5'>
                    <input type="tel" className='form-control' name="phonenumber" placeholder="Phone Number" />
                </div>
             </div>
            
            <div className='form-group mt-3'>
                <input type="checkbox"  name="terms" placeholder="Terms and conditions" />
                <label > I have agree the Terms and conditions</label>
            </div>

            <button className="btn text-light bg-danger fg-light mt-3">Submit</button>
        </form>
        </div>
    )
}