const fs = require('fs');
const fetch = require('node-fetch');
const file = fs.readFileSync("./repl-cron.json");
const { EventEmitter } = require('events');
const json = JSON.parse(file);
const config = json;
class Interface extends EventEmitter {
  constructor () {
    super();
  }
}
const emitter = new Interface();
config.repls.forEach(repl => {
  var cron = async () => {
    const raw = await fetch(repl.url);
    const status = raw.status;
    if (status == (repl.status || 200)) {
      emitter.emit("ping", {
        raw: raw,
        friendly: (repl.shortname || repl.url) + " was just pinged."
      });
    } else {
      emitter.emit("ping", {
        raw: raw,
        friendly: (repl.shortname || repl.url) + " was just pinged with an unexpected response code of " + raw.status + "."
      });
    }
  }
  setTimeout(() => {
    cron();
    setInterval(async () => {
      cron();
    }, repl.interval);
  }, repl.delay);
});
module.exports = emitter;