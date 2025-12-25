const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 card">
            <h2 className="mb-4 text-center pt-3" >Login</h2>
            <form className="card-body br-3">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form> 
          </div>
        </div>
      </div>
    </>
  )
}
export default Login