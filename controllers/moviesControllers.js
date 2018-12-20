var express = require('express');
var router  = express.Router();

var casts = require('../modules/cast');
var movies   = require('../modules/movies');

router.get('/', movies.getAll, renderIndex);
router.get('/new', renderNew)
router.get('/:id', movies.findCast, movies.findMovies, renderShow);
router.get('/:id/edit', movies.find, renderEdit)


router.post('/', movies.create, casts.create, redirectShow);
router.put('/:id', movies.update, redirectShow)
router.delete('/:id', movies.delete, redirectIndex)

// router.get('/:id', movies.rate , renderShow);

function renderIndex(req, res){
    //console.log('hiiiiii')
    var mustacheVariables = {
        moviesList: res.locals.movies
    };
    console.log(mustacheVariables)
    res.render('./movies/index', mustacheVariables);
};

function renderShow(req, res){
    var mustacheVariables ={
        moviesList: res.locals.movies
    }
    res.render('./movies/show', mustacheVariables);
};

function renderNew(req, res){
    res.render('./movies/new');
}

function renderEdit(req, res){
    var mustacheVariables = {
        moviesList: res.locals.movies
    };
    res.render('./movies/edit', mustacheVariables);
}

function redirectIndex(req, res){
    res.redirect('/movies');
};

function redirectShow(req, res){
    res.redirect(`/movies/${res.locals.moviesId}`)
}

module.exports = router;