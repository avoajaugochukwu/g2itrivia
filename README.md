# My submission

Visit the site [here](https://gleeful-haupia-b7bd47.netlify.app/)
Visit the code [here](https://github.com/avoajaugochukwu/g2itrivia)

## To run app
run: `npm install`
then run: `npm start`

## To run test
run: `npm run storybook`

## Tools used
I used the following tools
- Storybook
- React testing library
- TypeScript
- Custom hooks
- Errorboundary to catch error in any part of the application

## Other information
- I noticed that the endpoint was failing, in the browser and also in Postman. So I deemed it unreliable, as a result of that I implemented a retry when fetching the data. I set the number of retries to 10, this should be sufficient as long as the endpoint is active. In a production environment this issue will be escalated to the devops of backend to allocate more resources or triangulate the issue.
- I could have implemented more tests, but I have other time commitments to attend to, these tests would include testing the data recieved, testing the scoring mechanism and testing the react context.

