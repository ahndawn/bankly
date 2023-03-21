- BUG #1: middleware auth.js, line 52
    ```javascript
    const payload = jwt.decode(token);
    // changed to 
    const payload = jwt.verify(token, SECRET_KEY);
    ```
    changed the authUser function, it would be better to use jsonwebtoken.verify() instead of jsonwebtoken.decode(). Verify() checks if the token is valid and throws an error if it is not.

- BUG #2: app.js, line 36
    the second instance of module.exports = app; at the end is redundant and can be removed since it is identical to the previous one.

- BUG #3: config.js, line 3
    ```javascript
    require('dotenv')
    // changed to
    require('dotenv').config()
    ```
    added .config() to 'require('dotenv').dotenv is used to load environment variables from a .env file into the process.env object. In order to actually use the variables, config() must be called to load them into the environment.

- BUG #4: /routes/users.js, line 97
    ```Javascript
    router.delete('/:username', authUser, requireAdmin, async function(
  req,
  res,
  next
    ) {
  try {
    await User.delete(req.params.username);
    return res.json({ message: 'deleted' });
  } catch (err) {
    return next(err);
  }
    });
    ```
    use the await keyword before calling the User.delete function, as it is an asynchronous operation

- BUG #5: /routes/auth.js, line 41
    add await. Without await, the function returned a Promise instead of the user object. It should be let user = await 

- BUG #6: /models/users.js, line 116
    add the throw keyword before the new ExpressError('No such user', 404);

- /models/users.js, line 82
    In the getAll method, the parameters username and password are not used, but they are included in the method signature. Removed them as they are redundant.