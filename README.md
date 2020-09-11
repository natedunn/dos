# Dos

A demo chat app built using [Nuxt.js](https://nuxtjs.org/), [Vuex](https://vuex.vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), and [PubNub](https://www.pubnub.com/).

[Check out the live demo](https://doschat.netlify.app/)

> <b>Note:</b> The demo above saves all entries to demo PubNub account immediately. Please do not post anything inappropriate, or I will be forced to close the live demo.

## Features

### ✔ Accessibility

- Every UI element has been checked to meet at least AA/AAA standards as per the Web Content Accessibility Guidelines. However please let me know if there is something I missed.
- Chat interface uses as much semantic HTML as possible to additionally help with screen readers.

### ✔ Progressive Web App

This demo is PWA-ready. Successfully installs on both Android and iOS devices.

### ✔ PageSpeed Insight Score

Google's PageSpeed Insight score (preferable to Lighthouse due it's inconsistencies) rates the demo at _84 percent on mobile_ and _93 percent on desktop_, with the greatest room for improvement in the area of performance.

## Build locally

### Install

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

### Connect to PubNub

Make to connect your own PubNub credentials by adding your own `SUBSCRIBE_KEY` and `PUBLISH_KEY` to `.env`.

```env
SUBSCRIBE_KEY=""
PUBLISH_KEY=""
```
