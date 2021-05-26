module.exports = async (req,res)=>{

    res.render('home',{activestate: req.active});

    }
   