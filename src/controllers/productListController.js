const { productListService } = require('../services');

const getProductList = async (req, res) => {
    try {

    const { } = req.body 
    await productListService.getProductList( ); 
    return res.status(200).json({message:'Success'});
    } catch (error) {res.status (error.status || 500).json ({message: error.message})}
};

module.exports = { getProductList }