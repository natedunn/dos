## Tuesday

- Nuxt.js seems like the obvious choice here. Loved messing around with it before, and this will be the stack of the company.
- Also remembering that Vuex is built in to Nuxt. For small apps and demos like this, its overkill. But for the sake of showing versatility in working with stores, I might just include it in the project. Setting up a basic store now.
- Drafting basic layout/design in code. Thought about doing everything in Figma first, but decided against it on account of time. I feel fine designing in the browser for this demo specifically. Now starting in a single-file and breaking things out as needed.
- Now that I have a basic layout, I can start playing with data. I have already connected a PubNub account to the project. Seeing that this is a new service for me, I will play around with it a bit and see if I will commit to using it.
- I was successfully able to test subscribe to PubNub and fetch message history as well. However this setup is just a test, so I would like to integrate it into Vuex next.

## Wednesday

- Of course I had to start my day a bit late and working through some Eslint/VSCode issues. However, I think I got it taken it care of. Fingers crossed.
- Hot Vuex running most of the state for the app (where relevant, but even then it still feels overkill). Vuex is also handling the initial fetching of messages from the PubNub service. Everything was quite easy.
- Now that I can requests and updates are fully working with PubNub + Vue, I am just going to clean up things up a bit. Mostly breaking some components out and making some visual tweaks.
- After some minor refactoring and visual tweaking, I now need to add the chat switcher for the mobile view. I am going to used Vuex to store and update the currently active chat.
- Chat switcher is live and working well. At this point I have checked off all the requirements of the brief and nearly all of the "bonus points". Tomorrow I will spend the day adding some light animations, review the code, and refine where necessary before sending it off.

## Thursday

- I was unhappy with the chat roll, so I decided to make some changes. Vuex is now running mutations to help me better display the code. We now have "message groups". This will allow me to clean up the code a little, but also better visually organize the chats that are consecutively from the sender.
