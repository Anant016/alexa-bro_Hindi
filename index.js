"use strict";

//import ask-sdk-core
const Alexa = require("ask-sdk-core");

//skill name
const appName = "my bro";

//code for the handlers
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
  handle(handlerInput) {
    //welcome message
    let speechText = "bro";
    //welcome screen message
    let displayText = "";
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(appName, displayText)
      .getResponse();
  }
};

//implement custom handlers
const AddIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "SpeakinIntent"
    );
  },
  handle(handlerInput) {
    let speechText = "nice ब्रो";
    let displayText = "nice ब्रो";

    return handlerInput.responseBuilder
      .withSimpleCard(appName, displayText)
      .speak(speechText)

      .withShouldEndSession(true)
      .getResponse();
  }
};

//end Custom handlers

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "AMAZON.HelpIntent"
    );
  },
  handle(handlerInput) {
    //help text for your skill
    let speechText = "ब्रो";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard(appName, speechText)
      .getResponse();
  }
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      (handlerInput.requestEnvelope.request.intent.name ===
        "AMAZON.CancelIntent" ||
        handlerInput.requestEnvelope.request.intent.name ===
          "AMAZON.StopIntent")
    );
  },
  handle(handlerInput) {
    let speechText = "Bi ब्रो";
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard(appName, speechText)
      .getResponse();
  }
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "SessionEndedRequest";
  },
  handle(handlerInput) {
    //any cleanup logic goes here
    return handlerInput.responseBuilder.getResponse();
  }
};

//Lambda handler function
//Remember to add custom request handlers here
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(
    LaunchRequestHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler,
    AddIntentHandler
  )
  .lambda();
