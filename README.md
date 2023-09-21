# social-media-app

# Set-up

1. Ensure Node is installed (to verify, run `npm -v` in Terminal)
2. Run the client environment
   1. `cd` into `/client`.
   2. Run `npm install` in Terminal. This installs current existing dependencies.
   3. Run `npm run dev`.
   4. Open the URL provided in the terminal (e.g., `http://localhost:5173/`)
3. Run the server environment
   1. `cd` into `/server`.
   2. Run `npm run dev`.


## Recommended: Postman API

Postman API is a helpful tool to test API development by allowing us to create and run mock API calls to our server, as well as observe the responses.

1. Create an account on `https://www.postman.com/`.
2. Open up a workspace.
3. In the `Collections` tab (left-hand side), press the `+` button to create a new blank collection.
4. In your collection, open the `Variables` tab.
   1. You can define variables to include in your requests (e.g., set `url` to `http://localhost:3000`)
5. Create a `New Request`.
   1. In the field `Enter URL or paste text`, enter the base URL with the endpoint you want to test
      1. e.g., `{{url}}/login`
   2. Include any query parameters in the list below the text field.
6. Press `Send`, located top-right.
   1. The response is displayed at the bottom tab of the window.