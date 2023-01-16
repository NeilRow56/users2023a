import User from "../models/User";
import bcrypt from "bcrypt";

//GET all users = http://localhost:3000/api/users

const getUsers = async (req, res) => {
  const usersCount = await User.countDocuments();

  try {
    const users = await User.find().select("-password").lean();

    // If no users
    if (!users?.length) {
      return res.status(400).json({ message: "No users found" });
    }

    res.status(200).json({
      success: true,
      usersCount,
      users,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { getUsers };

// get : http://localhost:3000/api/users/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await User.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User...!" });
  }
}

// // Create new User = http://localhost:3000/api/user
const newUser = async (req, res) => {
  try {
    const { name, imageUrl, email, password } = req.body;

    // Confirm data
    if (!name || !imageUrl || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check for duplicate email
    const duplicate = await User.findOne({ email }).lean().exec();

    if (duplicate) {
      return res.status(409).json({ message: "Email address already in use" });
    }

    // Hash password
    const hashedPwd = await bcrypt.hash(password, 10); // salt rounds
    const userObject = { name, imageUrl, email, password: hashedPwd };
    // const userObject = { name, imageUrl, email, password };
    // Create and store new user
    const user = await User.create(userObject);

    if (user) {
      //created
      res.status(201).json({ message: `New user ${name} created` });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Invalid user data received",
    });
  }
};

export { newUser };
