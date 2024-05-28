import React from 'react';

const ProductPage = ({ location }) => {
  // Retrieve product from localStorage if available
  const storedProduct = JSON.parse(localStorage.getItem('currentProduct'));

  // Use the product from localStorage if available, otherwise use the one from props
  const product = storedProduct || (location && location.state && location.state.product);

  // Check if product is defined before accessing its properties
  if (!product) {
    return <div>Loading...</div>; // Or handle the case where product is undefined
  }

  return (
    <div className="p-3 max-w-7xl m-auto">
      <div className="mt-6 sm:mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
          {/* Product Image */}
          <div className="overflow-hidden rounded-xl">
            <img
              src={product.image}
              alt={product.title}
              className="w-full"
            />
          </div>
          {/* Product Details */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Product Title */}
              <h1 className="text-3xl text-red-500 font-semibold sm:text-4xl">
                {product.title}
              </h1>
              {/* Product Description */}
              <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                {product.description}
              </p>
              {/* Star Ratings */}
              {/* Assuming you want to keep the placeholder for ratings */}
              {/* Product Price */}
              <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                {`$${product.price}`}
              </span>
            </div>
            {/* Quantity Input and Order Button */}
            <div className=" ">
              <div className="text-left flex flex-col gap-2 w-full">
                {/* Quantity Label */}
                <label className="font-semibold">Quantity</label>
                {/* Quantity Input */}
                <input
                  className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                  type="number"
                  defaultValue="1"
                  required
                />
              </div>
              {/* Order Button */}
              <div className="w-full text-left my-4">
                <button
                  className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                  title="Confirm Order"
                >
                  <span>Confirm Order</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
