// utils
randomRgbColor = function () {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const rbgColor = "rgb(" + x + "," + y + "," + z + ")";
  return rbgColor;
};

const addMoreInnerDiv = function (outerElement, numberOfNewChild) {
  for (let i = 0; i < numberOfNewChild; i++) {
    const newChild = document.createElement('div');
    newChild.className = 'inner';
    newChild.style.backgroundColor = randomRgbColor();
    outerElement.appendChild(newChild);
  }
};

window.addEventListener('DOMContentLoaded', function (event) {
  console.log('Hello World');
  const outerElement = document.querySelector('.outer');
  const innerContainer = document.querySelector('.inner-container');
  
  outerElement.addEventListener('scroll', function (event) {
    const outerScrollPos = outerElement.scrollTop;
    const outerElementHeight = outerElement.clientHeight;

    console.log('outerScrollPos: ', outerScrollPos); // scrollTop: number of pixels that an element has scrolled
    console.log('outerElementClientHeight: ', outerElementHeight); // clientHeight: visible height of an element (it includes padding but excludes borders, margins, and horizontal scrollbars)
    console.log('innerContainerScrollHeight', innerContainer.scrollHeight); // scrollHeight: height of an element including not visible content
    /*
      element.scrollTop + element.clientHeight == element.scrollHeight
    */

    // this condition notifies that the user has scrolled to the bottom of the content of the outerElement
    if (outerScrollPos + outerElementHeight > innerContainer.scrollHeight) {
      addMoreInnerDiv(innerContainer, 2);
    }
  });
});