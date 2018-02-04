var userController = require('../controllers/userController');

module.exports = function(app){
	// users api.
	app.route('/_api/v1/users')
		.get(userController.getList)
		.post(userController.add);	

	app.route('/_api/v1/users/:id')
		.get(userController.getDetail)
		.put(userController.update)
		.delete(userController.delete);

	app.route('/_api/v1/users/login')
		.post(userController.login);

	// image api.	
	app.post('/_api/v1/images', function(req, res) {		
		console.log(req.files);
		if (!req.files)
			return res.status(400).send('No files were uploaded.');

		// The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
		let sampleFile = req.files.myFile;	

		// Use the mv() method to place the file somewhere on your server
		sampleFile.mv('./public/images/' + sampleFile.name, function(err) {
			if (err)
			  return res.status(500).send(err);

			res.send('http://localhost:3000/images/' + sampleFile.name);
		});
	});	
}