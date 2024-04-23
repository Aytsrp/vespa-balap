import Image from "next/image";
import Picture from "/public/assets/gallery.png";


const Gallery = () => {
  return (
    <>
     <div className="flex flex-col min-h-screen bg-base-200 justify-center items-center p-8">
      <p className="font-bold text-neutral text-4xl mb-8 uppercase">Galeri Vespa Balap Indonesia</p>
        <Image src={Picture} className="w-full" alt="Gallery"/>
     </div>
    </>
  );
};
export default Gallery;
