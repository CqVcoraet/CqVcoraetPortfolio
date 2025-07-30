// Template
var aboutTemplate = template("About");
var menuBarHeight = aboutTemplate.menuBarHeight; // Width of the menu bar
var menuBarWidth = aboutTemplate.menuBarWidth; // Height of the menu bar

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
title.innerHTML = "About";
document.body.appendChild(title);

// Title Underline
var titleUnderline = document.createElement("div");
titleUnderline.style.position = "absolute";
titleUnderline.style.top = menuBarHeight + 210 + "px"; // 60px below the title
titleUnderline.style.left = (menuBarWidth / 2) + 380 + "px"; // Center horizontally
titleUnderline.style.transform = "translateX(-600px)"; // Adjust for half of the content width
titleUnderline.style.width = "1000px"; // Width of the underline
titleUnderline.style.height = "0.25px"; // Height of the underline
titleUnderline.style.backgroundColor = "#FFFFFF"; // Color of the underline
titleUnderline.style.zIndex = "1"; // Ensure it appears above other elements
document.body.appendChild(titleUnderline);

// Paragraph 1
var paragraph1 = document.createElement("div");
paragraph1.style.position = "absolute";
paragraph1.style.top = menuBarHeight + 250 + "px"; // 90px below the title underline
paragraph1.style.left = "50%"; // Center horizontally
paragraph1.style.transform = "translateX(-600px)"; // Adjust for half of the content width
paragraph1.style.color = "#FFFFFF";
paragraph1.style.fontFamily = "Inter, sans-serif";
paragraph1.style.padding = "0 20px";
paragraph1.style.width = "1000px"; // Width of the paragraph
paragraph1.style.textAlign = "left"; // Align text to the left
paragraph1.style.fontSize = "20px";
paragraph1.style.lineHeight = "1.5"; // Line height for better readability
paragraph1.innerHTML = `
Hello, I am CqVcoraet and you can call me as Conny. Ever since I was a young child, I was always fascinated by amazing technologies, science fiction stuff, and devices.
In middle school and high school, I took computer science and 3D modeling classes which further increased my skillset and expertise towards many branches of engineering.
I am even more fascinated by artifical intelligence (AI) because it is one of the fields with the most potential, is the future of technology, and advances exponentially unlike most fields even if it has an exponential curve of around 1.4<sup>x</sup>.
Once I got into high school coding, I learned HTML, CSS, then javascript. Javascript is my favorite way for web development due to its cleaner syntax and just the fact that I got used to web development in that kind of way.
Then after that I learned how to program in Java, Swift, SwiftUI, and Python. After learning Java is when I really understood how object-oriented programming (OOP) works and how to use it in my projects. I even learned how to make GUIs in Java since I really enjoy working with GUIs so much especially because I am a visual learner.
I also learned iOS app development in Xcode using Swift and SwiftUI which is a very powerful and easy way to make apps for Apple devices. One thing I really love about Swift is that despite being so capable and fast of a language, it has a super clean syntax like Python thereby making it so much easier to work with than languages like Java, C++, etc.
I created this portfolio website to showcase my skills, projects, and interests in technology and engineering. I hope you find it informative, inspiring, and enjoyable to explore. I do plan on improving the website UI and functionality as my web development skills improve over the course of time.
`
document.body.appendChild(paragraph1);