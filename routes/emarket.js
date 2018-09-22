const express = require('express')
const controller = require('../controller/eMarket')
const appConfig = require('../config/appConfig')
const auth = require('../middlewares/auth')

let setRouter = (app)=>{

    let baseUrl = appConfig.apiVersion;

    app.get(baseUrl+'/all',auth.isAuthenticated,controller.getAllProduct)

	/**
	 * @api {get} /api/v1/all Get all Products
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "All Product details found",
	    "status": 200,
	    "data": [
					{
						ProductId: "string",
						name: "string",
						description: "string",
						category: "string",
						tags: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */



	app.get(baseUrl+'/viewById/:productId',auth.isAuthenticated,controller.viewProductById)
	

	 /**
	 * @api {get} /api/v1/viewById/:productId Get a single Product by Id
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId The productId should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product found",
	    "status": 200,
	    "data": {
	    			_id: "string",
	    			__v: number,
					ProductId: "string",
					name: "string",
					description: "string",
					category: "string",
					tags: object(type = array),
					created: "date",
					lastModified: "date"
				}
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */

	app.get(baseUrl+'/viewByName/:name',auth.isAuthenticated,controller.viewProductByName)
	
 /**
	 * @api {get} /api/v1/viewByName/:name Get a single Product by name
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} name The name should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product found",
	    "status": 200,
	    "data": {
	    			_id: "string",
	    			__v: number,
					ProductId: "string",
					name: "string",
					description: "string",
					category: "string",
					tags: object(type = array),
					created: "date",
					lastModified: "date"
				}
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details",
	    "status": 500,
	    "data": null
	   }
	 */

	app.post(baseUrl+'/create',auth.isAuthenticated,controller.createProduct)
	
	  /**
	 * @api {post} /api/v1/create Create Product
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} name name of the Product passed as a body parameter
	 * @apiParam {String} description description of the Product passed as a body parameter
	 * @apiParam {String} category category of the Product passed as a body parameter
	 * @apiParam {String[]} tags tags of the Product passed as a body parameter
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product created",
	    "status": 200,
	    "data": [
					{
						ProductId: "string",
						name: "string",
						description: "string",
						category: "string",
						tags: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured",
	    "status": 500,
	    "data": null
	   }
	 */

	app.put(baseUrl+'/:productId/edit',auth.isAuthenticated,controller.editProduct)
	
	  /**
	 * @api {put} /api/v1/:productId/edit Edit Product by ProductId
	 * @apiVersion 0.0.1
	 * @apiGroup edit
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the Product passed as the URL parameter
	 * @apiParam {String} name name of the Product passed as a body parameter
	 * @apiParam {String} description description of the Product passed as a body parameter
	 * @apiParam {String} category category of the Product passed as a body parameter
	 * @apiParam {String[]} tags tags of the Product passed as a body parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Edited",
	    "status": 200,
	    "data": [
					{
					    ProductId: "string",
						name: "string",
						description: "string",
						category: "string",
						tags: object(type = array),
						created: "date",
						lastModified: "date"
					}
	    		]
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


	app.post(baseUrl+'/:productId/delete',auth.isAuthenticated,controller.deleteProduct)


 /**
	 * @api {post} /api/v1/:productId/delete Product by ProductId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the Product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Deleted",
	    "status": 200,
	    "data": []
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */


	app.get(baseUrl+'/viewCart',auth.isAuthenticated,controller.viewCart)
	
	/**
	 * @api {get} /api/v1/viewCart Get all Products in Cart
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Cart details found",
	    "status": 200,
	    "data": [
					
			       {
					
					   "Products":
					     [
					       {
								ProductId: "string",
								name: "string",
								description: "string",
								category: "string",
								tags: object(type = array),
								created: "date",
								lastModified: "date"
					        }
					     ]
					}
	    		]
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Failed To Find Product Details in Cart",
	    "status": 500,
	    "data": null
	   }


	 @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No Product Found in Cart",
	    "status": 404,
	    "data": null
	   }

	   
	 */

	app.post(baseUrl+'/:productId/addToCart',auth.isAuthenticated,controller.addToCart)
	
/**
	 * @api {post} /api/v1/:productId/addToCart Add Product to Cart
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the Product passed as the URL parameter
	 * 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product Added to cart",
	    "status": 200,
		"data": {   _id: "string"
					"Products":
					[
						{
							_id: "string",
							__v: number,
							ProductId: "string",
							name: "string",
							description: "string",
							category: "string",
							tags: object(type = array),
							created: "date",
							lastModified: "date"
						}
					]
					_v:"string"
				}
	    		
	    	
		}
	
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Product already present",
	    "status": 500,
	    "data": null
	   }

	    @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "No Product with this ID found",
	    "status": 404,
	    "data": null
	   }
	 */



    app.post(baseUrl+'/:productId/removeFromCart',auth.isAuthenticated,controller.removeFromCart)

 /**
	 * @api {post} /api/v1/:productId/removeFromCart Product from cart by ProductId
	 * @apiVersion 0.0.1
	 * @apiGroup delete
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} productId productId of the Product passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Product removed from Cart",
	    "status": 200,
	    "data": [
			{
				"Products":[]
			}
		]
	    	
		}
	
	 @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Product with this id is not present in cart",
	    "status": 500,
	    "data": null
	   }

	    @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Cart is already Empty no product found",
	    "status": 404,
	    "data": null
	   }
	 */

}

module.exports ={

    setRouter:setRouter
}