// 🔍 What is the DOM?
//Document Object Model
// The DOM is a tree-like structure created by the browser to represent the HTML elements on a webpage. JavaScript can access and change this structure dynamically.
// Add the html Tags and Remove the tags

// Here's a **comprehensive list of DOM functionalities** in JavaScript that work in **Google Chrome**, organized by category. This includes all major ways you can interact with and manipulate the DOM using JavaScript in the browser.

// ---

// ## 🌐 **DOM Functionalities in JavaScript (Chrome Browser)**

// ---

// ### 1. 🔍 **Finding (Selecting) Elements**

// #### By ID

// ```javascript
// document.getElementById("myId");
// ```

// #### By Class Name

// ```javascript
// document.getElementsByClassName("myClass");
// ```

// #### By Tag Name

// ```javascript
// document.getElementsByTagName("div");
// ```

// #### By CSS Selector (returns first match)

// ```javascript
// document.querySelector(".myClass");
// ```

// #### By CSS Selector (returns all matches)

// ```javascript
// document.querySelectorAll("ul li");
// ```

// ---

// ### 2. 📝 **Reading & Changing Content**

// #### `textContent` – plain text

// ```javascript
// element.textContent = "New Text";
// ```

// #### `innerHTML` – HTML content

// ```javascript
// element.innerHTML = "<strong>Bold</strong>";
// ```

// #### `innerText` – visible text only

// ```javascript
// element.innerText = "Visible Text";
// ```

// ---

// ### 3. 🎨 **Changing Styles**

// ```javascript
// element.style.color = "red";
// element.style.backgroundColor = "yellow";
// ```

// Or add/remove class:

// ```javascript
// element.classList.add("highlight");
// element.classList.remove("highlight");
// element.classList.toggle("active");
// ```

// ---

// ### 4. 🛠️ **Attributes**

// ```javascript
// element.setAttribute("title", "Tooltip");
// let val = element.getAttribute("title");
// element.removeAttribute("title");
// ```

// ---

// ### 5. 🧱 **Creating, Appending & Removing Elements**

// #### Create element

// ```javascript
// let newDiv = document.createElement("div");
// newDiv.textContent = "I'm new!";
// ```

// #### Append to DOM

// ```javascript
// document.body.appendChild(newDiv);
// ```

// #### Insert before another element

// ```javascript
// parent.insertBefore(newDiv, existingChild);
// ```

// #### Remove element

// ```javascript
// element.remove();
// ```

// ---

// ### 6. 🎯 **Event Handling**

// #### Add Event

// ```javascript
// button.addEventListener("click", function() {
//   alert("Clicked!");
// });
// ```

// #### Remove Event

// ```javascript
// function myFunc() {}
// button.removeEventListener("click", myFunc);
// ```

// ---

// ### 7. 📦 **Form & Input Manipulation**

// ```javascript
// let input = document.querySelector("input");

// // Read/Set value
// input.value = "New Value";

// // Check if checked
// checkbox.checked = true;
// ```

// ---

// ### 8. 🔁 **DOM Traversal**

// ```javascript
// element.parentElement
// element.children
// element.firstElementChild
// element.lastElementChild
// element.nextElementSibling
// element.previousElementSibling
// ```

// ---

// ### 9. 🧾 **DOM Properties**

// ```javascript
// document.title = "New Page Title";
// document.URL
// document.body
// document.head
// ```

// ---

// ### 10. 🧪 **Useful Methods**

// ```javascript
// document.createTextNode("Some text");
// element.cloneNode(true); // Deep clone
// element.contains(otherElement);
// element.matches(".myClass"); // Matches selector?
// ```

// ---

// ### ✅ Try It in Chrome Console:

// Just open Developer Tools → Console and try running any of the above examples on an HTML page.

// Would you like a downloadable cheatsheet or a live demo webpage to explore all these features?

