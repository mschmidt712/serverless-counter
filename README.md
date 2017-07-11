# Serverless Counter
A basic counter UI to be integrated with a serverless backend using AWS Lambdas. The src folder contains UI resources and the server folder contains code for initializing the lambda functions and building the API gateway.

This UI was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Useful scripts
To install all dependencies run either `yarn install` or `npm install` in your terminal

To build and start the UI, run `npm start` in your terminal

## Integrating the Back-End
Build one lambda function based on `decrementCounterLambda.js` and one lambda function based on `incrementCounterLambda.js`

Generate and API Gateway API based on the `swaggerWithApiGatewayExtensions.yaml` to save yourself some configuration time. You can also build a similar API with the `swagger.yaml` but don't forget to assign values to each of your CORS headers.

Assign your lambda functions to the appropriate routes in the API gateway.

Deploy your API, then copy/paste your API url into the `appConfig.json` file in the src folder.

This should get your serverless backend up and running!
