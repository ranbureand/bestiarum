/* Copyright (c) 2023 Andrea Buran [www.andreaburan.com]. All rights reserved */

/*
** Emails
*/

// Declare and assign the email address variable
const email = ('takatukahane' + '@' + 'gmail.com');

//console.log(email);

// Get the .envelope elements
const emailLinks = document.querySelectorAll('.email');

// Assign the email link variable and inject it in the HTML DOM
for (i = 0; i < emailLinks.length; i++) {
 // Declare the email link variable
  var emailLink;
  emailLink = document.createElement('a');
  emailLink.setAttribute('href', 'mailto:' + email);
  emailLink.textContent = email;
  emailLinks[i].parentNode.replaceChild(emailLink, emailLinks[i]);

  console.log('Email created.');
}