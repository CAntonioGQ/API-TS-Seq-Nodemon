import { DataTypes } from "sequelize";
import db from "../db/connection";


const Usuario = db.define('Usuario', {
    nombreCliente: {
        type: DataTypes.STRING
    },
    monto: {
        type: DataTypes.STRING
    },
    plazo: {
        type: DataTypes.STRING
    },
    estado: {
        type: DataTypes.BOOLEAN
    },

})

export default Usuario