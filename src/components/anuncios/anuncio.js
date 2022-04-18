import {CarouselAnuncio} from "./carousel";

const React = require("react");

function Anuncio({props}) {
  const {titulo, descripcion, fotos, direccion} = props;
  const {nombreCalle, portal, ciudad} = direccion[0];
  return (
    <div className=" w-75 m-auto pt-3">
      <div className="card text-center">
        <div className="card-header">{titulo}</div>
        <div className="card-body">
          <CarouselAnuncio fotos={fotos} />
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
