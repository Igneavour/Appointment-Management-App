var express = require('express');

var router = express.Router();

var database = require('../database');

router.get("/", function(request, response, next){

	//var query = "SELECT * FROM sample_data WHERE id = 1";

	var query = "SELECT * FROM sample_data ORDER BY id ASC";

	database.query(query,function(error,data){

		if(error)
		{
			throw error;
		}
		else
		{
			response.render('sample_data',{title:'Patient Database', action:'list', sampleData:data});
		}
	})

});

router.get("/add", function(request, response, next){

	response.render("sample_data",{title:"Please fill in your details", action:'add'});
});

router.post("/add_sample_data", function(request, response, next){

	var first_name = request.body.first_name;

	var last_name = request.body.last_name;

	var age = request.body.age;

	var gender = request.body.gender;

	var medical_conditions = request.body.medical_conditions

	var query = `
	INSERT INTO sample_data 
	(first_name, last_name, age, gender, medical_conditions) 
	VALUES ("${first_name}", "${last_name}", "${age}", "${gender}", "${medical_conditions}")
	`;

	database.query(query, function(error,data){

		if(error)
		{
			throw error;
		}	
		else
		{
			response.redirect("/sample_data");
		}

	});
});


// router.get("/", function(request, response, next){

// 	response.send('List all Sample Data');

// });

// router.get("/add", function(request, response, next){

// 	response.send('Add Sample Data');

// });

module.exports = router;