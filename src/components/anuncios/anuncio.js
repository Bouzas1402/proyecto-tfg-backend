const React = require("react");

function Anuncio({props}) {
  const {titulo, descripcion, fotos, direccion} = props;
  const {nombreCalle, portal, ciudad} = direccion[0];
  const {url} = fotos[0];
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">{titulo}</div>
        <div className="card-body">
          <img src={url} className="card-img-top" alt="..." />
          <p className="card-text">{descripcion}</p>
        </div>
        <div className="card-footer text-muted">
          {nombreCalle} {portal}, {ciudad}
        </div>
      </div>
    </div>
  );
}
export {Anuncio};
