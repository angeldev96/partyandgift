
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

import {
  ArchiveBoxIcon,
  PencilSquareIcon,
  TrashIcon,
} from '@heroicons/react/20/solid';
const Arrangement = () => {
  const [arrangements, setArrangements] = useState([]);
  const navigate = useNavigate(); // Inicializar useNavigate
  const [currentPage, setCurrentPage] = useState(1);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const fetchArrangements = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/arrangement_list?page=${currentPage}`);
        setArrangements(response.data);
      } catch (error) {
        console.error('Error al obtener la lista de arreglos:', error);
      }
    };
    fetchArrangements();
  }, [currentPage]);

  const handleEdit = (arrangement) => {
    // Implementar la funcionalidad de edición
    navigate(`/arrangement_edit/${arrangement.arrangement_id}`);
  };

  const handleDelete = async (arrangement) => {
    try {
      // Mostrar mensaje de confirmación
      const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este arreglo?');

      // Si el usuario confirma la eliminación
      if (isConfirmed) {
        // Realizar la solicitud DELETE al backend para eliminar el arreglo
        await axios.delete(`${import.meta.env.VITE_API_URL}/arrangements/${arrangement.arrangement_id}`);

        // Actualizar el estado para reflejar la eliminación del arreglo
        setArrangements(arrangements.filter(item => item.arrangement_id !== arrangement.arrangement_id));

        // Mostrar una notificación de éxito
        toast.success('Arreglo eliminado exitosamente');
      }
    } catch (error) {
      console.error('Error al eliminar el arreglo:', error);
    }
  };

  const handleArchive = (arrangement) => {
    // Implementar la funcionalidad de archivado
    console.log('Archivar arreglo:', arrangement);
  };

  return (
    <>
      <ToastContainer />
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Arreglos</h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {arrangements.map((arrangement) => (
              <div key={arrangement.arrangement_id} className="group relative bg-white overflow-hidden rounded-lg shadow-md">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={arrangement.image_url}
                    alt={arrangement.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="#">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {arrangement.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{arrangement.quantity}</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{arrangement.name}</h3>
                  <p className="text-gray-500 mt-2">{arrangement.description}</p>
                  <p className="text-gray-500 mt-2">Precio: ${Number(arrangement.price).toFixed(2)}</p>
                  <p className="text-gray-500 mt-2">Cantidad disponible: {arrangement.stock}</p>
                </div>

                {/* Icon Actions */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100">
                  <button onClick={() => handleEdit(arrangement)}>
                    <PencilSquareIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                  </button>
                  <button onClick={() => handleDelete(arrangement)}>
                    <TrashIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-red-500" aria-hidden="true" />
                  </button>
                  <button onClick={() => handleArchive(arrangement)}>
                    <ArchiveBoxIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-500" aria-hidden="true" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1} className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md mr-2">Anterior</button>
            <button onClick={() => goToPage(currentPage + 1)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Siguiente</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrangement;
