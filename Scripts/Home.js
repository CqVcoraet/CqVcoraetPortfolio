// Template
var homeTemplate = template("Home");
var menuBarHeight = homeTemplate.menuBarHeight; // Width of the menu bar
var menuBarWidth = homeTemplate.menuBarWidth; // Height of the menu bar
var textColor = homeTemplate.textColor; // Text color based on dark mode

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
title.innerHTML = "CqVcoraetPortfolio";
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

// Body Paragraph #1
var bodyParagraph1 = document.createElement("div");
bodyParagraph1.style.position = "absolute";
bodyParagraph1.style.top = menuBarHeight + 260 + "px"; // 100px below the underline
bodyParagraph1.style.left = "50%"; // Center horizontally
bodyParagraph1.style.transform = "translateX(-600px)"; // Adjust for half of the content width
bodyParagraph1.style.color = textColor;
bodyParagraph1.style.fontFamily = "Inter, sans-serif";
bodyParagraph1.style.padding = "0 20px";
bodyParagraph1.style.textAlign = "left"; // Align text to the left
bodyParagraph1.style.fontSize = "20px";
bodyParagraph1.style.lineHeight = "1.5"; // Line height for better readability
bodyParagraph1.style.width = "1000px"; // Width of the paragraph
bodyParagraph1.style.fontWeight = "normal";
bodyParagraph1.innerHTML = "Welcome to my portfolio! This is a personal project I made so you can know a little bit more about me and what I am currently working on plus my skills and experiences. I am passionate about programming, 3D modeling, innovation, and AI and are really excited about the future of our technologies. I believe we have a bright future in the tech industry as long as we have growth and innovative mindsets.";
document.body.appendChild(bodyParagraph1);