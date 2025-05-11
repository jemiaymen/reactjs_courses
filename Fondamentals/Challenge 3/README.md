### Part 1

1. create a new file called `Greet.jsx`
2. inside this file, create a functional component named `Greet`
3. the Greet component should return a `<div>`containing:
    - a `<h1>`element that dynamically displays a greeting message.
    - a `<p>`element that dynamically displays the current date.
4. use javascript expressions inside `{ }` to dynamically render the following :
    - a `name`variable containing a name, such as `"Joe"``
    - a `new Date()` object to display the current date
### Part 2

1. create a new file called `ProductInfo.jsx`
2. inside this file, create a functional component named `ProductInfo``
3. the ProductInfo component should return a `<div>`that dynamically displays product details:
    - use a `product`object that contains the following properties:
        - name : `"Macbook"`
        - price : `2000``
        - availability : `"In stock"``
4. display the product name, price and availability using `{ }`
5. import `Greet` and `ProductInfo`components, inside the App component's return statement, render both components