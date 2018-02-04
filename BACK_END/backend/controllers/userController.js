var User = require('../models/user');
require('mongoose-pagination');

exports.getList = function(req, resp){
	// Lấy tham số và parse ra number.	
	var page = Number(req.query.page);
	var limit = Number(req.query.limit);

	User.find({'status': 1})
	.paginate(page, limit, function(err, result, total) {    	
    	var responseData = {
    		'listUser': result,
    		'totalPage': Math.ceil(total/limit)
    	};
    	resp.send(responseData);
  	});
}

exports.getDetail = function(req, resp){	
	User.findOne({ _id: req.params.id, 'status': 1 },function(err, result){
		resp.send(result);
	});
}

exports.add = function(req, resp){
	console.log(req.body.rollNumber);
	var user = new User(req.body);	
	user.save(function(err){				
		resp.send(user);
	});
}

exports.update = function(req, resp){
	User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, result) {
	    resp.json(result);
	});
}

exports.delete = function(req, resp){
	// User.remove({
	//     _id: req.params.id
 	//    }, function(err, result) {
	//     resp.json({ message: 'Successfully deleted' });
	// });
	User.findById(req.params.id,function(err, result){				
		result.status = 0;
		User.findOneAndUpdate({_id: req.params.id}, result, {new: true}, function(err, result) {
		    resp.json(result);
		});
	});	
}

exports.login = function(req, resp){
	const email = req.body.email;
	const password = req.body.password;
  
	User.findOne({ email: email }, (err, user) => {
  
	  if (err) throw err;
  
	  if (!user) {
		return resp.status(400).json({ success: false, msg: 'User not found.' });
	  }
	  resp.json(user);
	});
}