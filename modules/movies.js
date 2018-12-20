var db = require('../db/config');
var movies = {};

movies.getAll = function(req, res, next){
    db.manyOrNone("SELECT * FROM movies;")
    .then(function(result){
        res.locals.movies = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
}

movies.find = function(req, res, next){
    db.one("SELECT * FROM movies WHERE id = $1;", [req.params.id])
    .then(function(result){
        res.locals.movies = result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
}

movies.update = function(req, res, next){
    db.one("UPDATE movies SET story=$1 WHERE id=$2 RETURNING id;",
     [req.body.story, req.params.id])
    .then(function(result){
        res.locals.moviesId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    })
}

movies.create = function(req, res, next){
    db.one("INSERT INTO movies(img_url, name, story) VALUES($1, $2, $3) RETURNING id;", 
    [req.body.img_url, req.body.name, req.body.story, req.params.id])
    .then(function(result){
        res.locals.moviesId = result.id;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

movies.delete = function(req, res, next){
    console.log('*********', req.params)
    db.none("DELETE FROM movies WHERE id=$1;", [req.params.id])
    .then(function(){
        next()
    }).catch(function(error){
        console.log(error);
        next();
    });
};
movies.findMovies = function(req, res, next){
    console.log('finding movies')
    db.one("SELECT * FROM movies WHERE id=$1;", [req.params.id])
    .then(function(result){
        console.log(result);
        res.locals.movies= result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};

movies.findCast = function(req, res, next){
    console.log('finding movies')
    db.manyOrNone("SELECT * FROM casts WHERE movie_id=$1;", [req.params.id])
    .then(function(result){
        console.log(result);
        res.locals.casts= result;
        next();
    }).catch(function(error){
        console.log(error);
        next();
    });
};


module.exports = movies;
