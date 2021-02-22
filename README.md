# Repl-cron
Keep your Repls on Repl.it alive without the need for UptimeRobot
--------------------------------------
## How to use
```js
// index.js
const replcron = require('repl-cron');
```
```json
// repl-cron.json
{
  "repls": [
    {
      "url": "https://yodacode.repl.co",    // URL to ping
      "interval": 60000,                    // Interval to ping at
      "delay": 0,                           // Delay before starting to ping
      "shortname": "YodaCode Portfolio",    // Short name (optional)
      "status": 200                         // Desired HTTP status (optional, defaults to 200)
    }
  ]
}
```
It's that easy!