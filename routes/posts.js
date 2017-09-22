const express = require('express');
const Post = require('../models/post');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('here!!!!!!!!!1'); 
  Post.find({}, (err, posts) => {
    if (err) res.redirect('/');
    else res.send(posts);
  });
});

// router.get('/:id', (req, res, next) => {
//   Post.findById(req.params.id, (err, post) => {
//     if (err) res.redirect('/');
//     else res.send(post);
//   });
// });

// router.post('/', (req, res, next) => {
//   Post.create(req.body, (err, newPost) => {
//     if (err) res.redirect('/posts/new');
//     else res.send(newPost);
//   });
// });

// router.post('/:id', (req, res, next) => {
//   const id = req.params.id;
//   Post.findByIdAndUpdate(id, req.body, (err, result) => {
//     if (err) res.redirect('/posts/' + id)
//     else res.redirect('/posts/' + id);
//   });
// });

// router.post('/delete/:id', (req, res, next) => {
//   const id = req.params.id;
//   Post.findByIdAndRemove(id, (err, result) => {
//     if (err) res.redirect('/posts' + id);
//     else res.redirect('/posts');
//   });
// });

// module.exports = router;


