let productdata=require("../model/schema.js");
const path = require("path");

let product= async(req,res)=>{
    let {sort,page,limitdata}=req.query;
    let dt=productdata.find({});
    if(sort){
        let sortfix=sort;
        dt= dt.sort(sortfix);

    }
    if(page){  // this is for pagination
        page=Number(page) || 1 ;
        limitdata=Number(limitdata) || 3;
        let skipdata=(page-1)*limitdata;
        dt=dt.skip(skipdata).limit(limitdata)
    }
    
    const mydata= await dt;
    
    res.status(200).json({mydata})
}

let producttesting= async(req,res)=>{
    let filterdata=req.query;
    const mydata= await productdata.find(filterdata).sort("-price");
    //res.status(200).json({"msg":"this is producttesting data"})
    res.status(200).json({mydata})
}

let filtered= async(req,res)=>{

    let {company,name,sort,select}=req.query;
    let filterobj={};
    if(name){
       // filterobj.name=name;
       filterobj.name={$regex: name, $options:"i"}
    }
    if(company){
        filterobj.company=company;

    }

    let finddt=productdata.find(filterobj);

    if(sort){
        finddt=finddt.sort(sort);
         
    }
    if(select){
       // let selectfix=select.replace(","," ");
       // above is only for 2 item seletion but below is more than 2
        let selectfix=select.split(",").join(" ");
        finddt=finddt.select(selectfix);
    }
   

    const mydata= await finddt;
    
    res.status(200).json({mydata})
}

const formdata = async (req, res) => {
    try {

        let { name, price, company } = req.body;

        let formDataObj = {
            name,
            price,
            company
        };

        let formdt = await productdata.insertMany([formDataObj]);

        // res.status(200).json({
        //     success: true,
        //     data: formdt
        // });
        res.sendFile(path.join(__dirname, "../public/success-add.html"));

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false });
    }
};

let htmlform = (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));

};

let homedata=async (req,res)=>{
     res.sendFile(path.join(__dirname, "../public/routes-info.html"));
}

module.exports={product,producttesting,filtered,formdata,htmlform,homedata}