import React, { Fragment } from 'react';

const Products = () => {
    return (
        <Fragment>
            <div class="flex flex-col justify-center items-center ">
                <h2 className='dark:text-white text-5xl mb-8'>
                    Products
                </h2>

                <div class="-my-2 w-3/4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="shadow overflow-hidden  sm:rounded-lg">
                            <table class="min-w-full dark:divide-gray-200 divide-gray-300 divide-y-2">
                                <thead class="dark:bg-slate-700/95 bg-gray-200">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 text-left text-xl font-medium dark:text-gray-400 text-gray-600 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xl font-medium dark:text-gray-400 text-gray-600 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" class="px-6 py-3 text-left text-xl font-medium dark:text-gray-400 text-gray-600 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="dark:bg-slate-800/50   dark:divide-slate-800/95 bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-xl font-medium dark:text-white text-gray-900">
                                                Jane Cooper
                                            </div>

                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap">
                                            <div class="text-xl dark:text-white text-gray-900">
                                                Regional Paradigm Technician
                                            </div>
                                        </td>
                                        <td class="px-6 py-4 whitespace-nowrap text-right text-xl font-medium">
                                            {/* <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a> */}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Products;