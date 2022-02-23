const app = require("express");
const caseController = require("../controller/caseController");

caseRouter = app.Router();

caseRouter.get("/", caseController.getCases);

//  caseRouter.post("/", caseController.postCase);

//  caseRouter.put("/", caseController.updateCase);

//  caseRouter.delete("/:id", caseController.deleteCase);

//  caseRouter.get("/:id", caseController.getCaseByid);

module.exports = caseRouter;
