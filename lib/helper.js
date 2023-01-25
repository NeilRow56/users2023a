const BASE_URL = "http://localhost:3000";

//All users
export const getUsers = async () => {
  let res = await fetch(`${BASE_URL}/api/users`);
  return res.json();
};

//Single user
export const getUser = async (userId) => {
  let res = await fetch(`${BASE_URL}/api/users/${userId}`);
  if (res) return res.json();
  return {};
};

//Posting a new user
export async function addUser(formData) {
  try {
    const Options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    let res = await fetch(`${BASE_URL}/api/users`, Options);
    return res.json();
  } catch (error) {
    return error;
  }
}

//Update a new user
export async function updateUser(userId, formData) {
  try {
    const Options = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };

    let res = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
    return res.json();
  } catch (error) {
    return error;
  }
}

//Delete a user
export async function deleteUser(userId) {
  const Options = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  };
  let res = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  return res.json();
}
