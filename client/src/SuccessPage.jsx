import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-green-600">Pago Exitoso</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">¡Tu pago se ha realizado con éxito! Gracias por tu compra.</h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            Ir al inicio
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SuccessPage;