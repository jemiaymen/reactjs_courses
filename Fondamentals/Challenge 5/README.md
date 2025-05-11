## Step 1

1. Create a new file called `Person.jsx`.

2. Inside this file, create a functional component called `Person`.

3. This component should accept props and render:

    - a `<h2>` element that displays the person's name.
    -a `<p>` element that displays the person's age.
    - Use props.name and props.age to display the dynamic values passed from the parent component.

## Step 2

1. Create a new file called `Product.jsx`.

2. Inside this file, create a functional component called `Product`.

3. This component should accept props and render:

    -a `<h2>` element that displays the product's name.
    -a `<p>` element that displays the product's price.
    - Use `props.name` and `props.price` to display the values passed from the parent component.

## Step 3

1. In your `App.jsx` file, import the `Person` and `Product` components:

    - import Person from "./Person";
    - import Product from "./Product";
    - Inside the `App` component, pass dynamic data as `props` to both `Person` and `Product` components:

2. Pass name and age as `props` to the `Person` component.
3. Pass name and price as `props` to the `Product` component.
