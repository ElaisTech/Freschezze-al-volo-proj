const showhidebtn = document.querySelector('#showhidebtn');
const menu = document.querySelector('#menuwrapper');

const showhidemenu = () => {

    if (menu.className == "visible absolute") {
        menu.className = "invisible absolute"
    } else {
        menu.className = "visible absolute"
    }
}

showhidebtn.addEventListener('click', showhidemenu);
