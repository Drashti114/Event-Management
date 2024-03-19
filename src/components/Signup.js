import React from 'react';
import "../css/app.css";
import "../css/icons.css";


const Signup = () => {
  return (
    <>
		<div className="d-flex align-items-center justify-content-center my-5 my-lg-0">
			<div className="container">
				<div className="row row-cols-1 row-cols-lg-2 row-cols-xl-2">
					<div className="col mx-auto">
						<div className="my-4 text-center">
							<img src="assets/images/logo-img.png" width="180" alt="" />
						</div>
						<div className="card">
							<div className="card-body">
								<div className="border p-4 rounded">
									<div className="text-center">
										<h3 className="">Sign Up</h3>
										<p>Already have an account? <a href="authentication-signin.html">Sign in here</a>
										</p>
									</div>
									<div className="d-grid">
										<a className="btn my-4 shadow-sm btn-white" href="javascript:;"> <span className="d-flex justify-content-center align-items-center">
                          <img className="me-2" src="assets/images/icons/search.svg" width="16" alt="Image Description"/>
                          <span>Sign Up with Google</span>
											</span>
										</a> <a href="javascript:;" className="btn btn-facebook"><i className="bx bxl-facebook"></i>Sign Up with Facebook</a>
									</div>
									<div className="login-separater text-center mb-4"> <span>OR SIGN UP WITH EMAIL</span>
										<hr/>
									</div>
									<div className="form-body">
										<form className="row g-3">
											<div className="col-sm-6">
												<label for="inputFirstName" className="form-label">First Name</label>
												<input type="email" className="form-control" id="inputFirstName" placeholder="Jhon"/>
											</div>
											<div className="col-sm-6">
												<label for="inputLastName" className="form-label">Last Name</label>
												<input type="email" className="form-control" id="inputLastName" placeholder="Deo"/>
											</div>
											<div className="col-12">
												<label for="inputEmailAddress" className="form-label">Email Address</label>
												<input type="email" className="form-control" id="inputEmailAddress" placeholder="example@user.com"/>
											</div>
											<div className="col-12">
												<label for="inputChoosePassword" className="form-label">Password</label>
												<div className="input-group" id="show_hide_password">
													<input type="password" className="form-control border-end-0" id="inputChoosePassword" value="12345678" placeholder="Enter Password"/> <a href="javascript:;" className="input-group-text bg-transparent"><i className='bx bx-hide'></i></a>
												</div>
											</div>
											<div className="col-12">
												<label for="inputSelectCountry" className="form-label">Country</label>
												<select className="form-select" id="inputSelectCountry" aria-label="Default select example">
													<option selected>India</option>
													<option value="1">United Kingdom</option>
													<option value="2">America</option>
													<option value="3">Dubai</option>
												</select>
											</div>
											<div className="col-12">
												<div className="form-check form-switch">
													<input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
													<label className="form-check-label" for="flexSwitchCheckChecked">I read and agree to Terms & Conditions</label>
												</div>
											</div>
											<div className="col-12">
												<div className="d-grid">
													<button type="submit" className="btn btn-primary"><i className='bx bx-user'></i>Sign up</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/*<!--end row-->*/}
			</div>
		</div>
	
    </>
  )
}

export default Signup