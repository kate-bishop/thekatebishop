---
title: "Code Challenge: Weather Forecast App"
role: "React Engineer"
date: "2022-01-01"
problem: "Given a Sketch file with a desktop design for a 5-day weather forecast app in Dallas, Texas, I was tasked with building a single-page web app to match. In addition, the app needed to connect to an API to retrieve real forecast data."
prompt: "Let’s break down the requirements and think toward responsive design."
---

## React Engineer

### Problem

Given a Sketch file with a desktop design for a 5-day weather forecast app in Dallas, Texas, I was tasked with building a single-page web app to match. In addition, the app needed to connect to an API to retrieve real forecast data.

***Let’s break down the requirements and think toward responsive design.***

#### Quick Links

[Weather Forecast App (Hosted with Netlify)](delightful-cascaron-24b3b4.netlify.app)

[GitHub Repository](github.com/kate-perry/weather-forecast-app)

### Approach

I identified **key UI features in the design based on visual grouping and data requirements**. My goal was to reuse components as much as possible so I could develop quicker. I then compiled those with the provided functional requirements in a task management system.

I decided to use *Open Weather Map API* for data because it could provide a Today and 5-Day forecast, plus support for Fahrenheit and Celsius units.

For UI components, I used *MUI component library* because it offered a great template for all the features displayed in the mockup (Format, Typography, Icons, and Toggles).

I used a *create-react-app boilerplate* to get started with development.

![Screenshot of design overlaid with Feature Groupings analysis](public/images/wa-feature-group.png)

### Challenges

A *time constraint* resulted in the need for decision making. I prioritized tasks based on most impactful features, and I developed in large strokes before digging into the details.

#### Current functionality includes…

- Data fetched from Open Weather Map API
- Support for Imperial & Metric
- Responsiveness to screen size

#### Future functionality includes…

- Better API key storage
- Ability to look up forecast for other cities
  - Search button next to current city that would open an input field
  - Type-to-search for city name and ZIP code
  - Backend process to look up latitude and longitude for the forecast API call

### Delivery

![Screenshot of the final Forecast App](public/images/wa-final.png)

View app on **Netlify** [here](delightful-cascaron-24b3b4.netlify.app/).

The code can be found on **GitHub** [here](github.com/kate-perry/weather-forecast-app).
