const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

//all projects 
router.route('/')
    .get(projectsController.findAll)
    .post(projectsController.create);

module.exports = router;