var express = require('express');
var router  = express.Router();

var casts = require('../modules/cast');
var movies   = require('../modules/movies');

router.get('/', casts.getAll, renderIndex);
router.get('/:id', movies.find, casts.findCasts, renderShow);

function renderIndex(req, res){
    //console.log('hiiiiii')
    var mustacheVariables = {
        castsList: res.locals.casts
    };
    console.log(mustacheVariables)
    res.render('./casts/index', mustacheVariables);
};

function renderShow(req, res){
    var mustacheVariables = {
        castsList: res.locals.casts,
        movieList: res.locals.movies 
    };
    console.log(mustacheVariables)

    res.render('./casts/show', mustacheVariables);
};

module.exports = router;