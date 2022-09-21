import React from 'react'

const Loginform = () => {
  return (
    <div>
     <section className="vh-100 bg-image"style={{backgroundColor:'lightblue'}}>
  <div className="d-flex align-items-center h-100 ">
    <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="card" style={{borderRaduis:20}}>
          <h1 className='text-uppercase text-center bg-secondary text-white md-3'>Login form</h1>
            <div className="card-body p-5">
              <h2 className="text-uppercase text-center mb-5">Login Account</h2>
              <hr/>
              <form>
              <div className="form-outline mb-4">
                  <input type="email" className="form-control form-control-lg" />
                  <label className="form-label">Enter your Mail</label>
                </div>
                <div className="form-outline mb-4">
                  <input type="password" className="form-control form-control-lg" />
                  <label className="form-label">Enter Your Password</label>
                </div>
                <div class="row mb-4">
        <div class="col d-flex justify-content-center">
        <div class="form-check">
        <input class="form-check-input" type="checkbox" />
        <label class="form-check-label"> Remember me </label>
      </div>
    </div>
    <div class="col">
     <a href="#!">Forgot password?</a>
    </div>
  </div>
              <div className="d-flex justify-content-center">
                  <button type="button"
                    className="btn btn-primary btn-block  btn-lg ">Login</button>
                </div>
                
                <div className="text-center">
    <p>Not a member? <a href="#!">Register</a></p>
    <p>or sign up with:</p>
    <button type="button" className="btn btn-link btn-floating mx-1">
      <i class="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i class="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i class="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-link btn-floating mx-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
                </form>
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

export default Loginform