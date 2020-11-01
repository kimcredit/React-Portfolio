const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        default: ""
    },
    repo: {
        type: String,
        default: "",
        unique: true
    },
    deployed: {
        type: String,
        default: "",
        unique: true
    }
})

const project = mongoose.model("Project", projectSchema);

module.exports = project;