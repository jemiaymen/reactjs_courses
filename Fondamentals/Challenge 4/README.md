## Step 1
1. create a new file called `Users.jsx`
2. inside this file, create a functional component called `Users``
3. in the component, create a `users` array with the following objects, where each object represents a user with :
```javascript
const users = [
  { id: 1, name: "Foulen", age: 25 },
  { id: 2, name: "Foulena", age: 39 },
  { id: 3, name: "Joe", age: 22 },
];
```
4. use `.map()`method to render list of users. Each user's `name` and `age` should be displayed inside a `<div>` element. Use the `id`as the unique `key` for each list item.

## Step 2

1. create a new file called `ProductList.jsx`
2. inside this file, create a component called `ProductList`
3. create a `products` array with the following objects, where each object represents a product with `id` , `productName` and `price``

```javascript
const products = [
  { id: 1, productName: "Phone", price: 699 },
  { id: 2, productName: "Laptop", price: 1200 },
  { id: 3, productName: "Headphones", price: 199 },
];

```

4. use the `.map()`method to render the list of products like `users`in the Step 1
5. in your `App.jsx` file, import the `Users` and `ProductList` components
6. inside the `App` component's render both the `Users` and `ProductList`components
