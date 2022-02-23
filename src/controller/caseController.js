const Case = require("../model/cases");

exports.getCases = (request, response) => {
  Case.getCaseData((error, result) => {
    if (error) {
      console.log("error  " + error);
      response.send("error in processing ");
    }

    response.send(result);
    response.end();
  });
};

exports.postCase = (request, response) => {
  const user1 = {
    id: request.body.id,
    name: request.body.name,
    email: request.body.email
  };

  console.log(" user1 "+user1) 

  Case.addCase(user1, (error, result) => {
    if (error) {
      console.log("error  " + error);
      response.send("error in processing ");
    }

    response.send(result);
    response.end();
  });
};

exports.updateCase = (request, response) => {
  const user1 = {
    id: request.body.id,
    name: request.body.name,
    email: request.body.email
  };

 
  Case.updateCase(user1, (error, result) => {
    if (error) {
      console.log("error  " + error);
      response.send("error in processing ");
    }

    response.send(result);
    response.end();
  });
};


exports.deleteCase = (request, response) => {
 
  const id = request.params.id ; 
  Case.deleteCase(id, (error, result) => {
    if (error) {
      console.log("error  " + error);
      response.send("error in processing ");
    }

    response.send(result);
    response.end();
  });
};


exports.getCaseByid = (request, response) => {
 
  const id = request.params.id ; 
  Case.getCaseById(id, (error, result) => {
    if (error) {
      console.log("error  " + error);
      response.send("error in processing ");
    }

    response.send(result);
    response.end();
  });
};
