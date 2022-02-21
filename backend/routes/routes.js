const  express =  require('express')
const { authUser,
    registerUser,
    updateUserProfile} = require("../controllers/userController.js")
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/signup").post(registerUser);
router.post("/login", authUser);
router.route("/profile").post(protect, updateUserProfile);

module.exports= router;