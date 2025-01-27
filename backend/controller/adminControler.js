const bcrypt = require("bcrypt");
const { generateToken } = require("../util/generateToken");
const { signUpSchema , LoginSchema } = require( "../util/SignupSchema"); 
const { userModal } = require("../modal/userModal");
// zod validatin for the userSchema


// SIGNUP
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

// LOGIN
const login = async (req, res) => {
  
  try {
    const { email, password } = req.body;
    const { error } = LoginSchema.safeParse({ email, password });
    if (error) {
      let err = JSON.parse(error.message);
      res.status(400).json({ Error: err[0].message });
    }

    const user = await userModal.findOne({ email });

    if (user && (await bcrypt.compareSync(password, user.password))) {

      // user found save in express session
      const userSave = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
      }
      const token = generateToken({ id: user._id });
      console.log(token);
      // token storing in HTTPonly Cookie
      res.cookie("jwtToken", token, {
        httpOnly: true,
        secure: false,
        sameSite:"Lax"
      });

      res.status(202).json({ message: "login successfully" , status:"success" , user:userSave});
    } else {
      res
        .status(403)
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
