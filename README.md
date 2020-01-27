# tour-of-heroes-and-villains
## Angular app. with the following additions:
1.  Container-presenter component architecture 
2.  [NgRx](https://github.com/ngrx/platform) state management

# Available on Stackblitz
## Branches:
1.  [**master** branch](https://stackblitz.com/github/KunalChoudhary521/tour-of-heroes-and-villains)
    -  :white_check_mark: Added NgRx to perform state management
    -  :white_check_mark: Added UI tests using Cypress
2.  [**cp-architecture** branch](https://stackblitz.com/github/KunalChoudhary521/tour-of-heroes-and-villains/tree/cp-architecture)
    -  Messages list grows when switching between **Dashboard** and **Heroes** tabs. Heroes are retrieved from the backend when either tab is clicked. No state management is involved.

# UI Testing via Cypress
## How to setup Cypress for the first time
1.  Run Angular application ```ng serve```
2.  Run cypress  ```npm run e2e```
3.  Select spec to run from cypress GUI
