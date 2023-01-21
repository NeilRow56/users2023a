/* eslint-disable @next/next/no-img-element */
import React from "react";

const BASE_URL = "http://localhost:3000";

// Staic site generation by default
// revalidate this page every 10 seconds, since the getData's fetch
// request has `revalidate: 10`.
async function fetchSpeakers() {
  const response = await fetch(`${BASE_URL}/api/employees`);

  const data = await response.json();
  return data;
}

export default async function SpeakerPage() {
  const data = await fetchSpeakers();
  return (
    <div className="container bg-pink-100 text-center">
      <div className="w-full bg-blue-50">
        LastRendered: {new Date().toLocaleTimeString()}
      </div>
      <h1>Speakers</h1>
      {data.employees.map(
        ({ _id, name, avatar, email, salary, date, status }) => (
          <div key={_id} className="flex w-full flex-row gap-10 ">
            <h3>{name}</h3>
            <div>
              <img
                src={avatar || "https://randomuser.me/api/portraits/men/5.jpg"}
                alt=""
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </div>
            <h3>{email}</h3>
            <h3>{salary}</h3>
            <h3>{date}</h3>
            <h3>{status}</h3>
          </div>
        )
      )}
    </div>
  );
}
