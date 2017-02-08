/* javascript lives here */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () { // Beginning of the IIFE

  console.log("App Started...");
  console.info("Page Title: " + document.title);

  switch (document.title) {
    case "Home":

      // declare / initialize firstHeading variable
      // firstHeading variable creates a link (reference) to the H1 Element
      let firstHeading = document.getElementById("firstHeading");

      firstHeading.style.color = "#000000";
      firstHeading.style.fontWeight = "500";
      firstHeading.style.opacity = "0.5";


      // THREE Steps for injecting content onto your page
      // STEP 1 - create a reference to an Element (reference variable)
      let FirstParagraph = document.getElementById("FirstParagraph");

      // STEP 2 - create a variable that contains your content (content variable)
      let myContent = "It was a sunny day in Florida. It felt great. I love the sun.";

      // STEP 3 - assign the variable with your content to the
      // textContent propery of the reference variable
      FirstParagraph.textContent = myContent;

      let SecondParagraph = document.getElementById("SecondParagraph");

      let myHTMLContent = "<h2>Second Heading</h2>"
        + " <p>This is an inner paragraph to the Second Paragraph</p>";

      SecondParagraph.innerHTML = myHTMLContent;

      // create a reference to the button on the page (index.html)
      let clickMeButton = document.getElementById("clickMeButton");

      // add an event listener - for the click event and call the Click function
      clickMeButton.addEventListener("click", Click);

      // click function - used as an event handler
      function Click() {
        console.log("clicked!");
      }

      break;

    case "Projects":

      let myVariable1 = 10;
      let myVariable2 = 20;
      let myVariable3 = 30;
      let myVariable4 = 40;

      let myArray = ["a value", "another value", 10, true];

      console.log("Outer: " + myVariable1);

      console.log("Parent Value: " + Parent(myVariable1, myVariable2, myVariable2, myVariable4, myVariable3));

      function Parent() {
        arguments[0] += 12;
        console.log("Arguments: " + arguments[0]);

        return arguments[0];

      }


      break;
    case "Contact":
      let FullName = document.getElementById("FullName");
      let ContactNumber = document.getElementById("ContactNumber");
      let Email = document.getElementById("Email");
      let Message = document.getElementById("Message");
      let SendButton = document.getElementById("SendButton");

      SendButton.addEventListener("click", function(event){
        event.preventDefault();

        console.log(FullName);
        console.log(ContactNumber);
        console.log(Email);
        console.log(Message);

      });

      break;
  }

  let myVariable = 500;

})(); // end of the IIFE

