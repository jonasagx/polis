var mongo = require('mongoose');
var hash = require('hashit');

mongo.connect('mongodb://localhost/polisdb',
	      //callback
	      function(err){
		 if(err) console.log("Erro " + err);
		 //process.exit();
	     });

var User = mongo.model('User',{
    name: String,
    email: String, 
    passwd: String,
    created: { type: Date, default: Date.now }
});

var Post = mongo.model('Post', {
    creator_id: [String],
    description: String,
    comments: { type: [String], default: ['']},
    commentsDates: [Date],
    media: { type: [Buffer], default: [] },
    lat: Number,
    lon: Number
});

var saveCallback = function(err){
    if(err) throw("Error: " + err);
}

// GET home page.
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

/* POST cadastrar novo usuário
 - name - String;
 - email - String;
 - password - String; */
exports.register = function(req, res){
    var user = req.body;
    console.log(JSON.stringify(user));
    
    var user_persist = new User(user);
    user_persist.save(saveCallback);

    res.send(200);
};

/* POST cadastra novo post
 - creator_id: [String]
 - description: String,
 - comments: [String],
 - commentsDates: [Date],
 - media: { type: [Buffer], default: [] }*/
exports.post = function(req, res){
    var post = req.body;
    console.log(JSON.stringify(post));

    var post_persist = new Post(post);
    post_persist.save(saveCallback);

    res.send(200);
};

exports.map = function(req, res){
    res.render('map', { title: "Map"} );
};
