const React = require("react");

function ButtonsOff() {
  return (
    <div className="d-flex flex-row-reverse">
      <div className="nav-item">
        <button className="btn btn-link my-2 my-sm-0" type="submit">
          Logearse
        </button>
        <button className="btn btn-link my-2 my-sm-0" type="submit">
          Registrarse
        </button>
      </div>
    </div>
  );
}
export {ButtonsOff};
