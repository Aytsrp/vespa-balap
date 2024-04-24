import Image from "next/image";
import Background from "/public/assets/hero_background.jpg";
import Logo from "/public/assets/white_logo.png";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url(${Background.src})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="flex justify-center items-center pb-8">
            <Image src={Logo} alt="Logo Vespa Balap Indonesia"/>
          </div>
          <p className="mb-5 font-bold italic">
            &ldquo; Merayakan Solidaritas, Kreativitas, dan Persaudaraan di Jalanan Indonesia. &rdquo;
          </p>
          <p className="font-bold">est 1991</p>
        </div>
      </div>
    </div>
  )
}
export default Hero
