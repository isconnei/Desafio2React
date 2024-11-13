export default function Register() {
  return (
    <div className="border border-dark-subtle m-3 p-1">
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
          <div id="emailHelp" className="form-text">
            Contraseña debe tener al menos 6 caracteres.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Registrar cuenta
        </button>
      </form>
    </div>
  );
}
