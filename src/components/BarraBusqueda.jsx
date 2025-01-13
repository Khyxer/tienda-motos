import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const BarraBusqueda = ({ motos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [filteredMotos, setFilteredMotos] = useState([]);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setShowResults(false);
      setFilteredMotos([]);
      return;
    }

    const filtered = motos.filter(moto => 
      moto.nombre.toLowerCase().includes(value.toLowerCase())
    );
    
    setFilteredMotos(filtered);
    setShowResults(true);
  };

  const handleMotoClick = (slug) => {
    navigate(`/moto/${slug}`);
    setShowResults(false);
    setSearchTerm('');
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div className="border-2 border-gray-500 rounded-lg overflow-hidden flex items-center">
        <FaSearch className="ml-2 cursor-pointer text-gray-600 hover:text-gray-800" />
        <input
          type="text"
          className="outline-none p-1 border-none focus:ring-0 focus:outline-none"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {showResults && filteredMotos.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {filteredMotos.map((moto) => (
            <div
              key={moto.id}
              className="p-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => handleMotoClick(moto.slug)}
            >
              <img 
                src={moto.imagen} 
                alt={moto.nombre} 
                className="w-20 h-14 object-cover rounded"
              />
              <div>
                <p className="font-medium">{moto.nombre}</p>
                <p className="text-sm text-gray-600">{moto.marca}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BarraBusqueda;