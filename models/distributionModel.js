

//              ------------------------------------
//              ----------- S C H E M A ------------
//              ------------------------------------


                const mongoose = require("mongoose");

                const Schema = mongoose.Schema

                const distributionSchema = new Schema({
                    category: {
                        type: String,
                        required: true
                    },
                    batchNo:{
                        type: String,
                        required: true
                    },
                    quantity: {
                        type: Number,
                        required: true
                    },
                    locate: {
                        type: String,
                        required: true
                    },
                    distance: {
                        type: String,
                        required: true
                    },
                    duration: {
                        type: String,
                        required: true
                    },
                    driverID: {
                        type: String,
                        required: true
                    },
                    date: {
                        type: Date,
                        required: true
                    },
                    time: {
                        type: String,
                        required: true
                    }
                }, { timestamps: true })

                module.exports = mongoose.model("Distribution", distributionSchema)

