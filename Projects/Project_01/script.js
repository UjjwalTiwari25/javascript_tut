// Console pe "Ujjwal" print karo
console.log("Ujjwal");

// Sabhi buttons ko select karo jinke class 'button' hai
const buttons = document.querySelectorAll('.button');

// Body element ko select karo
const body = document.querySelector('body');

// Har button ke liye ek function execute karo
buttons.forEach(function (button) {
  // Har button ko console pe print karo
  console.log(button);

  // Button pe click hone par event listener add karo
  button.addEventListener('click', function (e) {
    // Event ko console pe print karo
    console.log(e);

    // Clicked element ko console pe print karo
    console.log(e.target);

    // Agar clicked button ka id 'grey' hai to background color grey set karo
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }

    // Agar clicked button ka id 'white' hai to background color white set karo
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }

    // Agar clicked button ka id 'blue' hai to background color blue set karo
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }

    // Agar clicked button ka id 'yellow' hai to background color yellow set karo
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});