const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GSM = new Schema({
    geometry: {
        coordinates: {
            type: Array,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    },
    properties: {

        "emr_lb_systeme": {
            type: String,
        },
        "sta_nm_dpt": {
            type: String,
        },
        "adr_lb_add3": {
            type: String,
        },
        "adr_lb_add2": {
            type: String,
        },
        "adr_lb_add1": {
            type: String,
        },
        "code_insee": {
            type: String,
        },
        "nat_id": {
            type: Number,
        },
        "com_cd_insee": {
            type: String,
        },
        "id": {
            type: Number,
        },
        "date_maj": {
            type: String,
        },
        "generation": {
            type: String,
        },
        "sta_nm_anfr": {
            type: String,
        },
        "sup_id": {
            type: Number,
        },
        "adm_lb_nom": {
            type: String,
        },
        "emr_dt_service": {
            type: String,
        },
        "_id": {
            type: Number,
        },
        "coordonnees": {
            type: Array,
        },
        "adr_lb_lieu": {
            type: String,
        },
        "sup_nm_haut": {
            type: Number,
        },
        "coord": {
            type: String,
        },
        "total_de_adm_lb_nom": {
            type: String,
        },
        "en_service": {
            type: String,
        },
        "tpo_id": {
            type: Number,
        },
        "adr_nm_cp": {
            type: String,
        }
    },
    type: {
        type: String,
        required: true
    }
}, {
    collection: 'GSM'
});

GSM.index({
    geometry: "2dsphere"
});

module.exports = mongoose.model('GSM', GSM);