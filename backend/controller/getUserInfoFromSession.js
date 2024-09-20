const getUserInfoFromSession = async (req, res) => {
  try {
    if (req.session.user) {
      res.status(202).json({
        message: "Successfully retrieved the user info from session",
        user: req.session.user
      });
    } else {
      res.status(401).json({ message: "No user info found in session" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getUserInfoFromSession,
};