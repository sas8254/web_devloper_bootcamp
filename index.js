const bcrypt = require("bcrypt");

// const hashPassword = async (pw) => {
//   const salt = await bcrypt.genSalt(12);
//   const hash = await bcrypt.hash(pw, salt);
//   console.log(salt);
//   console.log(hash);
// };

const hashPassword = async (pw) => {
  const hash = await bcrypt.hash(pw, 12);
  console.log(hash);
};

const login = async (pw, hashedPassword) => {
  const result = await bcrypt.compare(pw, hashedPassword);
  if (result) {
    console.log("login sucessfully");
  } else {
    console.log("incorrect password");
  }
};

// hashPassword("monkey");
login("monkey", "$2b$12$HBim9ltFZuz1p6j8e6U8R.UcrFslKNxlD6Wdg6TLpY1eB0Oom5u66");
