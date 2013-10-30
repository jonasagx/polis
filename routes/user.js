
/*
 * GET users listing.
 */

exports.list = function(req, res){
    res.send("respond with a resource:\n" + JSON.stringify(req.params));
};
