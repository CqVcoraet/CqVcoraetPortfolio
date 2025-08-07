// Template
var skillsTemplate = template("Skills");
var menuBarHeight = skillsTemplate.menuBarHeight; // Width of the menu bar
var menuBarWidth = skillsTemplate.menuBarWidth; // Height of the menu bar
var textColor = skillsTemplate.textColor; // Text color based on dark mode
var skills = ["Autodesk Inventor", "Onshape", "Shapr3D", "Visual Studio Code", "GitHub", "JavaScript", "HTML", "CSS", "Java", "Swift", "SwiftUI", "Chess", "Microsoft Word", "Microsoft Excel"]

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
title.innerHTML = "Skills";
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

// Skills Container
var skillsContainer = document.createElement("div");
skillsContainer.style.position = "absolute";
skillsContainer.style.top = menuBarHeight + 250 + "px"; // 40px below the title underline
skillsContainer.style.left = "44%"; // Center horizontally
skillsContainer.style.transform = "translateX(-50%)"; // Adjust for half of the content width
skillsContainer.style.display = "flex";
skillsContainer.style.flexWrap = "wrap"; // Allow skills to wrap to the next line
skillsContainer.style.justifyContent = "left"; // Center skills horizontally
skillsContainer.style.width = "1000px"; // Width of the skills container
skillsContainer.style.gap = "20px"; // Space between skills
skillsContainer.style.padding = "0 20px"; // Padding around the skills
skillsContainer.style.boxSizing = "border-box"; // Include padding and border in element's total width and height
skillsContainer.style.zIndex = "0"; // Ensure it appears below the title
skillsContainer.innerHTML = skills.map(skill => {
    return `<div style="font-family: Inter, sans-serif; font-size: 20px; color: ${textColor}; padding: 10px; border: 1px solid ${textColor}; border-radius: 25px; text-align: center;">${skill}</div>`;
}).join("");
document.body.appendChild(skillsContainer);