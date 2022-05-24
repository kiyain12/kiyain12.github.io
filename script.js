var setTheme = localStorage.getItem('theme') //gets the value of theme whenever the page loads
console.log('theme:', setTheme)

if (setTheme == null){ //if the theme does not exist 
    swapStyle('light.css') //set the value to light.css by default
}else{
    swapStyle(setTheme) // if the value does exist, set the theme to whatever the value of the local storage
}

function swapStyle(sheet){ // this function takes in one parameter and it will get the value of the css files
    document.getElementById('mystylesheet').href = sheet //changes the href value
    localStorage.setItem('theme', sheet) ////make sures that the browser remembers the mode  chosen last // ('key', value) pair
}


