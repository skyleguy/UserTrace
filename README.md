# UserTrace

## Game Plan

UserTrace's mission is to allow UTaaS (User tracking as a service) to any client who wishes. The main features would be:

- 'tagging' a web application's elements so that
  - when interacted with a log is created
  - Every X interactions or X amount of time the cached logs would be sent to the UserTrace backend to be stored in DynamoDB
  - logs would include: session id, user id, company id, element name, event type, timestamp, url
  - at some point it would be nice to provide more information about the element clicked (location on the page, height/width) and possibly send a screenshot of the app so UserTrace can create a heatmap of the page
- ability to go to UserTrace CMS site in order to view/search logs to try and gain insights into user flows, most popular site entry point, flow leading up to an error, total users during time period, feature use during time period, etc.

## Expected Stack

- Angular
  - UserTrace CMS site and testing client page will be built using Angular
- NestJS
  - API that processes incoming logs and sends to DynamoDB, as well as fetches records from DynamoDB to be used in UserTrace CMS
  - Authentication to API will most likely be with the popular library called passport and will be used by clients from their own site or when using UserTrace CMS
- DynamoDB
  - used for the storage of logs
- S3
  - Potentially the location for storage of user images to be used in generating heatmaps
