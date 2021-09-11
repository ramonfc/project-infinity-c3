function openOption(evt, tabName) {
    // Declare all variables
    var i, tab_content, tab;

    // Get all elements with class="tab_content" and hide them
    tab_content = document.getElementsByClassName("tab-content"); 
    for (i = 0; i < tab_content.length; i++) {
        tab_content[i].style.display = "none";
    }

    // Get all elements with class="tab" and remove the class "active"
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();