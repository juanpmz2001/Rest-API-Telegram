import Sequelize from "sequelize";
import db from "../configuracion/db.js";

export const Asesor = db.define('asesores', {
    id_asesor: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_asesor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefono_asesor: {
        type: Sequelize.BIGINT,
        allowNull: false,
        validate: {min: 3000000000, max: 39999999999}
    },
    telegram_id: {
        type: Sequelize.BIGINT,
        allowNull: false
    }
})