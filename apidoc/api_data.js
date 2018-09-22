define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/create",
    "title": "Create Product",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>tags of the Product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product created\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tProductId: \"string\",\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "create",
    "name": "PostApiV1Create"
  },
  {
    "type": "post",
    "url": "/api/v1/:productId/addToCart",
    "title": "Add Product to Cart",
    "version": "0.0.1",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the Product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Added to cart\",\n\t    \"status\": 200,\n\t\t\"data\": {   _id: \"string\"\n\t\t\t\t\t\"Products\":\n\t\t\t\t\t[\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t_id: \"string\",\n\t\t\t\t\t\t\t__v: number,\n\t\t\t\t\t\t\tProductId: \"string\",\n\t\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t\t}\n\t\t\t\t\t]\n\t\t\t\t\t_v:\"string\"\n\t\t\t\t}\n\t    \t\t\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Product already present\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Product with this ID found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "create",
    "name": "PostApiV1ProductidAddtocart"
  },
  {
    "type": "post",
    "url": "/api/v1/:productId/delete",
    "title": "Product by ProductId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the Product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Deleted\",\n\t    \"status\": 200,\n\t    \"data\": []\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductidDelete"
  },
  {
    "type": "post",
    "url": "/api/v1/:productId/removeFromCart",
    "title": "Product from cart by ProductId",
    "version": "0.0.1",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the Product passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product removed from Cart\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t{\n\t\t\t\t\"Products\":[]\n\t\t\t}\n\t\t]\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Product with this id is not present in cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Cart is already Empty no product found\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "delete",
    "name": "PostApiV1ProductidRemovefromcart"
  },
  {
    "type": "put",
    "url": "/api/v1/:productId/edit",
    "title": "Edit Product by ProductId",
    "version": "0.0.1",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>productId of the Product passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>description of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the Product passed as a body parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "tags",
            "description": "<p>tags of the Product passed as a body parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product Edited\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t    ProductId: \"string\",\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Error Occured.,\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "edit",
    "name": "PutApiV1ProductidEdit"
  },
  {
    "type": "get",
    "url": "/api/v1/all",
    "title": "Get all Products",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"All Product details found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t{\n\t\t\t\t\t\tProductId: \"string\",\n\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "read",
    "name": "GetApiV1All"
  },
  {
    "type": "get",
    "url": "/api/v1/viewById/:productId",
    "title": "Get a single Product by Id",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product found\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number,\n\t\t\t\t\tProductId: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewbyidProductid"
  },
  {
    "type": "get",
    "url": "/api/v1/viewByName/:name",
    "title": "Get a single Product by name",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Product found\",\n\t    \"status\": 200,\n\t    \"data\": {\n\t    \t\t\t_id: \"string\",\n\t    \t\t\t__v: number,\n\t\t\t\t\tProductId: \"string\",\n\t\t\t\t\tname: \"string\",\n\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t}\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "read",
    "name": "GetApiV1ViewbynameName"
  },
  {
    "type": "get",
    "url": "/api/v1/viewCart",
    "title": "Get all Products in Cart",
    "version": "0.0.1",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "authToken",
            "description": "<p>The token for authentication.(Send authToken as query parameter, body parameter or as a header)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n\t    \"error\": false,\n\t    \"message\": \"Cart details found\",\n\t    \"status\": 200,\n\t    \"data\": [\n\t\t\t\t\t\n\t\t\t       {\n\t\t\t\t\t\n\t\t\t\t\t   \"Products\":\n\t\t\t\t\t     [\n\t\t\t\t\t       {\n\t\t\t\t\t\t\t\tProductId: \"string\",\n\t\t\t\t\t\t\t\tname: \"string\",\n\t\t\t\t\t\t\t\tdescription: \"string\",\n\t\t\t\t\t\t\t\tcategory: \"string\",\n\t\t\t\t\t\t\t\ttags: object(type = array),\n\t\t\t\t\t\t\t\tcreated: \"date\",\n\t\t\t\t\t\t\t\tlastModified: \"date\"\n\t\t\t\t\t        }\n\t\t\t\t\t     ]\n\t\t\t\t\t}\n\t    \t\t]\n\t    \t\n\t\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"Failed To Find Product Details in Cart\",\n\t    \"status\": 500,\n\t    \"data\": null\n\t   }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n\t    \"error\": true,\n\t    \"message\": \"No Product Found in Cart\",\n\t    \"status\": 404,\n\t    \"data\": null\n\t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/emarket.js",
    "groupTitle": "read",
    "name": "GetApiV1Viewcart"
  }
] });
