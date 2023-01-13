import { getUsers } from "../../lib/helper";
import Link from "next/link";

const Users = async () => {
  const { users } = await getUsers();

  return (
    <section className="fixed h-full w-1/4 bg-stone-800">
      <div className="center py-4">
        <h2 className="mb-4 px-6 text-xl font-medium text-white">Users</h2>
        <ul className="flex flex-col px-6 text-sm text-white">
          {users?.map((user) => (
            <li key={user._id}>
              <Link href={`/users/${user._id}`}>
                {user.name}
                {user.email}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Users;
