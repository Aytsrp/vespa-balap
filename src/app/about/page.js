import Image from "next/image";
import Picture from "/public/assets/founder.jpg";

const About = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image src={Picture} alt="founder" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-neutral">
            <h1 className="text-5xl font-bold">Tentang Kami!</h1>
            <div className="py-6">
              <p className="text-xl font-bold">Sejarah</p>
              <p className="indent-8 text-justify">
                Komunitas Vespa Balap Indonesia bermula dari semangat para
                pemuda yang bersemangat di sebuah bengkel di Surakarta, Jawa
                Tengah pada tahun 1991. Awalnya hanya sekelompok kecil penggemar
                Vespa yang tertarik dengan balap dan modifikasi Vespa. Namun,
                semangat mereka yang gigih dan cinta akan kreativitas serta
                kebersamaan membawa mereka untuk membentuk sebuah komunitas yang
                kuat dan berpengaruh di dunia Vespa di Indonesia.
              </p>
            </div>
            <div className="gap-y-6">
              <p className="text-xl font-bold">Masa Kini</p>
              <p className="indent-8 text-justify">
                Dari awal berdirinya hingga masa kini, Komunitas Vespa Balap
                Indonesia telah berkembang pesat dan mencakup seluruh Indonesia.
                Mereka telah menjadi penggerak utama dalam dunia Vespa di
                Indonesia, menginspirasi ribuan orang untuk bergabung dan
                berkontribusi dalam komunitas ini. Dengan kegiatan-kegiatan yang
                beragam dan kreatif, mereka terus memperluas jangkauan dan
                pengaruhnya, tidak hanya di kalangan penggemar Vespa, tetapi
                juga di masyarakat luas.
              </p>
              <p className="indent-8 text-justify">
                Komunitas Vespa Balap Indonesia bukan hanya sekadar sebuah
                komunitas penggemar, tetapi juga menjadi wadah untuk mewujudkan
                impian, membangun persahabatan yang kokoh, dan menjaga warisan
                budaya Vespa di Indonesia tetap hidup dan berkembang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
