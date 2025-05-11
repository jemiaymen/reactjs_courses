## Step 1

1. Create a new file called counterReducer.js.
2. Inside this file, define a reducer function that will manage a simple counter's state.

## Step 2

1. Create a new file called Counter.jsx.
2. Inside this file, create a functional component called Counter.
3. Use the useReducer hook to manage the state of the counter.

## Step 3
1. Modify the counterReducer.js file to add more actions for increasing and decreasing by a specific amount.
2. Update the Counter.jsx file to allow the user to increase or decrease the count by a specific value using an input field.
3. In your App.jsx file, import and render the Counter component.

```javascript
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>React useReducer Example</h1>
      <Counter />
    </div>
  );
}

export default App;
```