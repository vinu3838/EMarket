const express= require('express');
const mongoose= require('mongoose');
const shortid = require('shortid');
const response = require('../libs/responseLibs')
const check = require('../libs/checkLib')
const logger = require('../libs/loggerLib')
const ProductModel= mongoose.model('Product');
const CartModel= mongoose.model('Cart');

let getAllProduct=(req, res)=>
{
ProductModel.find()
.lean()
.select('-__v -_id')
.exec((err,result)=>{

    if(err){
        logger.error(err,'Database',10)
        let apiResponse = response.generate(true, 'Failed To Find Product Details', 500, null)
        res.send(apiResponse)
       
    }
    else if(check.isEmpty(result) ){
        logger.info('No Data Found','getAllProduct',5)
        let apiResponse = response.generate(true, 'No Product Found', 404, null)
        res.send(apiResponse)
    }
    else{
        let apiResponse = response.generate(false, 'All Product details found', 200, result)
        res.send(apiResponse)
    }
})

}

let viewProductById=(req, res)=>
{
ProductModel.findOne({'ProductId':req.params.productId})
.lean()
.exec((err,result)=>{

    if(err){
        logger.error(err,'Database',10)
        let apiResponse = response.generate(true, 'Failed To Find Product Details', 500, null)
        res.send(apiResponse)
    }
    else if(check.isEmpty(result)){
        logger.info('No Data Found','viewProductById',5)
        let apiResponse = response.generate(true, 'No Product Found', 404, null)
        res.send(apiResponse)
    }
    else{
        let apiResponse = response.generate(false, ' Product found', 200, result)
        res.send(apiResponse)
    }
})

}

let viewProductByName=(req, res)=>
{
ProductModel.findOne({'name':req.params.name})
.lean()
.exec((err,result)=>{

    if(err){
        logger.error(err,'Database',10)
        let apiResponse = response.generate(true, 'Failed To Find Product Details', 500, null)
        res.send(apiResponse)
    }
    else if(check.isEmpty(result)){
        logger.info('No Data Found','viewProductByName',5)
        let apiResponse = response.generate(true, 'No Product Found', 404, null)
        res.send(apiResponse)
    }
    else{
        let apiResponse = response.generate(false, ' Product found', 200, result)
        res.send(apiResponse)
    }
})

}

let createProduct=(req,res)=>{
 var today= Date.now()
 let productId = shortid.generate()

 let newProduct = new ProductModel({

    ProductId:productId,
    name: req.body.name,
    description:req.body.description,
    category:req.body.category,
    created:today,
    lastModified:today
 })
 let tags=req.body.tags
 //let tags = (req.body.tags != undefined && req.body.tags != null && req.body.tags != '') ? req.body.tags.split(',') : []
newProduct.tags=tags

newProduct.save((err, result)=>{
    if(err){
     logger.error(err,'Database',10)
     let apiResponse = response.generate(true, 'Error Occured', 500, null)
     res.send(apiResponse)
    }
    else{
        let apiResponse = response.generate(false, ' Product created', 200, result)
        res.send(apiResponse)
    }


})

}

let editProduct= (req,res)=>{

    let options = req.body;
    console.log(req.params.productId);
    ProductModel.update({ProductId:req.params.productId},options, { multi: true })
    .exec((err,result)=>{
        if(err){
            logger.error(err,'Database',10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        }
        else if(check.isEmpty(result) || result.n==0){
            logger.info('No Data Found','editProduct',5)
            let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
        }
        else{
            let apiResponse = response.generate(false, ' Product Edited', 200, result)
        res.send(apiResponse)
        }
    }
    )
}

let deleteProduct=(req,res)=>{

    ProductModel.remove({'ProductId':req.params.productId})
    .exec((err,result)=>{
        if(err){
            logger.error(err,'Database',10)
            let apiResponse = response.generate(true, 'Error Occured', 500, null)
            res.send(apiResponse)
        }
        else if(check.isEmpty(result)){
            logger.info('No Data Found','deleteProduct',5)
            let apiResponse = response.generate(true, 'No Product Found', 404, null)
                res.send(apiResponse)
        }
        else{
            let apiResponse = response.generate(false, ' Product Deleted', 200, result)
        res.send(apiResponse)
        }
    }
    )
}

let viewCart=(req,res)=>{

    CartModel.find()
.select('-__v -_id')
.lean()
.exec((err,result)=>{

    if(err){
        logger.error(err,'Database',10)
        let apiResponse = response.generate(true, 'Failed To Find Product Details in Cart', 500, null)
        res.send(apiResponse)
       
    }
    else if(check.isEmpty(result) ){
        logger.info('No Data Found','viewCart',5)
        let apiResponse = response.generate(true, 'No Product Found in Cart', 404, null)
        res.send(apiResponse)
    }
    else{
        let apiResponse = response.generate(false, 'Cart details found', 200, result)
        res.send(apiResponse)
    }
})

}

 

async function addToCart(req,res){
   const product = await ProductModel.findOne({'ProductId':req.params.productId}).lean()
   if(check.isEmpty(product) ){
    logger.info('No Product with this ID found','addToCart',5)
   let apiResponse = response.generate(true, 'No Product with this ID found', 404, null)
   res.send(apiResponse)
 }
 else{
    const cart = await CartModel.findOne()
    if(cart==null || cart == undefined || cart=='' ){
       let cartmodel = new CartModel({
        Products:product
       })

       cartmodel.save((err, result)=>{
        if(err){
         logger.error(err,'Database',10)
         let apiResponse = response.generate(true, 'Error Occured', 500, null)
         res.send(apiResponse)
        }
        else{
            let apiResponse = response.generate(false, ' Product Added to cart', 200, result)
            res.send(apiResponse)
        }  
    })
     }
     else{
        const productPresent = cart.Products.id(product._id);
        if(check.isEmpty(productPresent)){

            cart.Products.push(product)
            cart.save();
               let apiResponse = response.generate(false, ' Product Added to cart', 200, cart)
               res.send(apiResponse)
        }
        else{

            let apiResponse = response.generate(false, ' Product already present', 500, null)
            res.send(apiResponse)
        }

     }
 }
}


async function removeFromCart(req,res){
    const product = await ProductModel.findOne({'ProductId':req.params.productId}).lean()
    if(check.isEmpty(product) ){
     logger.info('No Product with this ID found','removeFromCart',5)
    let apiResponse = response.generate(true, 'No Product with this ID found', 404, null)
    res.send(apiResponse)
  }
  else{
     const cart = await CartModel.findOne()
     if(cart==null || cart == undefined || cart=='' ){
        
        let apiResponse = response.generate(true, 'Cart is already Empty no product found', 404, null)
        res.send(apiResponse)
      }
      else{
         const productPresent = cart.Products.id(product._id);
         if(check.isEmpty(productPresent)){
 
            let apiResponse = response.generate(true, 'Product with this id is not present in cart', 500, null)
        res.send(apiResponse)
         }
         else{
            productPresent.remove();
            cart.save()
             let apiResponse = response.generate(false, ' Product removed from Cart', 200, cart)
                res.send(apiResponse)
         }
 
      }
  }
 }





module.exports={

    getAllProduct:getAllProduct,
    viewProductById:viewProductById,
    viewProductByName:viewProductByName,
    createProduct:createProduct,
    editProduct:editProduct,
    deleteProduct:deleteProduct,
    viewCart:viewCart,
    addToCart:addToCart,
    removeFromCart:removeFromCart

}