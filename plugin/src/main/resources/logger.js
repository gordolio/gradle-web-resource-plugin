module.exports = Logger;

var gconsole;
try {
  gconsole = require('gradle-console');
} catch (err) {
  gconsole = (function() {
    this.log = function(level, tag, message) {
      console.log(level + ' ' + tag + ' ' + message);
    }
    return this;
  })();
}

function Logger(level, tag) {
  this.level = level;
  this.tag = tag;
}

// 0: error, 1: warning, 2: info, 3: debug
Logger.prototype.e = function(message) {
  if (0 <= this.level) {
    gconsole.log('ERROR', this.tag, message);
  }
}

Logger.prototype.w = function(message) {
  if (1 <= this.level) {
    gconsole.log('WARN', this.tag, message);
  }
}

Logger.prototype.i = function(message) {
  if (2 <= this.level) {
    gconsole.log('INFO', this.tag, message);
  }
}

Logger.prototype.d = function(message) {
  if (3 <= this.level) {
    gconsole.log('DEBUG', this.tag, message);
  }
}
