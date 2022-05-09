const AWS = require("aws-sdk");

const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY_SES_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_SES_KEY,
  region: "ap-south-1",
};

const AWS_SES = new AWS.SES(SES_CONFIG);

let sendEmail = (recipientEmail, subject, body) => {
  let params = {
    Source: "Team Technika <mail@technika.org.in>",
    Destination: {
      ToAddresses: [recipientEmail],
    },
    ReplyToAddresses: ["contact@technika.org.in"],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: body,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: subject,
      },
    },
  };
  return AWS_SES.sendEmail(params).promise();
};

module.exports = {
  sendEmail,
};
