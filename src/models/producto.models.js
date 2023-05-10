const {model,Schema} = require ('mongoose')


const dulceSchema = new Schema({
    noSerie:{
        require:true,
        unique:true,
        type:String
    },
    marca:String,
    precio:String,
    sabores:String,
    codigoBarra:Number,
    existencias:Number,
    precioVenta:Number
    
},
{
    versionKey:false,
    timestamps:true
}
)


module.exports = model('dulce',dulceSchema)