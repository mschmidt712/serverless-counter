# Serverless Counter
A basic counter UI to be integrated with a serverless backend using AWS Lambdas. The src folder contains UI resources and the server folder contains code for initializing the lambda functions and building the API gateway.

This UI was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Useful scripts
To install all dependencies run either `yarn install` or `npm install` in your terminal

To build and start the UI, run `npm start` in your terminal

## Integrating the Back-End
Build one lambda function based on `decrementCounterLambda.js` and one lambda function based on `incrementCounterLambda.js`

Generate your API Gateway based on the `swaggerWithApiGatewayExtensions.yaml` to save yourself some configuration time. Make sure to change the lambda URI for the increment and decrement pathway to your own path. If the function names are `incrementCounter` and `decrementCounter` you will only need to update the 12 digit account number to match your account (can be found in AWS account settings).

You can also build a simpler API with the `swagger.yaml` but don't forget to assign values to each of your [CORS headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).

Assign your lambda functions to the appropriate routes in the API gateway.

Deploy your API, then copy/paste your API url into the `appConfig.json` file in the src folder.

This should get your serverless backend up and running!
