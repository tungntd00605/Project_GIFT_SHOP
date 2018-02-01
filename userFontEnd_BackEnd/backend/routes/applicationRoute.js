var userController = require('../controllers/userController');
var studentController = require('../controllers/studentController');
var adminController = require('../controllers/adminController');
var productController = require('../controllers/productController');
var shoppingCartController = require('../controllers/shoppingCartController');

module.exports = function(app){
	// users api.
	app.route('/_api/v1/users')
		.get(userController.getList)
		.post(userController.add);	

	app.route('/_api/v1/users/:id')
		.get(userController.getDetail)
		.put(userController.update)
		.delete(userController.delete);

	// students api.
	app.route('/_api/v1/students')
		.get(studentController.getList)
		.post(studentController.add);	

	app.route('/_api/v1/students/:id')
		.get(studentController.getDetail)
		.put(studentController.update)
		.delete(studentController.delete);

	// admin api.
	app.route('/_api/v1/admins')
		.get(adminController.getList)
		.post(adminController.add);	

	app.route('/_api/v1/admins/:id')
		.get(adminController.getDetail)
		.put(adminController.update)
		.delete(adminController.delete);

	// products api.
	app.route('/_api/v1/products')
		.get(productController.getList)
		.post(productController.add);	

	app.route('/_api/v1/products/:id')
		.get(productController.getDetail)
		.put(productController.update)
		.delete(productController.delete);	

	app.route('/_api/v1/shopping-cart')
		.post(shoppingCartController.saveCart);

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