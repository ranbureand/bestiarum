/* Copyright (c) 2023 Andrea Buran [www.andreaburan.com]. All rights reserved */

/*
** Phones
*/

// Declare and assign the email address variable
const phone = ('+90' + ' ' + '538' + ' ' + '335' + ' ' + '64' + ' ' + '29');

// Get the .landline elements
const phoneLinks = document.querySelectorAll('.phone');

// Assign the email link variable and inject it in the HTML DOM
for (i = 0; i < phoneLinks.length; i++) {
  // Declare the phone link variable
  var phoneLink;
  phoneLink = document.createElement('a');
  phoneLink.setAttribute('href', 'tel:' + phone);
  phoneLink.textContent = phone;
  phoneLinks[i].parentNode.replaceChild(phoneLink, phoneLinks[i]);

  console.log('Phone link created.');
}