---
title: "React Image Gallery Walkthrough"
description: "A step-by-step guide to creating a basic  image gallery component with React."
---
### Cover note
The content included in this folder was researched and written by me. My purpose in creating it was to A: provide a set of instructions which, when followed, allow a user to create an image gallery component in React, and B: in doing so, illustrate a conceptual framework that is sufficiently generic to be applied and adapted to a wide variety of use
cases. 

Notably, the component created by this procedure is minimal in terms of its features and styling. It is intended to be a starting point for developers who wish to create a more complex and fully-featured image gallery component. Furthermore, it is dependent on both its prerequisites and its parent component for its functionality. Its intended audience is developers who are familiar with React and JavaScript, but who may not have experience creating image gallery components.

## Objectives:
1. Understand the conceptual structure of a React image gallery.
2. Implement a basic, but functional, React image gallery.
3. Apply some basic styling to prevent excessive element movement and improve appearance.

## Prerequisites:
1. Have an IDE (such as VSCode) downloaded and configured, and be comfortable with its basic operation.
2. Have a React project set up. Vite is an excellent tool for scaffolding React projects.
3. A basic understanding of JavaScript, React, and CSS.
4. A set of images (links to web addresses) that you would like to display.

## Overview:
This walk-through will leverage React’s `useState` hook to update the index of the specific image we want to display. `useState` is fundamental to React—if not already comfortable with it, please stop now and familiarize yourself: [React useState](https://react.dev/reference/react/useState).

Broadly speaking, we will pass an array of image links into our React component, and store a reference to the image we wish to display in our component’s state. To display different images, we will allow the user to update the state by clicking forward and back buttons.

## Walk Through:

1. Initializing the component:

    a. Begin by creating a new file, named `ImageGallery.jsx`, wherever you are keeping your component files (for those using Vite, that will likely be `src/components` in your project directory).

    b. Import the `useState` hook from React by writing, at the top of the file:

    ```javascript
    import { useState } from 'react';
    ```

    c. Next, define your functional component by writing (just beneath your import statement):

    ```javascript
    function ImageGallery({ imageArray }) {
      return (<></>)
    }
    ```

    d. And, finally, export your function at the bottom of the file:

    ```javascript
    export default ImageGallery;
    ```

    So far, we have imported the [`useState`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A40%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A40%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") hook, created the scaffolding of our function, and exported it so that we can use it elsewhere. Now, let’s fill out the functionality.

    We will place the logic of our component between the function statement and the return statement.

    e. To begin, let’s create a state variable to track an array index. We will initialize this to 0, the first element in the array. Give the variable a clear name that describes its purpose.

    ```javascript
    const [imgIndex, setImgIndex] = useState(0);
    ```

    As hinted by my variable name, this state variable is going to refer to an image in our input array by its index.

2. Rendering the image

    Currently, our function returns an empty JSX fragment.

    a. To render our image, we’ll first place an [`img`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A60%2C%22character%22%3A49%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") element inside our fragment. In the [`img`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A60%2C%22character%22%3A49%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition")’s [`src`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A150%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") attribute, we’ll pass in the image link located at our current index value in the [`imageArray`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A33%2C%22character%22%3A32%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") argument.

    ```javascript
    return (
      <>
         <img src={imageArray[imgIndex]} />
      </>
    );
    ```

    Now, if you render that component, you should see the first image in your array rendered.

    If you do not, ensure that your image is correctly linked before reviewing the previous steps.

3. Adding navigation buttons

    At this point, we have the ability to render any photo in our array, simply by updating the value in our state. We want to give the user this ability as well.

    a. To do so, we’ll first create a pair of buttons to represent moving to the previous and the next image, respectively. Add the buttons to the JSX fragment.

    ```javascript
    return (
      <>
         <button>Prev</button>
         <img src={imageArray[imgIndex]} />
         <button>Next</button>
      </>
    );
    ```

    If you click on these buttons, you’ll notice that they do nothing. Let’s amend that.

    b. First, we’ll write a function to handle incrementing our state variable.

    ```javascript
    function handleClickNext() {
      setImgIndex((prev) => (prev + 1) % imageArray.length);
    };
    ```

    Here, we used the updater function provided by React’s [`useState`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A40%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A40%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") hook, passing it a callback function. When the updater function is passed a callback function, it provides the previous state value for reference. We add one to this value to move to the next image in our array, then use the modulo operation to ensure that, if we attempt to advance past the final image, we will be returned to the start of the array.

    Note: the modulo operator executes integer division and returns the remainder. For example, `4 % 3` is calculated by determining how many times 3 can be removed from 4 while maintaining a positive integer result. 3 can be subtracted from 4 only once before further subtraction would result in a negative. `4 – 3 = 1`, which is our remainder. For more, please visit MDN’s documentation on the operator’s JavaScript implementation.

    c. Let’s attach this function to our next button as an [`onClick`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A104%2C%22character%22%3A59%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") event listener.

    ```javascript
    return (
      <>
         <button>Prev</button>
         <img src={imageArray[imgIndex]} />
         <button onClick={handleClickNext}>Next</button>
      </>
    );
    ```

    Now, if you click next, you should see the next image. If you’re curious how this works, review the React documentation on the [`useState`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A40%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A40%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") hook.

    d. With that done, all we have left is to make our ‘Prev’ button work. We’ll do this in almost exactly the same way we implemented our ‘Next’ button. However, there is one small wrinkle. When we click ‘Prev’ from index 0, we want to wrap around to the end of the array. Simply using the module operator, as we did for ‘Next’, will result in a negative. To avoid this, we want to add the length of our array to the decremented index before using the modulo operator. (To get a better understanding of why this is necessary, try the function without adding length, then without the modulo operator).

    ```javascript
    function handleClickPrev() {
      setImgIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
    };
    ```

    e. Finally, we attach our [`handleClickPrev`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A121%2C%22character%22%3A17%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") function to the ‘Prev’ button, and we’re off on our merry way, free to click around and around our image gallery.

    ```javascript
    return (
      <>
         <button onClick={handleClickPrev}>Prev</button>
         <img src={imageArray[imgIndex]} />
         <button onClick={handleClickNext}>Next</button>
      </>
    );
    ```

Tying it all together

To review:
- We initialized a simple React component.
- Initialized the [`useState`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A40%7D%7D%2C%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A14%2C%22character%22%3A40%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") hook to track an index value.
- Added JSX for an image and two buttons to our return.
- Set the image’s [`src`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A22%2C%22character%22%3A150%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") to dynamically render the image whose index is in state.
- Wrote and attached [`onClick`](command:_github.copilot.openSymbolFromReferences?%5B%22%22%2C%5B%7B%22uri%22%3A%7B%22scheme%22%3A%22file%22%2C%22authority%22%3A%22%22%2C%22path%22%3A%22%2FUsers%2Fmaahsnd%2Fcode%2Fprojects%2Ftechnical-writing-samples%2Freact-gallery-procedural%2Freact-image-gallery-walkthrough.md%22%2C%22query%22%3A%22%22%2C%22fragment%22%3A%22%22%7D%2C%22pos%22%3A%7B%22line%22%3A104%2C%22character%22%3A59%7D%7D%5D%2C%22fa40ea2c-8152-410b-b165-7f34ad847453%22%5D "Go to definition") functions to increment and decrement our index.

With that, we have a functional React image gallery, from scratch. It certainly looks like it, too. To make it your own, and to give it a modicum of visual appeal, apply some CSS [I’ll provide some basic suggestions in the postscript]. If anything went wrong along the way, consult the full code below, and ensure that you have all prerequisites.

```javascript
import { useState } from 'react';

function ImageGallery({ imageArray }) {
  const [imgIndex, setImgIndex] = useState(0);

  function handleClickPrev() {
     setImgIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  }

  function handleClickNext() {
     setImgIndex((prev) => (prev + 1) % imageArray.length);
  }

  return (
     <>
        <button onClick={handleClickPrev}>Prev</button>
        <img src={imageArray[imgIndex]} />
        <button onClick={handleClickNext}>Next</button>
     </>
  );
}

export default ImageGallery;
```

Note that there are many edge cases involved in an image gallery. The image links could be invalid, the array could be empty, there could be only one image (rendering the buttons moot)—just to name a few. These are outside the scope of this document, but handling them is an important consideration.

## Basic CSS Suggestions:

These simple style rules will serve to make our image gallery a bit more stable and more robust. Note, in this section, I will focus only on the JSX and CSS, as the function logic is not relevant.

1. Restructuring our JSX

    a. To begin, we’ll add a pair of div elements to serve as containers for our image and our entire gallery (image and buttons), respectively.

    ```javascript
    return (
      <div>
         <button onClick={handleClickPrev}>Prev</button>
         <div>
            <img src={imageArray[imgIndex]} />
         </div>
         <button onClick={handleClickNext}>Next</button>
      </div>
    );
    ```

    Notice that for the outer div, I simply converted our fragment into a div element. We could have used a div in the place of the fragment from the outset, but as we were not applying any style to it, I opted for the fragment, as it is slightly simpler.

    b. We have two div elements, which we will want to apply different styles to. To allow us to easily differentiate, we’ll add classes to these elements and to our img as well.

    ```javascript
    return (
      <div className="galleryContainer">
         <button onClick={handleClickPrev}>Prev</button>
         <div className="imageContainer">
            <img className="galleryImage" src={imageArray[imgIndex]} />
         </div>
         <button onClick={handleClickNext}>Next</button>
      </div>
    );
    ```

    Before we can apply any rules to these classes, we need to create and import a CSS file.

2. Initializing CSS

    a. Create a new file named ImageGallery.css in the same directory as our component. Next, import that file into our component by inserting the following line directly beneath where we import useState from React.

    ```javascript
    import './ImageGallery.css';
    ```

3. Styling containers

    a. Now, we can add some styles, starting with the outermost element. Add the following code to your CSS file:

    ```css
    .galleryContainer {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ```

    This makes our container a flexbox and ensures that the elements it contains are centered both vertically and horizontally.

    b. Next, we’ll style our image container by creating a class for it and defining a set of rules. Our main goal here is to give the image container a fixed size so that it does not resize with each image, which can result in other elements on the screen getting ‘bumped’ around.

    ```css
    .imageContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid black;
      border-radius: 10px;
      background-color: pink;
      height: 40vh;
      width: 60vh;
    }
    ```

    Again, we’re making our container a flexbox and centering the elements within it. Then, we declare some purely aesthetic rules: adding a thin black border, rounding its corners (border-radius), and setting the background of our image container to pink. Any space in the container not occupied by the image will now be pink. This is almost certainly not the best color for your application, design-wise, but it is far and away my favorite CSS color. Feel free to change it to suit your preference.

    The final (and most important) two rules in the class give our container a fixed height and width. This ensures that its presence on the page is constant, restricting our re-rendering to the image itself. I use viewport units here, as I am simply rendering the component directly and in an isolated context. Other size units could (and should) be used for other situations; just be sure that the size is fixed.

    c. You may have noted that our containers have some of the same rules. Before moving on, let’s make our CSS a bit more concise by having them share one set of declarations.

    ```css
    .galleryContainer,
    .imageContainer {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    ```

    Now, instead of needing to state the same rules twice, we just need to state that our first rule set applies to both classes. That eliminated three lines of code, but don’t spend too long admiring the open space; we have one more rule to add.

4. Restricting img dimensions

    a. For our final trick, we need to give our img element some instructions on how to behave. Without these, our carefully constructed containers will be ignored, and the image will be rendered at whatever its original size is.

    ```css
    .galleryImage {
      max-width: 100%;
      max-height: 100%;
    }
    ```

    Setting max-width and max-height effectively enforces the borders of our image container by causing the image to shrink to fit its bounds.

    To further beautify the gallery, consider improving the button styling, adding some transitions, animations, hover effects. Make it your own.
