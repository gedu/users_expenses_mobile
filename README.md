# Mobile challenge

Implement an expenses list fetching all expenses from the provided API. Allow the user to add notes and upload receipt pictures to each expense.

See the [API details](https://github.com/pleo-io/mobile-challenge/tree/master/api) for implementation.

## Functional requirements

- User can list expenses DONE
- User can add a comment on an expense DONE
- User can filter on expenses (client side filters) DONE
- User can add a receipt image on an expense DONE

## General requirements

Multiple app screen application using ReactNative and Java/Kotlin/Swift:

- A visually pleasing experience, you don’t have to be a designer but you must have put an effort into making this look good
- A "componentized" approach, split your code into small building blocks, showcase your clean architecture skills.
- Screens can be written on JS/TS but at least one should be native
- The use of any libraries or frameworks as long as you can explain to us why you chose them.
- A brief description of your project. How long did it take? Which part was the hardest to implement? What functionalities are you most proud of?
- Between realms communication (JS -> Native or Native -> JS). For example: Expense List (JS Realm) sends properties to next Fragment/ViewController (Native Realm) and this responds back to the (JS Realm) with some result
- Test (e2e/unit test)

## Project Description

It took me around 23hs, I couldn't work many hours per day because I just moved to Spain, and had to make a lot of paperworks, but I've been tranking the hours.  
I struggled with 2:

- Picture upload: I had issues with axios and the server, there were some configurationa that I have to add to make it works with `express-fileupload`, was a combination with `uri` and `Content-Disposition` to make it works. And for pagination I had to make a fix on the API, `String(req.query.limit)` and `String(req.query.offset)`
- Navigation Test: Had some issues mocking and getting the right state, seems like the latests versions of Jest had some issues with the latests versions of navigation.
- I most proud of the state managment architecture. I like the way I can update in realtime, the performance, low re-render and fully typed.
- Then I like the small UI features, like hiding the search bar, the dynamic views (like comments, if it has a picture showing an icon)
- I made the comment dialog full android native, so I can show UI made native and the communication between RN and Android, and made it typed.
- For testing: I made a bit of UnitTest and Integration test (just because of the time, I didn't want to wait longer)

## Nice to have

Want to go the extra mile? Here's few suggestion of things we'd like to see (or go crazy and implement what you think will impress us).

- Implement with a state management library (Redux, Mobx, VueX, Graphql, ...): Used Zustand
- Implement solution in TypeScript DONE
- Localization: support for multiple languages (English, French, ...), for Spanish and English
- CI/CD (Travis/GH Actions/ Etc)
- Push Notification (extensions/Cuztomized)
- Share Extension

## What we're looking for

- Using high-quality existing libraries or small amounts of custom code.
- Production grade code (clean, maintainable, reusable code)
- Showing your work through your commit history
- Polish and visual creativity
- Pride in craftsmanship

## Super important 👇

Please note that while you are free to use libraries of your choosing, we encourage you to write at least some your own code. This is your chance to really impress us with your skills.

## API

- Go to the api folder
- Install dependencies `yarn install`
- Run it `yarn start`

## Running the app on Android

- Run first the API
- Install dependencies with `yarn`
- Then run `npx react-native run-android`

Note: Sometimes it doesn't load the app into the emulator you can solve this running `adb reverse tcp:3000 tcp:3000`, you will need the `adb` in your PATH.

## Videos

[Basic flow](https://github.com/gedu/users_expenses_mobile/blob/main/resources/expenses_flow.mov)

[Error state](https://github.com/gedu/users_expenses_mobile/blob/main/resources/expenses_error.mov)

[Loading state](https://github.com/gedu/users_expenses_mobile/blob/main/resources/expenses_loading.mov)

[Tests cases](https://github.com/gedu/users_expenses_mobile/blob/main/resources/tests_passed.png)
