# React Week 5: Redux State Management

A React app built with TypeScript and Vite that demonstrates
global state management using Redux without Redux Toolkit.

## How to Install and Run

1. Clone the repository
   git clone https://github.com/VeronicahWanjuu/react-dev-week5-Activity.git

2. Go into the project folder
   cd react-dev-week5-Activity

3. Install dependencies
   npm install

4. Start the dev server (uses Vite)
   npm run dev

5. Open browser at http://localhost:5173

## Project Structure

src/
├── components/
│   ├── Counter.tsx
│   └── Counter.module.css
├── store/
│   ├── store.ts
│   ├── actions/
│   │   └── counterActions.ts
│   └── reducers/
│       ├── counterReducer.ts
│       └── index.ts
├── App.tsx
└── main.tsx

## How Redux Works Here

The store holds the global state for the whole app.
Actions are plain objects that describe what happened.
The reducer takes the current state and an action and
returns a new state. The Provider wraps the whole app
so any component can access the store. useSelector
reads from the store and useDispatch sends actions to it.

## Middleware

redux-logger is added as middleware so every action and
state change gets logged to the browser console. This
made debugging much easier during development because
I could see exactly what was happening with every click.

## Challenges

Setting up the store manually without Redux Toolkit was
harder than I expected. I kept getting TypeScript errors
with the logger middleware types until I installed
@types/redux-logger separately. That taught me that some
libraries need their types installed as a separate package.

Combining reducers with combineReducers also confused me
at first because I did not understand why the state shape
changed from state.value to state.counter.value. Once I
understood that each reducer manages its own slice of state
it made a lot more sense.

## Libraries Used

- React 18
- TypeScript
- Vite
- Redux
- React-Redux
- Redux-Logger
- ESLint
