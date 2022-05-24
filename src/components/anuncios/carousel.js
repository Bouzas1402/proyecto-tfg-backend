import {CarouselItem, CarouselCaption} from "reactstrap";

function CarouselAnuncio({foto}) {
  console.log(foto);
  return (
    <CarouselItem onExited={function noRefCheck() {}} onExiting={function noRefCheck() {}}>
      <img alt={foto.altText} src={foto.url}></img>
      <CarouselCaption captionHeader={foto.altText} captionText={foto.altText} />
    </CarouselItem>
  );
}
export {CarouselAnuncio};
