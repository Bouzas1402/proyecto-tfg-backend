import {UncontrolledCarousel} from "reactstrap";

function CarouselAnuncio({fotos}) {
  let fotosCarousel = [];
  fotos.map((foto, index) => {
    fotosCarousel.push({
      altText: `${foto.titulo}`,
      caption: false,
      key: `${index + 1}`,
      src: `${foto.url}`,
    });
  });

  console.log(fotosCarousel);

  return <UncontrolledCarousel items={fotosCarousel} />;
}
export {CarouselAnuncio};
