# Repl-cron
Keep your Repls on Repl.it alive without the need for UptimeRobot
--------------------------------------
## How to use
index.js:
```js
const replcron = require('repl-cron');
```
repl-cron.json:
```json
{
  "repls": [
    {
      "url": "https://yodacode.repl.co",
      "interval": 60000,
      "delay": 0,
      "shortname": "YodaCode Portfolio",
      "status": 200
    }
  ]
}
```
It's that easy!