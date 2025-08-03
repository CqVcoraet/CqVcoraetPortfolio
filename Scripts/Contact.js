// Template
var contactTemplate = template("Contact");
var menuBarHeight = contactTemplate.menuBarHeight; // Width of the menu bar
var menuBarWidth = contactTemplate.menuBarWidth; // Height of the menu bar
var textColor = contactTemplate.textColor; // Text color based on dark mode

// Title
var title = document.createElement("div");
title.style.position = "absolute";
title.style.top = menuBarHeight + 100 + "px"; // 100px below the menu bar
title.style.justifyContent = "left";
title.style.left = "50%"; // Center horizontally
title.style.transform = "translateX(-600px)"; // Adjust for half of the content width
title.style.color = textColor;
title.style.fontFamily = "Inter, sans-serif";
title.style.padding = "0 20px";
title.style.textAlign = "left"; // Align text to the left
title.style.fontSize = "65px";
title.style.fontWeight = "bold";
title.innerHTML = "Contact";
document.body.appendChild(title);

// Title Underline
var titleUnderline = document.createElement("div");
titleUnderline.style.position = "absolute";
titleUnderline.style.top = menuBarHeight + 210 + "px"; // 60px below the title
titleUnderline.style.left = "44.5%"; // Center horizontally
titleUnderline.style.transform = "translateX(-50%)"; // Adjust for half of the content width
titleUnderline.style.width = "1000px"; // Width of the underline
titleUnderline.style.height = "0.25px"; // Height of the underline
titleUnderline.style.backgroundColor = textColor; // Color of the underline
titleUnderline.style.zIndex = "1"; // Ensure it appears above other elements
document.body.appendChild(titleUnderline);

// Email Address Text Field
var emailField = document.createElement("input");
emailField.type = "email";
emailField.placeholder = "Enter your email address";
emailField.style.position = "absolute";
emailField.style.top = menuBarHeight + 250 + "px"; // 90px below the underline
emailField.style.left = "50%"; // Center horizontally
emailField.style.transform = "translateX(-600px)"; // Adjust for half of the content width
emailField.style.width = "800px"; // Width of the input field
emailField.style.height = "60px"; // Height of the input field
emailField.style.padding = "15px"; // Padding for better appearance
emailField.style.fontFamily = "Inter, sans-serif";
emailField.style.fontSize = "18px";
emailField.required = true; // Make the field required
emailField.style.color = textColor;
emailField.style.backgroundColor = "transparent"; // Transparent background
emailField.style.border = "1px solid " + textColor; // Border color based on dark mode
emailField.style.borderRadius = "30px"; // Rounded corners
emailField.style.outline = "none"; // Remove default outline
emailField.style.boxSizing = "border-box"; // Include padding and border in element's total width and height
document.body.appendChild(emailField);

// Topic Text Field
var topicField = document.createElement("input");
topicField.type = "text";
topicField.placeholder = "Enter the topic of your message";
topicField.style.position = "absolute";
topicField.style.top = menuBarHeight + 350 + "px"; // 60px below the email field
topicField.style.left = "50%"; // Center horizontally
topicField.style.transform = "translateX(-600px)"; // Adjust for half of the content width
topicField.style.width = "800px"; // Width of the input field
topicField.style.height = "60px"; // Height of the input field
topicField.style.padding = "15px"; // Padding for better appearance
topicField.style.fontFamily = "Inter, sans-serif";
topicField.style.fontSize = "18px";
topicField.required = true; // Make the field required
topicField.style.color = textColor;
topicField.style.backgroundColor = "transparent"; // Transparent background
topicField.style.border = "1px solid " + textColor; // Border color based on dark mode
topicField.style.borderRadius = "30px"; // Rounded corners
topicField.style.outline = "none"; // Remove default outline
topicField.style.boxSizing = "border-box"; // Include padding and border in element's total width and height
document.body.appendChild(topicField);

// Message Text Area
var messageArea = document.createElement("textarea");
messageArea.placeholder = "Enter your message here";
messageArea.style.position = "absolute";
messageArea.style.top = menuBarHeight + 450 + "px"; // 80px below the topic field
messageArea.style.left = "50%"; // Center horizontally
messageArea.style.transform = "translateX(-600px)"; // Adjust for half of the content width
messageArea.style.width = "800px"; // Width of the text area
messageArea.style.height = "320px"; // Height of the text area
messageArea.style.padding = "15px"; // Padding for better appearance
messageArea.style.fontFamily = "Inter, sans-serif";
messageArea.style.resize = "none"; // Disable resizing
messageArea.style.overflow = "auto"; // Enable scrolling if content exceeds height
messageArea.style.fontSize = "18px";
messageArea.style.color = textColor;
messageArea.required = true; // Make the field required
messageArea.style.backgroundColor = "transparent"; // Transparent background
messageArea.style.border = "1px solid " + textColor; // Border color based on dark mode
messageArea.style.borderRadius = "30px"; // Rounded corners
messageArea.style.outline = "none"; // Remove default outline
messageArea.style.boxSizing = "border-box"; // Include padding and border in element's total width and height
document.body.appendChild(messageArea);

// Submit Button
var submitButton = document.createElement("button");
submitButton.innerHTML = "Submit";
submitButton.style.position = "absolute";
submitButton.style.top = menuBarHeight + 800 + "px"; // 350px below the message area
submitButton.style.left = "50%"; // Center horizontally
submitButton.style.transform = "translateX(-600px)"; // Adjust for half of the content width
submitButton.style.width = "200px"; // Width of the button
submitButton.style.height = "60px"; // Height of the button
submitButton.style.color = textColor // Text color
submitButton.style.backgroundColor = "#FFC900"; // Background color for the button
submitButton.style.fontFamily = "Inter, sans-serif";
submitButton.style.fontSize = "20px";
submitButton.style.fontWeight = "bold"; // Bold text
submitButton.style.border = "none"; // No border
submitButton.style.borderRadius = "30px"; // Rounded corners
submitButton.style.cursor = "pointer"; // Pointer cursor on hover
submitButton.style.outline = "none"; // Remove default outline
submitButton.style.boxSizing = "border-box"; // Include padding and border in element's total width and height
submitButton.onclick = function() {
    showCustomAlert("The contact system is currently not setup yet. Please check later.");
}
document.body.appendChild(submitButton);

// Add this function to your JS file
function showCustomAlert(message) {
    // Create overlay
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0,0,0,0.5)";
    overlay.style.zIndex = "9999";
    
    // Create alert box
    var alertBox = document.createElement("div");
    alertBox.style.position = "absolute";
    alertBox.style.top = "50%";
    alertBox.style.left = "50%";
    alertBox.style.transform = "translate(-50%, -50%)";
    alertBox.style.background = "#FFC900";
    alertBox.style.color = "#000000";
    alertBox.style.padding = "32px 48px";
    alertBox.style.borderRadius = "20px";
    alertBox.style.fontFamily = "Inter, sans-serif";
    alertBox.style.fontSize = "22px";
    alertBox.style.boxShadow = "0 4px 24px rgba(0,0,0,0.2)";
    alertBox.innerHTML = message;

    // Close button
    var closeBtn = document.createElement("button");
    closeBtn.innerHTML = "OK";
    closeBtn.style.marginTop = "24px";
    closeBtn.style.padding = "8px 24px";
    closeBtn.style.fontSize = "18px";
    closeBtn.style.border = "none";
    closeBtn.style.alignContent = "center";
    closeBtn.style.borderRadius = "12px";
    closeBtn.style.background = "#232323";
    closeBtn.style.color = "#FFC900";
    closeBtn.style.cursor = "pointer";
    closeBtn.onclick = function() {
        document.body.removeChild(overlay);
    };

    alertBox.appendChild(document.createElement("br"));
    alertBox.appendChild(closeBtn);
    overlay.appendChild(alertBox);
    document.body.appendChild(overlay);
}