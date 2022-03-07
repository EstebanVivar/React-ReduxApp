import React from 'react';

const EditProduct = () => {
    return (
        <div className="flex justify-center">
            <div className="w-10/12 md:w-8/12 xl:w-7/12 bg-white dark:bg-slate-800/50 dark:text-white rounded-xl sm:rounded-xl lg:rounded-xl shadow-lg m-4 p-4">
                <h2 className='text-4xl font-extrabold text-center m-2'>Edit product</h2>
                <form className='px-8'>
                    <div className='my-5'>
                        <h2 className="font-semibold text-xl text-slate-900 dark:text-white m-2  ">Product</h2>
                        <input type="text" placeholder="Product name" name="product_name" class="focus:ring-2 focus:ring-blue-500 m-2 focus:outline-none w-full h-14 text-xl leading-10 dark:text-white text-slate-900 placeholder-slate-400 rounded-md  p-3 ring-2 dark:bg-slate-800 ring-slate-200 shadow-md" />
                    </div>
                    <div className='my-5'>
                        <h2 className="font-semibold text-xl text-slate-900 dark:text-white m-2 ">Price</h2>
                        <input type="number" placeholder="Product price" name="product_price" class="focus:ring-2 focus:ring-blue-500 m-2 focus:outline-none w-full h-14 text-xl leading-10 dark:text-white text-slate-900 placeholder-slate-400 rounded-md  p-3  ring-2 dark:bg-slate-800 ring-slate-200 shadow-md" />
                    </div>
                    <div className="">
                        <button className='bg-yellow-500 w-full font-extrabold text-2xl  mx-2 mt-4 p-4 text-white rounded'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditProduct;