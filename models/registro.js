
const {Schema, model} = require('mongoose');

const RegistroSchema = Schema({

    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    disponible : {
        type: Boolean,
        default: true,
    },
    producto: {
        type: Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    }
})


RegistroSchema.methods.toJSON = function() {
    const {__v, estado, ...data} = this.toObject();
    return data;
}



module.exports = model('Registro' , RegistroSchema)