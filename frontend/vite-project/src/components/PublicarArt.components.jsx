import React, { useState } from 'react';
import { FaEdit, FaTrash, FaShoppingBag } from 'react-icons/fa';
import { Footer } from './Footer.components';

const Categories = () => {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <>
            <div className="bg-gray-100 min-h-screen">
                <header>
                    <div className="container mx-auto px-6 py-3 bg-indigo-900">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <svg
                                    className="h-5 w-5 text-gray-400"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <span className="text-sm">Formosa, Argentina.</span>
                            </div>
                            <div className="flex items-center flex-grow justify-center text-2xl font-semibold space-x-2">
                                <FaShoppingBag />
                                <span>FormosaEmprende</span>
                                <FaShoppingBag />
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                        <svg
                                            className="h-5 w-5 text-gray-400"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                    <input
                                        className="w-full border rounded-md pl-10 pr-4 py-2 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Buscador"
                                    />
                                </div>
                                <button
                                    onClick={() => setCartOpen(!cartOpen)}
                                    className="text-gray-300 hover:text-white focus:outline-none"
                                >
                                    <svg
                                        className="h-5 w-5"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <nav className="mt-4">
                            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
                                <a
                                    className="text-white hover:underline sm:mx-3 sm:my-0 my-3"
                                    href="/noticias"
                                >
                                    Noticias
                                </a>
                                <a
                                    className="text-white hover:underline sm:mx-3 sm:my-0 my-3"
                                    href="/publicar"
                                >
                                    Publicar
                                </a>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Title */}
                <div className="header my-3 h-12 px-10 flex items-center justify-between">
                    <h1 className="font-medium text-2xl">Publicar Productos!</h1>
                </div>

                <div className="flex flex-col mx-3 mt-6 lg:flex-row">
                    {/* Form Section */}
                    <div className="w-full lg:w-1/3 m-1">
                        <form className="w-full bg-white shadow-md p-6">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-full px-3 mb-6">
                                    <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="category_name">
                                        Nombre del Producto
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                                        type="text"
                                        name="name"
                                        placeholder="Nombre del Producto"
                                        required
                                    />
                                </div>
                                <div className="w-full px-3 mb-6">
                                    <textarea
                                        rows="4"
                                        className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
                                        type="text"
                                        name="description"
                                        placeholder="Descripción del Producto"
                                        required
                                    />
                                </div>
                                <div className="w-full md:w-full px-3 mb-6">
                                    <button
                                        type="submit"
                                        className="appearance-none block w-full bg-indigo-900 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-indigo-600 focus:outline-none focus:bg-white focus:border-gray-500"
                                    >
                                        Publicar
                                    </button>
                                </div>
                                <div className="w-full px-3 mb-8">
                            <label className="mx-auto cursor-pointer flex w-full max-w-lg flex-col items-center justify-center rounded-xl border-2 border-dashed border-indigo-400 bg-white p-6 text-center" htmlFor="dropzone-file">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>

                            <h2 className="mt-4 text-xl font-medium text-gray-700 tracking-wide">Subir imagen</h2>

                            <p className="mt-2 text-gray-500 tracking-wide">Upload or drag & drop your file SVG, PNG, JPG or GIF. </p>

                            <input id="dropzone-file" type="file" className="hidden" name="category_image" accept="image/png, image/jpeg, image/webp"/>
                            </label>
                        </div>
                            </div>
                        </form>
                    </div>

                    {/* List Section */}
                    <div className="w-full lg:w-2/3 lg:ml-1">
                        <div className="overflow-hidden border border-gray-300 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Nombre
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Descripcipión
                                        </th>
                                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Sample Category
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Lorem ipsum dolor sit amet.
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-blue-600 hover:text-blue-900">
                                                <FaEdit />
                                            </button>
                                            <button className="text-red-600 hover:text-red-900 ml-4">
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                    {/* Repite las filas según sea necesario */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Categories;
