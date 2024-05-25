const { Router } = require("express");

const controllers = require("../controllers/todo");

const router = Router();

router.route("/tasks").get(controllers.getTodos).post(controllers.Addtodo);

router
  .route("/tasks/:id")
  .get(controllers.getTodoById)
  .put(controllers.updateTask)
  .delete(controllers.deleteTodo);

module.exports = router;
