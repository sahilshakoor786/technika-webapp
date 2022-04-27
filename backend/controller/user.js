const User = require("../model/user");
const express = require("express");
exports.me = async (req, res, _) => {
  try {
    const user = await User.findById(req.user.id);

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

/**
 * @param {express.Request} req
 * @param {express.Response} res
 */

exports.update = async (req, res, _) => {
  try {
    const user = await User.findById(req.query.id);

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
