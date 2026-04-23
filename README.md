# Know It All

Know It All is a trivia app with multiple categories like Video games, General Trivia and Vehicles, With a Difficulty selector for more of a challenge and Storage to keep track of Scoring, Made with the offical OpenTDB api and created with Ionic 7 and Angular

## Features

- Three trivia categories - General Knowledge, Vehicle and Video Games
- Adjustable difficulty - Easy, Medium and Hard
- Profile page with persistent username and score history

## Technologies Used

- Ionic 7
- Angular (Standalone Components)
- RouterLink
- HttpClient + RxJS Observables
- @ionic/storage-angular
- @capacitor/dialog

## API

This app uses [OpenTDB](https://opentdb.com/) - a free, open trivia API with no API key needed

## Limitations

- App uses OpenTDB which has a rate limit, This limit is hard to hit however if you quickly keep swapping between Trivias you may hit it, Going back to the home and back to a trivia will allow you to see it

## Other
- Ran on the MIT license, Feel free to modify it and change it as you wish to fit your needs or change it to suite your own API. However many APIs have their own restrictions on how you are allowed to use them, Make sure to follow their TOS. No support is given
---
# How to Run
### Note: Will only work if you have Ionic 7+, Angular and Node.js installed
1. Clone the repository
   
   ```
   git clone https://github.com/Dominik-Razik/KnowItAll.git
   ```

2. Go into the folder
   
   ```
   cd KnowItAll
   ```
   
3. Download needed modules
   
   ```
   npm install
   ```

4. Run the app

   ```
   ionic serve
   ```

## Usage

- Select a difficulty on the home screen before starting a quiz
- Tap on one of the category cards
- Answer each question by tapping an answer
- Your score is saved automatically after every answer
- Visit your profile to view your score or changing your username
