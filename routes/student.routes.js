module.exports = app => {
  const students = require("../controllers/student.controller.js");
  var router = require("express").Router();

  // Create a new Student
  router.post("/", students.create);

  // Retrieve all Students
  router.get("/", students.findAll);

  // Retrieve all registered Students
  router.get("/registered", students.findAllPublished);

  // Retrieve a single Student with id
  router.get("/:id", students.findOne);

  // Update a Student with id
  router.put("/:id", students.update);

  // Delete a Student with id
  router.delete("/:id", students.delete);

  // Delete a Student
  router.delete("/", students.deleteAll);

  app.use("/api/students", router);
};
