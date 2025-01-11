import Slider from "react-slick";
import motos from "../data/motos";

function SampleArrow({ className, style, onClick }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "gray",
        height: "50px",
        width: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

function CarruselMotos() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleArrow size="50px" />,
    prevArrow: <SampleArrow size="50px" />,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "20px",
          nextArrow: <SampleArrow size="20px" />,
          prevArrow: <SampleArrow size="20px" />,
        },
      },
    ],
  };

  return (
    <div className="slider-container w-[90%]">
      <Slider
        {...settings}
        className="group md:[&:has(.card:hover)_.card:not(:hover)]:opacity-50 md:[&:has(.card:hover)_.card:not(:hover)]:scale-95 md:[&:has(.card:hover)_.card:not(:hover)]:grayscale"
      >
        {motos.map((moto) => (
          <div key={moto.id} className="px-2 py-8">
            <div
              className="card group/item flex bg-white flex-col rounded-lg overflow-hidden cursor-pointer 
                          transition-all duration-300 xl:min-h-[570px]
                          md:hover:scale-105 md:hover:z-10"
            >
              <div className="overflow-hidden h-[200px] xl:h-[300px]">
                <img
                  src={moto.imagen}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col justify-around  flex-1 items-center p-2">
                <h3>{moto.nombre}</h3>
                <p className="text-center">{moto.informacion}</p>

                <div className="">
                  <a
                    href={`/moto/${moto.slug}`}
                    className="transition-all duration-200 group-hover/item:bg-sky-600 group-hover/item:text-white text-sky-600 border-2 border-sky-600 p-2 rounded font-semibold flex gap-2"
                  >
                    MAS INFORMACIÓN
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CarruselMotos;
