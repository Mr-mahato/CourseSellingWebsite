const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const { generateToken } = require("../util/generateToken");
const z = require("zod");

// zod validatin for the userSchema
const signUpSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(5),
});

const signUp = (req, res) => {
  const { username, email, password } = req.body;
  const { error } = signUpSchema.safeParse({ username, email, password });
  if (error) {
    let err = JSON.parse(error.message);
    res.status(400).json({ Error: err[0].message });
    return;
  }
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) res.send("error encounter while reading the file");
    const users = JSON.parse(data);
    // const salt = bcrypt.genSaltSync(10);
    const user = users.find((user) => user.email == email);
    if (user) {
      res.status(400).json({ message: "User already exist" });
      return;
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const userObj = {
      username,
      email,
      hashedPassword,
      id: 2,
    };
    users.push(userObj);
    const token = generateToken({ username , email , id:2 });
    fs.writeFile("data.json", JSON.stringify(users), (err) => {
      if (err) res.send("error encounter");
      res.send({ message: "user created successfully", token });
    });
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const { error } = signInSchema.safeParse({ email, password });
  if (error) {
    let err = JSON.parse(error.message);
    res.status(400).json({ Error: err[0].message });
    return;
  }
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) {
      res.send('error while reading file')
    }
    const users = JSON.parse(data);
    // const salt = bcrypt.genSaltSync(10);
    const user = users.find((user) => user.email === email);
    if (!user) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    const isPasswordCorrect = bcrypt.compareSync(password, user.hashedPassword);
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
      console.log('you are here');
      res.status(400).send({ message: "password is incorrect" });
    }
    else{
      const token = generateToken({ email:user.email , username:user.username , id:user.id});
      res.status(200).json({ message: "login successfully", token });
    }
  });
};

module.exports = {
  signUp,
  login,
};
