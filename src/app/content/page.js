import Mission from "@/components/content/mission";
import Vision from "@/components/content/vision";

const Content = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-base-200 text-white justify-center items-center">
        <Vision/>
        <Mission/>
      </div>
    </>
  );
};
export default Content;
