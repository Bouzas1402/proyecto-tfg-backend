import styles from "./tarjetausuario.module.css";

const React = require("react");

function TarjetaUsuario(usuario) {
  console.log(usuario.usuario);
  const {nombre, PrimerApellido, SegundoApellido, correo} = usuario.usuario;
  const avatar = !usuario.usuario.avatar
    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlHBLGg_YWqrd6ffgN5Si7ju2qLQ8TbBzGDXX5H-GG6GW5dG7ptOUnkJ5cjUz_HPfsz4&usqp=CAU"
    : usuario.usuario.avatar;
  const telefono = usuario.usuario.telefono ? usuario.usuario.telefono : "No phone";
  console.log(typeof avatar, "avatar");
  return (
    <div className={styles.container}>
      <div className={styles.cellphonecontainer}>
        <div className={styles.movie}>
          <div className={styles.movieimg} style={{backgroundImage: `url(${avatar})`}}></div>
          <div className={styles.textmoviecont}>
            <div className={styles.mrgrid}>
              <div className={styles.col1}>
                <h1 className={styles.h1}>{correo}</h1>
                <ul className={styles.moviegen}>
                  <li>{nombre}</li>
                  <li>{PrimerApellido}</li>
                  <li>{SegundoApellido}</li>
                </ul>
              </div>
            </div>
            <div className={[styles.mrgrid, styles.ummaryrow]}>
              <div className={styles.col2}>
                <h5 className={styles.h5}>{telefono}</h5>
              </div>
            </div>
            <div className={styles.mrgrid}>
              <div className={styles.col1}>
                <p className={styles.moviedescription}>
                  A group of elderly people are giving interviews about having lived in a climate of crop blight and
                  constant dust reminiscent of The Great Depression of the 1930's. The first one seen is an elderly
                  woman stating her father was a farmer, but did not start out that way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export {TarjetaUsuario};
