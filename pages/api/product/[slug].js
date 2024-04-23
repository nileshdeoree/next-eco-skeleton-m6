
import Product from '../../../models/Product'
import connectDb from '../../../middleware/mongoose'

const handler = async(req, res)=> {

    const {slug} = req.query;

    try {
        let p = await Product.findOne({slug})
        res.json(p)
    } catch (error) {
        res.json({message: "inside catch"})
    }
}

export default connectDb(handler)