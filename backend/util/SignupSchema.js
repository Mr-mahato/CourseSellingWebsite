const z = require("zod");

 const signUpSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(5),
  });

 const LoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(5),
  });

  module.exports = {
    signUpSchema,
    LoginSchema
  }
  