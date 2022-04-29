const User = require("../model/user");
const express = require("express");
exports.me = async (req, res, _) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    res.status(200).json({
      user: {
        id: user._id,
        tscId: user.tscId,
        name: user.name,
        email: user.email,
        isHbtuStudent: user.isHbtuStudent,
        isTSCTeamMember: user.isTSCTeamMember,
        isTSCAdmin: user.isTSCAdmin,
        picture: user.picture,

        college: user.college,
        city: user.city,
        phone: user.phone,
        batch: user.batch,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

exports.update = async (req, res, _) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      res.status(400).json({ success: false, message: "User id not found" });
      return;
    }

    const user = await User.findById(userId);

    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    if (req.body.name) {
      user.name = req.body.name;
    }

    if (req.body.picture) {
      user.picture = req.body.picture;
    }

    if (req.body.college) {
      user.college = req.body.college;
    }

    if (req.body.city) {
      user.city = req.body.city;
    }

    if (req.body.phone) {
      user.phone = req.body.phone;
    }

    if (req.body.batch) {
      user.batch = req.body.batch;
    }

    if (req.body.branch) {
      user.branch = req.body.branch;
    }

    await user.save();

    res.status(200).json({
      user: {
        id: user._id,
        tscId: user.tscId,
        name: user.name,
        email: user.email,
        isHbtuStudent: user.isHbtuStudent,
        isTSCTeamMember: user.isTSCTeamMember,
        isTSCAdmin: user.isTSCAdmin,
        picture: user.picture,

        college: user.college,
        city: user.city,
        phone: user.phone,
        batch: user.batch,
        branch: user.branch,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const { S3Client, PutObjectAclCommand } = require("@aws-sdk/client-s3");
const fs = require("fs");
const AWS = require("aws-sdk");

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */
exports.upload = async (req, res, _) => {
  const userId = req.params.userId;

  if (!userId) {
    res.status(400).json({ success: false, message: "User id not found" });
    return;
  }

  if (!req.files) {
    return res.status(400).send("No files were uploaded.");
  }

  try {
    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY,
      secretAccessKey: process.env.AWS_SECRET_KEY,
    });
    const file = req.files[0];

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const uploadParams = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Body: file.buffer,
      Key: "profile/" + file.originalname,
    };

    const result = await s3.upload(uploadParams).promise();

    if (result.ETag) {
      let location = result.Location;
      location = location.replace(
        "https://tscs3bucket.s3.amazonaws.com",
        "https://d2jf5yk8vvx0ti.cloudfront.net"
      );

      const user = await User.findByIdAndUpdate(userId, {
        picture: location,
      });

      return res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        url: `https://${bucketName}.s3.${region}.amazonaws.com/${file.filename}`,
        user,
      });
    }

    return res.status(500).json({
      success: false,
      message: "File upload failed",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserByTscId = async (req, res, _) => {
  try {
    const tscId = req.params.tscId;
    if (!tscId) {
      res.status(400).json({ success: false, message: "Tsc id not found" });
      return;
    }

    const user = await User.findOne({ tscId });

    if (!user) {
      res.status(400).json({ success: false, message: "User not found" });
      return;
    }

    res.status(200).json({
      user: {
        id: user._id,
        tscId: user.tscId,
        name: user.name,
        picture: user.picture,
        college: user.college,
        city: user.city,
        batch: user.batch,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
