# astronomy-PotD

A simple ReactJS app that uses the NASA open API to browse the Astronomy Picture of the Day

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Setup:

- clone this repo
- run `npm install`
- create a `.env` file in the root directory, and assign you NASA api key to `REACT_APP_NASA_API_KEY`
- run `npm start`

## Testing

This app is tested with Jest, to run the test suite run `npm test`

## Known Issues

- Jest can't be run in watch mode on Linux if VSCode is open as per [Bug: Watch mode on Linux causes a ENOSPC Node.js error #3254](https://github.com/facebook/jest/issues/3254)
- Jest watch job crashes with 'Invariant Violation' Tests still run but after much searching, I am unable to find a working fix for this.
