let express=require("express");
let router=express.Router();
let {product,producttesting,filtered,formdata,htmlform,homedata}=require("../controllers/fxntion")

router.route("/").get(homedata);
router.route("/product").get(product);
router.route("/test").get(producttesting);
router.route("/filtered").get(filtered);

router.route("/form").get(htmlform);
router.route("/add-product").post(formdata);
module.exports=router;