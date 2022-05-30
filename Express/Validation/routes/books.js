const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const jsonschema = require("jsonschema");
const bookSchema = require("../schemas/bookSchema.json")

// VERSION WITHOUT ANY REAL VALIDATION...
// router.post("/", function (req, res, next) {
//   const bookData = req.body.book;

//   if (!bookData) {
//     // pass a 400 error to the error-handler
//     let error = new ExpressError("Book data is required", 400);
//     return next(error);
//   }

//   // (not implemented) insert book into database here

//   return res.json(bookData);
// });

router.post("/", function (req, res, next) {
  
  const result = jsonschema.validate(req.body, bookSchema);

 
  if (!result.valid) {
    
    const listOfErrors = result.errors.map(e => e.stack);
    const err = new ExpressError(listOfErrors, 400);
 
    return next(err);
  }
  return res.json("THAT IS VALID!");
});


module.exports = router;
