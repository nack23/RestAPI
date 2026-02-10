let express=require("express");
let router=express.Router();
let {product,producttesting,filtered}=require("../controllers/fxntion")

router.route("/").get(product);
router.route("/test").get(producttesting);
router.route("/filtered").get(filtered);
module.exports=router;