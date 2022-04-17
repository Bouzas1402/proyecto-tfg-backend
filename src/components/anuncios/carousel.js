import Slider from "react-slick";

function Carousel({fotos}) {
  var settings = {
    dots: true,
  };
  console.log(fotos[0].url);
  return (
    <div className="container">
      <Slider {...settings}>
        {fotos.map((foto) => (
          <div>
            <img src={foto.url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
export {Carousel};
