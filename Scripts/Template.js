function template(currentPage) {
    // Vars
    var menuBarWidth = 1200; // Width of the menu bar
    var menuBarHeight = 160; // Height of the menu bar

    // Background
    var bg = document.createElement("div");
    bg.style.width = "1200px";
    bg.style.height = "3000px";
    bg.style.backgroundColor = "#141414";
    bg.style.position = "absolute";
    bg.style.top = "50%";
    bg.style.left = "50%";
    bg.style.padding = "0 20px"
    bg.style.transform = "translate(-50%, -50%)";
    bg.style.zIndex = "-1";
    document.body.appendChild(bg);

    // Imported Font
    var font = document.createElement("link");
    font.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap";
    font.rel = "stylesheet";
    document.head.append(font);

    // Menu Bar
    var menuBar = document.createElement("div");
    menuBar.style.position = "fixed";
    menuBar.style.top = "0";
    menuBar.style.left = "50%";
    menuBar.style.transform = "translate(-50%, 0)";
    menuBar.style.width = menuBarWidth + "px";
    menuBar.style.height = menuBarHeight + "px";
    menuBar.style.backgroundColor = "#1f1f1fff";
    menuBar.style.display = "flex";
    menuBar.style.justifyContent = "left";
    menuBar.style.alignItems = "center";
    menuBar.style.padding = "0 20px";
    menuBar.style.zIndex = "1000";
    document.body.appendChild(menuBar);

    function createMenuButton(pageName, isLast) {
        var button = document.createElement("button");
        // Remove absolute positioning
        // button.style.position = "absolute";
        // button.style.left = xPos + "px";
        // button.style.top = yPos + "px";
        button.style.width = "80px";
        button.style.height = "40px";
        button.style.color = "#FFFFFF";
        button.style.backgroundColor = "transparent";
        button.style.fontFamily = "Inter, sans-serif";
        button.style.fontSize = "18px";
        button.style.border = "none";

        if (!isLast) {
            button.style.marginRight= "48px"
        }

        button.style.fontWeight = "bold";
        button.style.cursor = "pointer";
        button.innerHTML = pageName;

        // Underline the button if it matches the current page
        if (pageName == currentPage) {
            button.style.color = "#05DBFC";
        } else {
            button.style.color = "#FFFFFF";
        }

        // Append button to the menu bar
        menuBar.appendChild(button);

        return button;
    }

    // Create buttons for each page (remove xPos, yPos)
    var homeButton = createMenuButton("Home", false);
    var aboutButton = createMenuButton("About", false);
    var projectsButton = createMenuButton("Projects", false);
    var valuesButton = createMenuButton("Values", false);
    var contactButton = createMenuButton("Contact", true);

    // Logo - Must be on right hand side of the menu bar
    var logo = document.createElement("img");
    logo.src = "Images/Java Cup.png"; // Path to your logo image
    logo.style.width = "80px"; // Adjust size as needed
    logo.style.height = "80px"; // Adjust size as needed
    logo.style.marginLeft = "auto"; // Push logo to the right
    logo.style.marginRight = "40px"; // Add some space from the right edge
    logo.style.cursor = "pointer"; // Change cursor to pointer on hover
    logo.style.backgroundRepeat = "no-repeat";
    logo.style.backgroundSize = "contain";
    menuBar.appendChild(logo);

    return {
        bg: bg,
        menuBarHeight: menuBarHeight,
        menuBarWidth: menuBarWidth
    };
}