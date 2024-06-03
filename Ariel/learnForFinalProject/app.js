const salutations = require("./greeting/greeting.js")
const besties = require("./bestFriends/severalElements.js")
const enemy = require("./people/rival.js");

salutations(givenName);

console.log(enemy.name,`has a`, enemy.broom);

console.log(`His snivelling bumbling sidekicks `, besties.snoopDawg, `and`, besties.encyclopediaBrown, `couldn't find an Elephant with an eyesight improvement draught!`)

const givenName = "Draco Lucien Malfoy";

