const mongoose= require('mongoose');
const Schema= mongoose.Schema;

let ProductSchema= new Schema(
{
    ProductId: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        default: '',
        required:true,
        
    },
    description: {
        type: String,
        default: ''
    },
   
    category: {
        type: String,
        default: ''
    },
    tags: [],

    created: {
        type: Date,
        default: Date.now
    }, 

    lastModified: {
        type: Date,
        default: Date.now
    }
}
)

let cartSchema = new Schema({

    Products:{

        type:[ProductSchema]
    }

})

mongoose.model('Product',ProductSchema)
mongoose.model('Cart',cartSchema)