/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

//var fsCallback = require('fs');

var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var promiseConstructor = require('./promiseConstructor');
var promisification = require('./promisification');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  // use fs.readfile to read the readFilePath
  // promisify fs.readfile
  // var url = 'https://api.github.com/users/' + user;
  // var options = {
  //  headers: { 'User-Agent': 'request' },
  // };
  //
  return promiseConstructor.pluckFirstLineFromFileAsync(readFilePath)
    .then((user) => {
      return promisification.getGitHubProfileAsync(user);
    })
    .then((response) => {
      return fs.writeFileAsync(writeFilePath, JSON.stringify(response));
    })

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
