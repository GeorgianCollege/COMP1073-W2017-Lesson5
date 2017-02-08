/* javascript lives here */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () { // Beginning of the IIFE

  console.log("App Started...");
  console.info(`Page Title: ${document.title}`); // string interpolation

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
      let myContent = `It was a sunny day in Florida.
      It felt great. I love the sun.`;

      // STEP 3 - assign the variable with your content to the
      // textContent propery of the reference variable
      FirstParagraph.textContent = myContent;

      let SecondParagraph = document.getElementById("SecondParagraph");

      let myHTMLContent = `<h2>Second Heading</h2>
                          <p>This is an inner paragraph to the Second Paragraph</p>`;

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

      // Step 1 - Setup references to the elements you need to hook into
      let HideButton = document.getElementById("HideButton");
      let HalfSizeButton = document.getElementById("HalfSizeButton");
      let ThreeQuarterSizeButton = document.getElementById("ThreeQuarterSizeButton");
      let ShowButton = document.getElementById("ShowButton");
      let FirstProjectImage = document.getElementById("FirstProjectImage");

      // Step 2 - Setup event listeners (register event listeners) for each elements
      HideButton.addEventListener("click", function(){
        FirstProjectImage.style.display = "none";
      });

      HalfSizeButton.addEventListener("click", function(){
        FirstProjectImage.style.maxWidth = "50%";
      });

      ThreeQuarterSizeButton.addEventListener("click", function(){
        FirstProjectImage.style.maxWidth = "75%";
      });

      ShowButton.addEventListener("click", function(){
        FirstProjectImage.style.display = "block";
        FirstProjectImage.style.maxWidth = "100%";
      });

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

