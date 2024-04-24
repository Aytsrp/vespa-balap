import Image from "next/image";
import Picture1 from "/public/assets/pic1.jpg";
import Picture2 from "/public/assets/pic2.jpeg";
import Picture3 from "/public/assets/pic3.jpg";

const data = [
  {
    picture: Picture1,
    name: "Rafi Adam Maskumambang",
    comment: "Saya sangat terkesan dengan solidaritas di Komunitas Vespa Balap Indonesia. mengalami masalah di perjalanan touring kemarin, tidak kurang dari lima anggota komunitas segera menawarkan bantuan mereka. Mereka tidak hanya membantu memperbaiki masalah tersebut, tetapi juga memberikan semangat dan dukungan. Ini adalah contoh nyata bagaimana solidaritas dalam komunitas bisa membantu satu sama lain. GOKIL!",
  },
  {
    picture: Picture2,
    name: "Axela The Scene Police",
    comment: "Saya baru saja mengikuti event balap Vespa yang mereka selenggarakan di sirkuit terkenal, dan pengalaman tersebut luar biasa. Tidak hanya balapan yang seru, tetapi juga suasana kebersamaan yang terasa di setiap sudut. Semua peserta, baik yang sudah berpengalaman maupun pemula, mendapat dukungan penuh dari sesama peserta dan penonton.",
  },
  {
    picture: Picture3,
    name: "Hendra Sugarglider",
    comment: "Saya baru join ke Komunitas Vespa Balap Indonesia dan disambut dengan hangat oleh para anggota yang sudah lebih berpengalaman. Mereka dengan sabar mengajari saya tentang Vespa dan bagaimana cara merawatnya dengan baik. Saya merasa seperti mendapat keluarga baru yang sangat peduli. Terima kasih kepada semua yang telah membuat saya merasa begitu diterima dan dihargai di komunitas ini!",
  },
];

const Review = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen gap-y-4 bg-base-200 p-20 text-neutral justify-center items-center">
      <p className="font-bold text-neutral text-4xl mb-8 uppercase">Testimoni Member Vespa Balap Indonesia</p>
        {data.map((data) => (
          <div key={data.name} className="card w-full card-side bg-base-100 shadow-xl">
            <figure>
              <Image src={data.picture} alt={data.name} width={180} height={180}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.name}</h2>
                <p className="max-w-3xl overflow-hidden">&ldquo;{data.comment}&rdquo;</p>
              <div className="card-actions justify-end">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Review;
