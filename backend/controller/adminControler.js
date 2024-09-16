const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { generateToken } = require("../util/generateToken");
const z = require("zod");

const { userModal } = require("../modal/userModal");
// zod validatin for the userSchema
const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

const signUp = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // zod validation
    console.log(req.body)
    const { error } = signUpSchema.safeParse({ username, email, password });
    if (error) {
      let err = JSON.parse(error.message);
      res.status(400).json({ Error: err });
      return;
    }
    const userExist = await userModal.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "User already exist" });
      return;
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = {
      username,
      email,
      password: hashedPassword,
    };

    const user = new userModal(newUser);
    const savedUser = await user.save();
    console.log(savedUser);
    if (savedUser) {
      const token = generateToken({ id: savedUser._id });
      res.status(201).json({ message: "user created successfully", token });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { error } = LoginSchema.safeParse({ email, password });
    if (error) {
      let err = JSON.parse(error.message);
      res.status(400).json({ Error: err[0].message });
      return;
    }

    const user = await userModal.findOne({ email });

    if (user && (await bcrypt.compareSync(password, user.password))) {
      const token = generateToken({ id: user._id });
      res.status(200).json({ message: "login successfully", token , status:"success" , user:{username:user.username , email:user.email}});
    } else {
      res
        .status(500)
        .send("user authentication failed , check your mail and password");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  signUp,
  login,
};
