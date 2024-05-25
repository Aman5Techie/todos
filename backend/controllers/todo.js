const todo = require("../Database/data");
// Get todos
const getTodos = (req, res) => {
  try {
    const sortedTodos = todo.sort((a, b) => {
      const dateA = new Date(a.due);
      const dateB = new Date(b.due);
      return dateA - dateB;
    });

    res.json({
      todos: sortedTodos,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Problem Occured",
    });
    console.log(error);
  }
};

// Get todos by id

const getTodoById = (req, res) => {
  try {
    const todoid = req.params.id;
    const todoWithId = todo.filter((obj) => {
      return obj.id == todoid;
    });

    res.json({
      todos: todoWithId,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Problem Occured",
    });
    console.log(error);
  }
};

// Addtodo

const Addtodo = (req, res) => {
  try {
    const todo_detail = req.body;
    const id = Math.ceil(Math.random() * 10000);
    const object = {
      ...todo_detail,
      status: "pending",
      id,
    };
    todo.push(object);
    res.json({
      status: true,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Problem Occured",
    });
    console.log(error);
  }
};

// Update Task WIth Id

const updateTask = (req, res) => {
  try {
    const todoid = req.params.id;
    const { status, title, due } = req.body;
    const todos = todo.find((obj) => {
      return obj.id == todoid;
    });

    if (status) {
      todos.status = status;
      res.json({
        status: true,
      });
      return;
    }
    if (title) {
      todos["title"] = title;
    }
    if (due) {
      todos["due"] = due;
    }

    res.json({
      status: true,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Problem Occured",
    });
    console.log(error);
  }
};

// Delete Todo

const deleteTodo = (req, res) => {
  try {
    const id = req.params.id;
    const index = todo.findIndex((obj) => obj.id === parseInt(id));
    todo.splice(index, 1);
    res.json({
      del: "delete",
    });
  } catch (error) {
    res.status(404).json({
      msg: "Problem Occured",
    });
    console.log(error);
  }
};

module.exports = { getTodos, getTodoById, Addtodo, updateTask, deleteTodo };
