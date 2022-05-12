const User = require("./model/user");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const ses = require("./lib/ses");
dotenv.config();
const run = async () => {
  const mongooseConnection = await mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/tsc-backend"
  );

  const users = await User.find({
    $and: [
      {
        college: {
          $nin: [
            "Harcourt Butler University , Kanpur",
            "Harcourt Butler Technical University, Kanpur",
            "HBTU",
            "",
            "hbtu",
            "hbti",
            "HBTI",
          ],
        },
      },

      { college: { $not: { $regex: /harcourt/, $options: "si" } } },
      { college: { $not: { $regex: /hbtu/, $options: "si" } } },
      { college: { $not: { $regex: /butler/, $options: "si" } } },
    ],
  });

  // const users = [
  //   {
  //     email: "tejpratapsingh545@gmail.com",
  //     name: "Tejpratap singh",
  //   },
  //   {
  //     email: "contact@technika.org.in",
  //     name: "Tejpratap singh",
  //   },
  //   {
  //     email: "shubhamrana1999@gmail.com",
  //     name: "Shubham Rana",
  //   },
  // ];

  users.forEach(async (user) => {
    const emailBody = `
 
<html>
 
  <body>
    <p>Hey ${user.name},</p>
    <p>Hope you're doing well.</p>

    <p>
      It is a friendly reminder that your TSC Id is not generated yet & also
      payment is due.
    </p>

    <p>
      For smooth process, complete the payment shortly & any unsolved queries
      can be reach out at e-mail id.
    </p>

    <p>Regards, Team Technika</p>  <br />
  </body>
</html>
`;
    await ses.sendEmail(
      `${user.name}<${user.email}>`,
      "Welcome to Technika",
      emailBody
    );
    console.log(user.email, user.college);
  });
};

run();
