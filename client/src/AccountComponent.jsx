
function AccountComponent() {

  const handleChangePassword = () => {
    // Implementar la lógica para cambiar la contraseña
  };

  const handleViewPurchaseHistory = () => {
    // Implementar la lógica para ver el historial de compras
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="mb-4 text-2xl font-bold text-gray-700">Perfil de Persona</h1>
      <button 
        onClick={handleChangePassword} 
        className="mb-2 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
      >
        Cambiar contraseña
      </button>
      <button 
        onClick={handleViewPurchaseHistory} 
        className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-700"
      >
        Ver historial de compras
      </button>
    </div>
  );
}

export default AccountComponent;