import React from "react";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center w-screen h-screen bg-gray-100">
            <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold text-emerald-400 text-[150px] font-Rick">404</h1>
                    <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                        <span className="text-emerald-400">Oops!</span> Página no encontrada
                    </h6>
                    <p className="mb-8 text-center text-gray-500 md:text-lg">
                        La página que estás buscando no existe o ha sido movida.
                    </p>
                    <a href="/" className="px-6 py-2 text-sm font-semibold text-white bg-emerald-500 rounded-md">
                        Volver al inicio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
