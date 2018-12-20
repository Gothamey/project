var db = require('../db/config');
var casts = {};

casts.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM casts;")
    .then(function(result){
        //console.log(result);
        res.locals.casts = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
}

casts.find = function(req, res, next){
    console.log('finding cast')
    db.one("SELECT * FROM casts WHERE id = $1;", [req.params.id])
    .then(function(result){
        console.log(result);
        res.locals.casts = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
};

casts.findCasts = function(req, res, next){
    db.manyOrNone("SELECT * FROM casts WHERE movie_id=$1;", [req.params.id])
    .then(function(result){
        res.locals.casts= result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

casts.create = function(req, res, next){
    var id = req.params.id;
    db.one("INSERT INTO casts(image, name, story, movie_id) VALUES($1, $2, $3, $4) RETURNING id;", 
    [req.body.image, req.body.name, req.body.story, res.locals.moviesId])
    .then(function(result){
        res.locals.castsId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};


module.exports = casts;
