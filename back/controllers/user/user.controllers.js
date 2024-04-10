const UserModel = require("../../models/users/user.model");

module.exports.getAllUsers = async (req, res) => {
  const users = await UserModel.find();
  res.status(201).json(users);
};

module.exports.getUserById = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports.updateUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          bio: req.body.bio,
        },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
