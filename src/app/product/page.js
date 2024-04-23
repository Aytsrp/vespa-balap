import Image from "next/image";
import Product1 from "/public/assets/product1.jpg";
import Product2 from "/public/assets/product2.jpg";

const data = [
  {
    image: Product1,
    title: "Tshirt Vespa Balap Indonesia Putih",
    desc: "Official Merchandise Vespa Balap Indonesia",
  },
  {
    image: Product2,
    title: "Mug Vespa Balap Indonesia",
    desc: "Official Merchandise Vespa Balap Indonesia",
  },
];

const Product = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-200 text-center justify-center">
        <p className="font-bold text-neutral text-4xl mb-8 uppercase">
          Merchandise Vespa Balap Indonesia
        </p>
        <div className="flex flex-row gap-x-4 text-neutral justify-center ">
          {data.map((data) => (
            <div key={data.title} className="card w-96 bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={data.image}
                  alt={data.title}
                  className="shadow-inner"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.desc}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-success text-white">Beli</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Product;
