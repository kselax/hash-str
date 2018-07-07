var crypto = require('crypto');

__counter = 0;

function hash(length){
  var current_date = (new Date()).valueOf().toString();
  var random = (Math.random() + (__counter += 0.1)).toString();

  if(length <= 28){
    return crypto.createHash('sha1').update(current_date + random).digest('base64').substring(0, length);
  }

  if(length > 28 && length <= 44){
    return crypto.createHash('sha256').update(current_date + random).digest('base64').substring(0, length);
  }

  if(length > 44){
    return crypto.createHash('sha512').update(current_date + random).digest('base64').substring(0, length);
  }
} // function hash(length)

module.exports.hash = hash;

function sha1(){
  var current_date = (new Date()).valueOf().toString();
  var random = (Math.random() + (__counter += 0.1)).toString();
  return crypto.createHash('sha1').update(current_date + random).digest('base64');
}

module.exports.sha1 = sha1;

function sha256(){
  var current_date = (new Date()).valueOf().toString();
  var random = (Math.random() + (__counter += 0.1)).toString();
  return crypto.createHash('sha256').update(current_date + random).digest('base64');
}

module.exports.sha256 = sha256;

function sha512(){
  var current_date = (new Date()).valueOf().toString();
  var random = (Math.random() + (__counter += 0.1)).toString();
  return crypto.createHash('sha512').update(current_date + random).digest('base64');
}

module.exports.sha512 = sha512;
