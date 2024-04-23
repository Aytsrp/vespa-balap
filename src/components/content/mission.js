import {
  MdHandshake,
  MdVolunteerActivism,
  MdOutlinePeople,
  MdPedalBike,
} from "react-icons/md";

const data = [
  {
    icon: MdHandshake,
    title: "Solidaritas",
    desc: "Membantu jaringan yang kuat di antara anggota komunitas untuk mendukung satu sama lain baik dalam kegiatan sehari-hari maupun dalam situasi darurat.",
  },
  {
    icon: MdVolunteerActivism,
    title: "Saling Membantu",
    desc: "Menyediakan platform bagi anggota untuk berbagi pengetahuan, keterampilan, dan sumber daya dalam perawatan dan pemeliharaan Vespa.",
  },
  {
    icon: MdPedalBike,
    title: "Hobi Modifikasi",
    desc: "Mendorong inovasi dan kreativitas melalui workshop modifikasi Vespa yang memungkinkan anggota untuk mengekspresikan gaya unik mereka.",
  },
  {
    icon: MdOutlinePeople,
    title: "Kebersamaan",
    desc: "Menyelenggarakan acara dan pertemuan reguler yang memperkuat ikatan komunitas dan mempromosikan keberagaman di dalamnya.",
  },
];

const Mission = () => {
  return (
    <>
      <div className="w-full bg-base-200 py-8 text-neutral">
        <div className="mx-auto max-w-7xl px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-5xl font-bold uppercase">Misi</h1>
          </div>
          <div className="mx-auto max-w-2xl xl:max-w-7xl">
            <dl className="grid mx-auto max-w-5xl grid-cols-2 gap-x-8 xl:grid-cols-4 xl:gap-y-1">
              {data.map((data) => (
                <div key={data.title} className="relative pt-8 text-center">
                  <dt className="text-base font-semibold leading-7">
                    <div className="p-2 mb-3 left-0 right-0 top-0 bottom-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-neutral m-auto">
                      <data.icon className="w-full h-full text-white" />
                    </div>
                    {data.title}
                  </dt>
                  <dd className="mt-1 leading-7 text-sm ">{data.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};
export default Mission;
