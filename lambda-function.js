var Alexa = require('alexa-sdk');
var Data = require("./data");
 
const skillName = "Buddy";
 
var handlers = {
 
    "WelcomeIntent": function () {
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        var speechOutput = "";
        if(this.event.request.intent.slots.FriendName.value && this.event.request.intent.slots.FriendName.value.toLowerCase() == "deepthi") {
            speechOutput = Data.deepthi[getRandomInt(0, 2)];
        } else if(this.event.request.intent.slots.FriendName.value && this.event.request.intent.slots.FriendName.value.toLowerCase() == "chathura") {
            speechOutput = Data.chathura[getRandomInt(0, 1)];
        } else if(this.event.request.intent.slots.FriendName.value && this.event.request.intent.slots.FriendName.value.toLowerCase() == "chetha") {
            speechOutput = Data.chetha[getRandomInt(0, 1)];
        } else if(this.event.request.intent.slots.FriendName.value && this.event.request.intent.slots.FriendName.value.toLowerCase() == "akithma") {
            speechOutput = Data.akithma[getRandomInt(0, 1)];
        } else {
            speechOutput = "I don't have anything interesting to share regarding what you've asked."
        }
        this.emit(':tellWithCard', speechOutput, skillName, speechOutput);
    },
 
    "AboutIntent": function () {
        var speechOutput = "The " + skillName + " Developer, Lilupa, is from Wellington, New Zealand";
        this.emit(':tellWithCard', speechOutput, skillName, speechOutput);
    },
 
    "AMAZON.HelpIntent": function () {
        var speechOutput = "";
        speechOutput += "Here are some things you can say: ";
        speechOutput += "Tell me something interesting about Java. ";
        speechOutput += "Tell me about the skill developer. ";
        speechOutput += "You can also say stop if you're done. ";
        speechOutput += "So how can I help?";
        this.emit(':ask', speechOutput, speechOutput);
    },
 
    "AMAZON.StopIntent": function () {
        var speechOutput = "Goodbye and best wishes from " + skillName;
        this.emit(':tell', speechOutput);
    },
 
    "AMAZON.CancelIntent": function () {
        var speechOutput = "Goodbye and best wishes from " + skillName;
        this.emit(':tell', speechOutput);
    },
 
    "LaunchRequest": function () {
        var speechText = "";
        speechText += "Welcome to " + skillName + ".  ";
        speechText += "You can ask " + skillName + " to welcome your friends such as welcome John.";
        var repromptText = "For instructions on what you can say, please say help me.";
        this.emit(':ask', speechText, repromptText);
    }
 
};
 
exports.handler = function (event, context) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = "amzn1.ask.skill.cc1e223d-3fff-4656-838d-d40ec9143a54";
    alexa.registerHandlers(handlers);
    alexa.execute();
};