import Image from "next/image";
import React from "react";

const BASE_URL = "http://localhost:3000";

export default async function EmployeePage({ params }) {
  let obj = params;
  let dynamicField = "slug";

  let { [dynamicField]: value } = obj;
  let slug = value;
  const response = await fetch(`${BASE_URL}/api/employees/${slug}`);
  const data = await response.json();
  const { _id, name, avatar, email, salary, date, status } = data;

  return (
    <section className="my-6 mx-8 flex gap-20">
      <div>
        <div className="relative h-40 w-40 rounded-full">
          <Image
            src={avatar}
            alt={name}
            style={{ objectFit: "cover" }}
            fill
            priority
            sizes="(max-width: 768px) 5vw,
              (max-width: 1200px) 10vw,
              3vw"
          />
        </div>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm text-stone-400">{email}</p>
      </div>
      <div className="grow">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-600">
          Recent Tweets
        </h2>
      </div>
    </section>
  );
}
