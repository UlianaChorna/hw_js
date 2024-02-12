// task 1

/*Will alert be shown?*/

if ("0") {
  alert( 'Hello' );
}

/*Solution : Yes*/

// task 2


let a = prompt('number type', 0);

if (a > 0) {
  alert( 1 );
} else if (a < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//task 3
let result = (a + b < 4) ? 'Below' : 'Over';

//task 4
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';