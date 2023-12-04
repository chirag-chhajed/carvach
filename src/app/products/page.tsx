import Display from "@/components/Display";

const ProductsPage = async () => {
  const fetchingProducts = async () => {
    "use server";
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const products = await res.json();
    return products;
  };
  const { products } = await fetchingProducts();
  return (
    <>
      <h1 className="py-2 font-mono text-4xl font-bold text-center">
        Products
      </h1>
      <Display passed_products={products} />
    </>
  );
};

export default ProductsPage;
