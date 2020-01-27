# Food Delivery
This is a monorepo containing
* the backend package (Node.js and Express to simulate the presence of a database)
* the mobile (react-native) app, including the restaurant information screen only

## Backend
### Running in dev mode (requires setup to be completed)
1. Switch current working directory into `api` folder (i.e. `cd api`)
2. Start the server `npm start`

Simulation server is now listening on port 9000

If you want to test the app on a real device instead of a simulator, you will need to change the apiUrl in the "Resquest.js" file, inside the /FoodDelivery/mobile/ folder, replacing "localhost" with the IPv4 address of your computer.

To run on Simulator --> const apiUrl = "http://localhost:9000"
To run on Real device --> const apiUrl = "http://<your_IPv4>:9000"


## Frontend
### Development setup
1. Clone the repository
2. Switch current working directory into `mobile` (i.e. `cd mobile`)
3. Install dependencies with `npm install`
4. Switch current working directory into `ios` (i.e. `cd ios`)
5. Install pods with `pod install`

### Running in dev mode (requires setup to be completed)
1. Switch current working directory into `mobile` (i.e. `cd mobile`)
2. Start app with `react-native run-android` or `react-native run-ios` (n.b. you must have the server up and running)

MobileApp is now listening on port 8081
