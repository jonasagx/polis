/*
 * POST cadastrar novo usuário
 * Body:
 *    - name - String;
 *    - email - String;
 *    - password - String;
 */ 

exports.cadastro = function(req, res){
    var user = req.body;
    console.log("Novo usuário");
    console.log(JSON.stringify(user));
    res.sende("That is okay");
};
