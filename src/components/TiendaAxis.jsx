import React from "react";
import { Card, Modal, Rating } from "flowbite-react";
import { useState } from "react";

const productos = [
  {
    id: 1,
    nombre: "Llantas",
    descripcion:
      "Llantas de alta calidad diseñadas para ofrecerte un rendimiento excepcional en todo tipo de terreno. Con nuestra selección de llantas, tendrás una mayor durabilidad, tracción y seguridad en cada viaje. ¡No pongas en riesgo tu experiencia sobre dos ruedas, equipa tu moto con las mejores llantas!",
    imagen: "/productos/llantas.webp",
    precio: "$ 300.000",
    stock: 0,
  },
  {
    id: 2,
    nombre: "Aceite",
    descripcion:
      "Mantén tu motor en perfectas condiciones con nuestros aceites premium para motos. Diseñados para lubricar, enfriar y proteger el motor de tu moto en todo tipo de condiciones. Aumenta la vida útil de tu moto con un aceite de alto rendimiento, ideal para mantenerla como nueva.",
    imagen: "/productos/aceite.jpg",
    precio: "$ 60.000",
    stock: 90,
  },
  {
    id: 3,
    nombre: "Cascos",
    descripcion:
      "Protección y estilo en cada kilómetro. Nuestros cascos ofrecen la máxima seguridad y comodidad, con diseños modernos y tecnología avanzada. Ya sea que busques un casco integral, modular o jet, tenemos lo que necesitas para mantener tu cabeza segura mientras disfrutas de la carretera.",
    imagen: "/productos/casco.png",
    precio: "$ 250.000",
    stock: 5,
    rating: 5,
  },
  {
    id: 4,
    nombre: "Guantes",
    descripcion:
      "Los guantes perfectos para tu aventura sobre dos ruedas. Confeccionados con materiales de alta resistencia, ofrecen un ajuste cómodo y una excelente protección para tus manos. Resistencia al viento, al agua y a los impactos, todo en un solo par de guantes que te acompañarán en cada ruta.",
    imagen: "/productos/guantes.jpg",
    precio: "$ 120.000",
    stock: 20,
  },
];

const TiendaAxis = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (producto) => {
    setSelectedProduct(producto);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-16 gap-20">
        <h1 className="font-black text-3xl sm:text-5xl">
          Productos <span className="text-[#017CE1]">Axis</span>
        </h1>
        <div className="flex justify-evenly w-full xl:flex-row flex-col gap-6">
          {productos.map((producto) => (
            <Card
              key={producto.id}
              className="max-w-sm hover:scale-105 duration-200"
              imgSrc={producto.imagen}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {producto.nombre}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                {producto.descripcion}
              </p>
              <button
                onClick={() => handleOpenModal(producto)}
                className="text-blue-500 hover:text-blue-600 transition-colors mt-2"
              >
                Más información
              </button>
            </Card>
          ))}
        </div>

        {selectedProduct && (
          <Modal show={openModal} onClose={handleCloseModal} size="7xl">
            <Modal.Header>{selectedProduct.nombre}</Modal.Header>
            <Modal.Body className="">
              <div className="space-y-6 flex flex-col  md:flex-row gap-6 ">
                <div className="md:w-1/2">
                  <img
                    src={selectedProduct.imagen}
                    alt={selectedProduct.nombre}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col gap-4">
                  <p className="text-3xl font-bold">{selectedProduct.precio}</p>
                  <p className=" leading-relaxed text-gray-500 dark:text-gray-400 text-lg">
                    {selectedProduct.descripcion}
                  </p>
                  {selectedProduct.stock < 1 ? (
                    <div className="flex gap-8 flex-col">
                      <p className="text-white w-fit rounded-full px-3 text-sm py-1 bg-red-600 ">
                        Sin stock
                      </p>
                      <div className="flex items-center justify-center">
                        <button className="px-6 py-1 rounded-full cursor-no-drop text-xl bg-[#ff090983] text-white">
                          Agotado
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex gap-5 flex-col">
                      <div className="flex gap-5 items-center">
                        <p className="text-white w-fit rounded-full px-4 py-1 bg-black ">
                          En stock
                        </p>
                        <p className="font-medium ">
                          Quedan{" "}
                          <span className="text-blue-600">
                            {selectedProduct.stock}
                          </span>{" "}
                          disponibles
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <button className="px-6 py-1 rounded-full duration-200 hover:bg-white border-2 hover:text-[#0059ff] border-[#0059ffcc] text-xl bg-[#0059ff] text-white">
                          Ver en la tienda
                        </button>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col items-center gap-8 ">
                    <p className="text-3xl font-bold text-center">
                      Te puede interesar
                    </p>
                    <div className="flex items-center w-full justify-evenly">
                      {productos
                        .filter(
                          (producto) => producto.id !== selectedProduct.id
                        ) 
                        .map((producto) => (
                          <div
                            key={producto.id}
                            className="flex items-center flex-col border-2 rounded-lg p-4 gap-4 hover:scale-105 duration-200 cursor-pointer"
                            onClick={() => handleOpenModal(producto)}
                          >
                            <img
                              src={producto.imagen}
                              alt={producto.nombre}
                              className="w-16 h-16 object-cover rounded-md"
                            />
                            <div className="flex flex-col">
                              <p className="font-semibold">{producto.nombre}</p>
                              <p className="text-sm text-gray-500">
                                {producto.precio}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </>
  );
};

export default TiendaAxis;
