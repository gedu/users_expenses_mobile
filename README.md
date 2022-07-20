# Mobile challenge

Implement an expenses list fetching all expenses from the provided API. Allow the user to add notes and upload receipt pictures to each expense.

See the [API details](https://github.com/gedu/users_expenses_mobile/tree/main/api) for implementation.

## Functional requirements

- User can list expenses DONE
- User can add a comment on an expense DONE
- User can filter on expenses (client side filters) DONE
- User can add a receipt image on an expense DONE

## Features

Multiple app screen application using ReactNative and Java/Kotlin/Swift:

- Visually pleasing experience
- A "componentized" approach
- All in TS
- A dialog to show the communication between Native and RN (only for Android)
- Zustand as state management 
- Localization
- Test
- Some ESLint rules

## Running the API

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
