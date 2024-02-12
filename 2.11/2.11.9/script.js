// task 9
let nameOfUser = prompt("Who's there?", '');

if (nameOfUser === 'Uliana') {

  let pass = prompt('Password?', '');

  if (pass === 'unique') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (nameOfUser === '' || nameOfUser === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
