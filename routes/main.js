module.exports = function(app)
{
     app.get('/',function(req,res){
        res.render('index.html')
     });
    app.get('/profile',function(req,res){
	res.render('profile.html')
    });
    app.get('/board',function(req,res){
	res.render('board.html')
    });
}