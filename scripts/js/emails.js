/* Copyright (c) 2023 Andrea Buran [www.andreaburan.com]. All rights reserved */

/*
** Emails
*/

// Declare and assign the email address variable
const email = ('takatukahane' + '@' + 'gmail.com');

//console.log(email);

// Get the .email elements
const emailLinks = document.querySelectorAll('.email');

// Get the .email-icon elements
const emailIconLinks = document.querySelectorAll('.email-icon');

// Assign the email link variable and inject it in the HTML DOM
for (let i = 0; i < emailLinks.length; i++) {
 // Declare the email link variable
  var emailLink;
  emailLink = document.createElement('a');
  emailLink.setAttribute('href', 'mailto:' + email);
  emailLink.textContent = email;
  emailLinks[i].parentNode.replaceChild(emailLink, emailLinks[i]);

  console.log('Email created.');
}

// Assign the email icon link variable and inject it in the HTML DOM
for (let i = 0; i < emailIconLinks.length; i++) {
  // Create the anchor element
  const emailIconLink = document.createElement('a');
  emailIconLink.setAttribute('href', 'mailto:' + email);

  // Create the SVG element
  const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svgElement.setAttribute('width', '24');
  svgElement.setAttribute('height', '24');
  svgElement.setAttribute('fill', 'none');
  svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

  // Create the path element and set its attributes
  const pathElement = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathElement.setAttribute('fill-rule', 'evenodd');
  pathElement.setAttribute('clip-rule', 'evenodd');
  pathElement.setAttribute('d', 'M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v.45l-8.5 5.403-.003.001a.94.94 0 0 1-.994 0L3 6.451V6ZM1 7V6a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V7Zm20 1.82V18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8.82l7.434 4.724.005.003a2.94 2.94 0 0 0 3.122 0L21 8.82Z');
  pathElement.setAttribute('fill', '#000');

  // Append the path to the SVG
  svgElement.appendChild(pathElement);

  // Append the SVG to the anchor element
  emailIconLink.appendChild(svgElement);

  emailIconLink.appendChild(document.createTextNode(email));

  // Replace the existing element with the new anchor element
  emailIconLinks[i].parentNode.replaceChild(emailIconLink, emailIconLinks[i]);

  console.log('Email with SVG created.');
}