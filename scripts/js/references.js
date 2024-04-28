/* Copyright (c) 2023 Andrea Buran [www.andreaburan.com]. All rights reserved */

/*
** Reference animation on mouse out
*/

let references = document.querySelectorAll('.post-canvas');

for (let i = 0; i < references.length; i++) {
  references[i].addEventListener('mouseout', function() {
    references[i].classList.add('zoom-out');
  });
}