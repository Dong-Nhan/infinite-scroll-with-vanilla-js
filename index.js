randomRgbColor = function () {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const rbgColor = "rgb(" + x + "," + y + "," + z + ")";
  return rbgColor;
};

window.addEventListener('DOMContentLoaded', function (event) {
  console.log('Hello World');
  const outerElement = document.querySelector('.outer');
  const innerContainer = document.querySelector('.inner-container');
  const addMoreInnerDiv = function (outerElement, numberOfNewChild) {
    for (let i = 0; i < numberOfNewChild; i++) {
      const newChild = document.createElement('div');
      newChild.className = 'inner';
      newChild.style.backgroundColor = randomRgbColor();
      outerElement.appendChild(newChild);
    }
  };
  outerElement.addEventListener('scroll', function (event) {
    const outerScrollPos = outerElement.scrollTop;
    const outerElementHeight = outerElement.clientHeight;

    console.log('outerScrollPos: ', outerScrollPos);
    console.log('outerElementClientHeight: ', outerElementHeight);
    console.log('innerContainerScrollHeight', innerContainer.scrollHeight);
    if (outerScrollPos + outerElementHeight > innerContainer.scrollHeight) {
      addMoreInnerDiv(innerContainer, 2);
    }
  });
});