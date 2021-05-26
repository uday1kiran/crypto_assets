module.exports = async (req,res)=>{

    res.render('services',{activestate: req.active});

    }
   