# Core Node 

App for increasing effiecency and fluency for basic node.js functionality

## areas of focus

### associations

crud functioning for user models and post associations

object reference and embedded reference examples

updating and deleting associated data

properly removing associated data when parent data is deleted (removing danglers);

ongoing questions

```
1. What is the most effective way to update one field of an associated document
  example: Currently if a form is sent to update a post but the title is left blank the title will be removed from the document
           this does not happen with users because we are using User.findByIdAndUpdate which is much cleaner
           The current method for finding post is to iterate through all users posts
             with the rational that this is better than iterating through all the posts in the entire database with Post.findByIdAndUpdate
```

### aws deployment

deploy with amazon web service 

### testing

mocha, chi automated testing

### authentication

fully develop shippable authentication 

including forgot password option and Oauth

### promises

how to properly implement promises and ensure the app will still run on all browsers

### error handling

what is the cleanest more maintainable way to do flash messages and how to play nicely with passport

### single page application

where is it best to use redirect and when to use ajax calls


