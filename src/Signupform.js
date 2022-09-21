import React from 'react'

const Signupform = () => {
  return (
    <div>
     <section className="h-100 h-custom gradient-custom-2"style={{backgroundColor:'skyblue'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12">
        <div className="card">
          <div className="card-body p-0">
          <h1 className='text-uppercase text-center  text-white bg-secondary md-3'>Signup form</h1>
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="p-5">
            <h2 className="text-uppercase text-center mb-5">Create an account</h2><hr></hr>
                 
                 <div className="row">
                    <div className="col-md-6 mb-4 pb-2">
                    <div className="form-group mb-4">
                  <input type="text"className=" form-control form-control-lg" />
                  <label className="form-label">First Name</label>
                   </div>
                   </div>
                    <div className="col-md-6 mb-4 pb-2">
                    <div className="form-group mb-4">
                        <input type="text" className="form-control form-control-lg" />
                        <label className="form-label">Last name</label>
                      </div>
                      </div>
                  </div>

                 <div className="mb-4 pb-2">
                    <div className="form-outline">
                      <input type="text" className="form-control form-control-lg" />
                      <label className="form-label">Email</label>
                    </div>
                  </div>
                  
                  <div className="row">
                    <div className="col-md-6 mb-4 pb-2 mb-md-0 pb-md-0">
                    <div className="form-outline">
                        <input type="password" className="form-control form-control-lg" />
                        <label className="form-label">Password</label>
                      </div>
                     </div>
                    <div className="col-md-6">
                    <div className="form-outline">
                        <input type="password" className="form-control form-control-lg" />
                        <label className="form-label"> Confirm Password</label>
                      </div>
                      </div>
                  </div><br/><br/>
                 
                  <div className="row">
                    <div className="col-md-5 mb-4 pb-2">
                    <div className="form-outline form-white">
                        <input type="text" className="form-control form-control-lg" />
                        <label className="form-label">Code +1</label>
                      </div>
                      </div>
                    <div className="col-md-7 mb-4 pb-2">
                    <div className="form-outline form-white">
                        <input type="text"className="form-control form-control-lg" />
                        <label className="form-label" >Phone Number</label>
                      </div>
                      </div>
                  </div>
                 
                  <div className="mb-5 pb-2">
                  <h5>Address   :--</h5>
                    <div className="form-outline ">
                      <input type="text" className="form-control form-control-lg" />
                      <label className="form-label" >Street Name</label>
                    </div>

                    <div class="row">
                    <div class="col-md-6 mb-4 pb-2">
                   <div class="form-group">
                        <input type="text"  class="form-control form-control-lg" />
                        <label class="form-label">City</label>
                      </div>
                      </div>
                    <div class="col-md-6 mb-4 pb-2">
                    <div class="form-group">
                        <input type="text"  class="form-control form-control-lg" />
                        <label class="form-label" >State</label>
                      </div>
                      </div>
                </div>

                  </div> 
                  </div>
              </div>
            
              <div className="col-lg-6">
                <div className="p-5"><br/><br/><br/><br/>
                 <div className="row">
                    <div className="col-md-5 mb-7 pb-2">
                    <div className="form-outline ">
                        <input type="text"  className="form-control form-control-lg" />
                        <label className="form-label">Pin Code</label>
                      </div>
                      </div>
                    <div className="col-md-7 mb-5 pb-2">
                    <div className="form-outline">
                        <input type="text"  className="form-control form-control-lg" />
                        <label className="form-label">Country</label>
                      </div>
                      </div>
                  </div>

                  <div className="mb-5 pb-2">
                    <div className="form-outline">
                      <input type="text"className="form-control form-control-lg" />
                      <label className="form-label">Company Name</label>
                    </div>
                  </div>
         
                 
                  <div className="mb-5">
                    <div className="form-outline">
                      <input type="text" className="form-control form-control-lg" />
                      <label className="form-label">Occupation</label>
                    </div>
                  </div>
    
                  <div className="form-group  mb-5">
                  <input type="number" className="form-control form-control-lg" />
                  <label className="form-label" >Years of Experience</label>
                </div>  

                  <div className="form-check d-flex justify-content-start mb-3 pb-3">
                    <input className="form-check-input me-5" type="checkbox" value=""  />
                    <label className="form-check-label-black" >
                      I  Accept the <a href="#!" className="text-black"><u>Terms and Conditions</u></a> of your
                      site.
                    </label>
                  </div>

                  <button type="button" className="btn btn-success btn-block btn-lg">Register</button>
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                    className="fw-bold text-body"><u>Login here</u></a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Signupform