## Tuesday

- Nuxt.js seems like the obvious choice here. Loved messing around with it before, and this will be the stack of the company.
- Also remembering that Vuex is built in to Nuxt. For small apps and demos like this, its overkill. But for the sake of showing versatility in working with stores like this, I might just include it in the project. Setting up a basic store now.
- Drafting basic layout/design in code. Thought about doing everything in Figma first, but decided against it on account of time. I feel fine designing in the browser for this demo specifically. I am going to start in a single-file and breaking things out as needed.
- Now that I have a basic layout, I can start playing with data. I have already connected a PubNub account to the project. Seeing that this is a new service for me, I will play around with it a bit and see if I will commit to using it.
- I was successfully able to test subscribe to PubNub and fetch message history as well. However this setup is just a test, so I would like to integrate it into Vuex next.

## Wednesday

- Of course I had to start my day a bit late and working through some Eslint/VSCode issues. However, I think I got it taken it care of. Fingers crossed.
- Got Vuex running most of the state for the app (where relevant, but even then it still feels overkill). Vuex is also handling the initial fetching of messages from the PubNub service. Everything was quite easy.
- Now that requests and updates are fully working with PubNub/Vuex, I am just going to clean up things up a bit. Mostly breaking some components out and making some visual tweaks.
- After some minor refactoring and visual tweaking, I now need to add the chat switcher for the mobile view. I am going to used Vuex to store and update the currently active chat.
- Chat switcher is live and working well. At this point I have checked off all the requirements of the brief and nearly all of the "bonus points". Tomorrow I will spend the day adding some light animations, review the code, and refine where necessary before sending it off.

## Thursday

- I was unhappy with the chat roll, so I decided to make some changes. Vuex is now running mutations to help me better display things. We now have "message groups". This will allow me to clean things up a bit, but also better visually organize the chats that are consecutively from the same sender.
- I added a nice welcome message for returning users, and an icon for the "other" person. Looking for more things to refine, now.
- Honestly, I spent a lot more time refining the design (especially for mobile) than I had originally expected to. This refining brought me to also fix a few particular browser issues (looking at you, iOS Safari). But this was a pretty enjoyable experience making it look and feel even better.
- I had expected to do more on animations today, but I have run out of time. I wanted to submit the project today as well, but because I am not I will have to add some simple animations tomorrow before sending it off.

## Friday

- Animations were not working as expected this morning. I ran into a particular issue with the way the components were nested. However with some light reading and some refactoring of the message group and message components, I was finally able get some light transitions going.
- A bit more bug fixing and reviewing the code one more time.
- Made a few accessibility improvements.
- Finished writing here and in the README. Final push to Github before sending this thing in!

That is it! Thanks for reading!
