// Template
var valuesTemplate = template("Values");
var menuBarHeight = valuesTemplate.menuBarHeight; // Width of the menu bar
var menuBarWidth = valuesTemplate.menuBarWidth; // Height of the menu bar

// Vars
var lines;
var spacing;

// To help with spacing from paragrah to the next value title. Use this for Values #2 and below. Do not use for Value #1.
function calculateSpacing(numLines, valueNumber) {
    return (130 / 3) * numLines + (310 * (valueNumber - 1));
}

// Title
var title = document.createElement("div");
title.style.position = "absolute";
title.style.top = menuBarHeight + 100 + "px"; // 100px below the menu bar
title.style.justifyContent = "left";
title.style.left = "50%"; // Center horizontally
title.style.transform = "translateX(-600px)"; // Adjust for half of the content width
title.style.color = "#FFFFFF";
title.style.fontFamily = "Inter, sans-serif";
title.style.padding = "0 20px";
title.style.textAlign = "left"; // Align text to the left
title.style.fontSize = "65px";
title.style.fontWeight = "bold";
title.innerHTML = "Values";
document.body.appendChild(title);

// Title Underline
var titleUnderline = document.createElement("div");
titleUnderline.style.position = "absolute";
titleUnderline.style.top = menuBarHeight + 210 + "px"; // 60px below the title
titleUnderline.style.left = "44.5%"; // Center horizontally
titleUnderline.style.transform = "translateX(-50%)"; // Adjust for half of the content width
titleUnderline.style.width = "1000px"; // Width of the underline
titleUnderline.style.height = "0.25px"; // Height of the underline
titleUnderline.style.backgroundColor = "#FFFFFF"; // Color of the underline
titleUnderline.style.zIndex = "1"; // Ensure it appears above other elements
document.body.appendChild(titleUnderline);

// Value #1 Title
var valueTitle1 = document.createElement("div");
valueTitle1.style.position = "absolute";
valueTitle1.style.top = menuBarHeight + 260 + "px"; // 100px below the underline
valueTitle1.style.left = "50%"; // Center horizontally
valueTitle1.style.transform = "translateX(-600px)"; // Adjust for half of the content width
valueTitle1.style.color = "#FFFFFF";
valueTitle1.style.fontFamily = "Inter, sans-serif";
valueTitle1.style.padding = "0 20px";
valueTitle1.style.textAlign = "left"; // Align text to the left
valueTitle1.style.fontSize = "40px";
valueTitle1.style.fontWeight = "bold";
valueTitle1.innerHTML = "Value #1: Innovation";
document.body.appendChild(valueTitle1);

// Value #1 Description
var valueDescription1 = document.createElement("div");
valueDescription1.style.position = "absolute";
valueDescription1.style.top = menuBarHeight + 310 + "px"; // 50px below the value title
valueDescription1.style.left = "50%"; // Center horizontally
valueDescription1.style.transform = "translateX(-600px)"; // Adjust for half of the content width
valueDescription1.style.color = "#FFFFFF";
valueDescription1.style.fontFamily = "Inter, sans-serif";
valueDescription1.style.padding = "0 20px";
valueDescription1.style.textAlign = "left"; // Align text to the left
valueDescription1.style.fontSize = "20px";
valueDescription1.style.lineHeight = "1.5"; // Line height for better readability
valueDescription1.style.width = "1000px"; // Width of the description
valueDescription1.style.fontWeight = "normal";
valueDescription1.innerHTML = `As a tech savvy person, I value innovation and creativity over short term gains. I believe that short term gains give quick dopamine bursts but do not serve our future. In fact chasing short term profits will do more harm than good in the long run.
I strongly believe that innovation and creativity are the keys to a better future. I am always looking for new and better ways to break past limits and create new opportunities. I am passionate about exploring new technologies especially in the field of artifical intelligence.`;
document.body.appendChild(valueDescription1);

// Value #2 Title
var valueTitle2 = document.createElement("div");
valueTitle2.style.position = "absolute";
valueTitle2.style.top = menuBarHeight + calculateSpacing(6, 2) + "px"; // 90px below the first value description
valueTitle2.style.left = "50%"; // Center horizontally
valueTitle2.style.transform = "translateX(-600px)"; // Adjust for half of the content width
valueTitle2.style.color = "#FFFFFF";
valueTitle2.style.fontFamily = "Inter, sans-serif";
valueTitle2.style.padding = "0 20px";
valueTitle2.style.textAlign = "left"; // Align text to the left
valueTitle2.style.fontSize = "40px";
valueTitle2.style.fontWeight = "bold";
valueTitle2.innerHTML = "Value #2: Growth Mindset";
document.body.appendChild(valueTitle2);

// Value #2 Description
var valueDescription2 = document.createElement("div");
valueDescription2.style.position = "absolute";
valueDescription2.style.top = menuBarHeight + 620 + "px"; // 50px below the second value title
valueDescription2.style.left = "50%"; // Center horizontally
valueDescription2.style.transform = "translateX(-600px)"; // Adjust for half of the content width
valueDescription2.style.color = "#FFFFFF";
valueDescription2.style.fontFamily = "Inter, sans-serif";
valueDescription2.style.padding = "0 20px";
valueDescription2.style.textAlign = "left"; // Align text to the left
valueDescription2.style.fontSize = "20px";
valueDescription2.style.lineHeight = "1.5"; // Line height for better readability
valueDescription2.style.width = "1000px"; // Width of the description
valueDescription2.style.fontWeight = "normal";
valueDescription2.innerHTML = `I believe that a growth mindset is essential for success in any career field, not just tech fields. A growth mindset is a belief that you can always improve and learn new things. It is a belief that you always have the power to improve your life anytime.
I notice that a lot of people around me have a fixed mindset and many don't even realize it. For success and innovation to thrive, we need to be willing to step outside the box even if it breaks our entire paradigm. This requires a lot of training because our brains are wired to survive, not thrive and innovate.
I am always looking for new ways to improve myself and my skillsets. I am passionate about learning new things and expanding my knowledge. This does not mean be as loose as water. Still hold strong boundaries and learn to recognize when they serve you and when they limit your growth abilites.`;
document.body.appendChild(valueDescription2);

// Value #3 Title
var valueTitle3 = document.createElement("div");
valueTitle3.style.position = "absolute";
valueTitle3.style.top = menuBarHeight + calculateSpacing(9, 3) + "px"; // 90px below the second value description
valueTitle3.style.left = "50%"; // Center horizontally
valueTitle3.style.transform = "translateX(-600px)"; // Adjust for half of the content width
valueTitle3.style.color = "#FFFFFF";
valueTitle3.style.fontFamily = "Inter, sans-serif";
valueTitle3.style.padding = "0 20px";
valueTitle3.style.textAlign = "left"; // Align text to the left
valueTitle3.style.fontSize = "40px";
valueTitle3.style.fontWeight = "bold";
valueTitle3.innerHTML = "Value #3: Flow Over Force";
document.body.appendChild(valueTitle3);