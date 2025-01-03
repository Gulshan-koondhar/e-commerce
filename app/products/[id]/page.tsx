import Image from "next/image";

interface IParams {
  params: {
    id: number;
  };
}

const ProductDetails = async ({ params }: IParams) => {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await res.json();

  if (!product) {
    return <h1>Product Not Found</h1>;
  }
  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <div className="flex gap-8 flex-col items-center md:flex-row md:items-start max-w-screen-lg mx-auto">
        <div className="sm:w-1/3 w-full flex items-center justify-center">
          <Image
            src={product?.image}
            alt="Product Image"
            width={300}
            height={400}
            className=" object-contain rounded-md"
          />
        </div>
        <div className="flex flex-col gap-8 sm:w-2/3 w-full">
          <div>
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="text-orange-500 text-xl">{product.description}</p>
          </div>
          <div className="bg-slate-300 h-[2px]" />
          <p className="font-bold text-lg">$ {product.price}</p>
          <div className="bg-slate-200 h-[2px]"></div>
          <div className="font-medium text-lg space-x-4 border w-max px-3 rounded-full flex justify-center items-center">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <button className="bg-green-700 w-max px-4 py-2 rounded-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
