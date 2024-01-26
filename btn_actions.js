function activateButton(clickedElement,clazz){
    console.log("hey ",clickedElement);
    var buttons = document.querySelectorAll('.'+clazz);
    buttons.forEach(function(button) {
        button.classList.remove('active');
     });

  // Add the 'active' class to the clicked button
  clickedElement.classList.add('active');
}
