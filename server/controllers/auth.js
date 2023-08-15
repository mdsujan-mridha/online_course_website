const { hashPassword } = require("../utils/auth");
const User = require("../model/userModel");
exports.register = async (req, res, next) => {
     try {
          const { name, email, password } = req.body;
          //validation 
          if (!name) {
               return res.status(400).send("Name is required");
          }
          if (!name || password.length < 6) {
               return res.status(400).send("Password is required and should be 6 digit long");
          }
          let userExist = await User.findOne({ email }).exec();
          if (userExist) return res.status(400).send("Email is taken");
          // save hash password
          const hashedPassword = await hashPassword(password);

          const user = new User({
               name,
               email,
               password: hashedPassword,
          });
         await user.save();

          console.log("Saved user");
          return res.json({ success: true });

     } catch (err) {
          console.log(err);
          return res.status(400).send("Error,Try again")
     }
}

