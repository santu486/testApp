const { Pool } = require("pg");
const config = require("../config/config");
const pool = new Pool(config.db);

const Case = function (caseData) {
  this.id = casedata.id;
  this.name = caseData.name;
  this.email = caseData.email;
};

Case.getCaseData = (result) => {
  pool.query("SELECT * FROM CASES	", (error, results) => {
    if (error) {
      console.log(error);
      result(error, null);
    }
    result(null, results.rows);
  });
};

Case.addCase = (Case, result) => {
  const { id, name, email } = Case;
  pool.query(
    "INSERT INTO cases (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        console.log(error);
        result(error, null);
      }
      result(null, "Case is added ");
    }
  );
};

Case.updateCase = (Case, result) => {
  const { name, email, id } = Case;

  pool.query(
    "UPDATE public.cases 	SET  name=$1, email=$2	WHERE id=$3 ",
    [name, email, id],
    (error, results) => {
      if (error) {
        //  throw error
        console.log(error);
        result(error, null);
      }
      // response.status(200).json(results.rows)
      console.log("Case is updated ");
      result(null, "Case is updated ");
    }
  );
};

Case.deleteCase = (id, result) => {
  pool.query("delete from cases where id  = ($1)", [id], (error, results) => {
    if (error) {
      //  throw error
      console.log(error);
      result(error, null);
    }

    result(null, "Case is deleted");
  });
};

Case.getCaseById = (id1, result) => {
  ///const id = parseInt(request.params.id)

  //pool.query('SELECT * FROM cases WHERE id = $1', [id1], (error, results) => {
  pool.query("SELECT * FROM cases WHERE id = $1", [id1], (error, results) => {
    if (error) {
      throw error;
    }
    result(null, results.rows);
  });
  //     console.log("id "+id1) ;

  //     const name1 = 'prashant' ;

  //     pool.query('SELECT * FROM cases WHERE id = $1', [id], (error, results) => {
  // //   pool.query(
  // //     "select * from Case where id = $1",[id1],
  // //     (error, results) => {
  //       if (error) {
  //         result(error, null);
  //       }

  //       result(null, results.rows);
  //     }
  //   );
};

module.exports = Case;
