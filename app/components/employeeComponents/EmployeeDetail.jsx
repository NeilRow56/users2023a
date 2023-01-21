"use client";

import Image from "next/image";

const EmployeeDetail = ({ employee }) => {
  return (
    <section className="my-6 mx-8 flex gap-20">
      <div>
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={employee?.avatar}
            alt={employee?.name}
            style={{ objectFit: "cover" }}
            fill
            priority
            sizes="(max-width: 768px) 5vw,
              (max-width: 1200px) 10vw,
              3vw"
          />
        </div>
        <h1 className="text-xl font-bold">{employee?.name}</h1>
        <p className="text-sm text-stone-400">{employee?.email}</p>
      </div>
      <div className="grow">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-600">
          Recent Tweets
        </h2>
      </div>
    </section>
  );
};

export default EmployeeDetail;
