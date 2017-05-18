module.exports = new Proxy({}, {
  get: function(object, property) {
    let operations = {
      se: 240,
      nop: 241,
      dm: 242,
      brk: 243,
      ip: 244,
      ao: 245,
      ayt: 246,
      ec: 247,
      el: 248,
      ga: 249,
      sb: 250,
      will: 251,
      wont: 252,
      "do": 253,
      dont: 254
    }

    let options = {
      echo: 1,
      supress: 3,
      status: 5,
      timing: 6,
      termtype: 24,
      termsize: 31,
      remote: 32,
      linemode: 33,
      environment: 36
    }

    let operation = operations[property];
    if (typeof operation === "undefined") {
      return undefined;
    } else if (operation === 250) {

    } else {
      return new Buffer([255, operation])
    }
  }
});
