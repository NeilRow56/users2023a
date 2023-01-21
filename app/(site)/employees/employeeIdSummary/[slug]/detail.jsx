import Image from "next/image";

const Detail = ({ employee }) => {
  return (
    <section className="m-4 py-4">
      <div className="center">
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={employee?.avatar}
            alt={employee?.name}
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div>
          <h1 className="text-xl font-bold">{employee?.name}</h1>
          <p className="text-sm text-stone-400">{employee?.slug}</p>
        </div>
      </div>
    </section>
  );
};

export default Detail;
