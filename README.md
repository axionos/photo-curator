## MVP
1. Display 10 curated photos on the home screen. On the server side, consume the Curated photos resource and return the necessary response to render the photos. We want this to be instant so it should be server-side rendered

2. Provide pagination for Curated photos. Paging should not cause a page refresh. From the client side initiate the needed requests to allow the user to go forward and backward 10 photos at a time

3. Provide a photo search. Searching should not cause a page refresh. Consume the photo search resource and display the results to the user, along with pagination, if needed

## User Stories

As a user visiting the website...
- I can see an initial set of curated photos on the home screen
- I am able to access the the photographer’s name and url if those details are available for every photo
- I can paginate the list of curated photos
- I can use a text input to search for photos I’m interested
- I can see the results of my search in the photo viewing area
- I can paginate search results if needed

As a developer working on the project locally...
- I have access to all project-specific local setup instructions I need to run the project
- I can install any required dependencies with npm or yarn
- I can compile and run the project in one step

## Install

1. Create .env file and save your Pexels API key as `REACT_APP_PEXEL_API_KEY=your api key`. 

2. Install all the necessary dependencies to run the app by `npm install`. 

## How to Use

Compile and run the app in one step by `npm run start-dev`. Open [http://localhost:3000](http://localhost:3000) to view and test it in the browser.

# photo-curator
