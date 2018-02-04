var express = require('express');
var router = express.Router();
var dataString = "";

// Test route
router.get('/', function(req, res, next) {
  res.send('Hello! :D');
});

// Get a list of the files in my S3 bucket
router.get('/art', function(req, res, next) {
  var AWS = require('aws-sdk');

  AWS.config.update({accessKeyId: process.env.access_key_id, 
  					 secretAccessKey: process.env.secret_key, 
  					 region: 'us-east-1'});
  var s3 = new AWS.S3();

	var params = { 
	 Bucket: 'bucket.of.art'
	}

	s3.listObjects(params, function (err, data) {
	 if(err)throw err;
	 console.log(data);
	 res.send(data);
	});
});

module.exports = router;