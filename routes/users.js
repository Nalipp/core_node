const express = require('express');
const User = require('../models/user');
const Post = require('../models/post');
const router = express.Router();

router.get('/', (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return console.log(err); 
    else res.send(users);
  });
});

router.get('/:id', (req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) return console.log(err);
    else res.send(user);
  });
});

router.post('/', (req, res, next) => {
  User.create(req.body, (err, newUser) => {
    if (err) return console.log(err);
    else res.send(newUser);
  });
});

router.post('/:id', (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body, (err, result) => {
    if (err) return console.log(err);
    else res.redirect('/users/' + id);
  });
});

router.post('/:id/delete', (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndRemove(id, (err, result) => {
    if (err) return console.log(err);
    else res.redirect('/users');
  });
});

router.get('/:userId/posts', (req, res, next) => {
  const userId = req.params.userId;
  User.findOne({ _id: userId }).
    populate('posts').
    exec(function (err, user) {
      if (err) console.log(err); 
      res.send(user.posts);
    });
});

router.get('/:userId/posts/:postId', (req, res, next) => {
  const userId = req.params.userId;
  const postId = req.params.postId;

  User.findOne({ _id: userId }).
    populate('posts').
      exec(function (err, user) {
      if (err) console.log(err); 
      let userPost = user.posts.filter((post) => {
        return String(post._id) === postId;
      });
      res.send(userPost);
  });
});

router.post('/:userId/posts', (req, res, next) => {
  const userId = req.params.userId;
  User.findOne({ _id: userId }, (err, user) => {
    Post.create(req.body, (err, newPost) => {
      if (err) return console.log(err);
      else {
        user.posts.push(newPost);
        user.save((err) => {
          if (err) return console.log(err); 
          else {
            res.send(user);
          }
        });
      }
    });
  })
});

router.post('/:userId/posts/:postId', (req, res, next) => {
  const userId = req.params.userId;
  const postId = req.params.postId;

  User.findOne({ _id: userId }).
    populate('posts').
      exec(function (err, user) {
      if (err) console.log(err); 
      user.posts.forEach((post) => {
        if (String(post._id) === postId) {
          if (post.title) post.title = req.body.title;
          if (post.body) post.body = req.body.body;
          post.save((err) => {
            if (err) console.log(err); 
            res.send(post);
          });
        }
      });
  });
});

module.exports = router;


