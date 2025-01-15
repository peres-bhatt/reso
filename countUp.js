  function countUp(id, target) {
  let count = 0;
  const duration = 2500; // Duration of the animation in milliseconds
  const element = document.getElementById(id);
  const increment = target / (duration / 10);

  const animate = () => {
    if(count < target) {
      count += increment;
      element.innerHTML = Math.ceil(count) + '<span class="plusSign">+</span>';
      setTimeout(animate, 10);
    } else {
      element.innerHTML = target + '<span class="plusSign">+</span>';
    }
  };

  animate();
}

countUp('MyNumber1', 383);
countUp('MyNumber2', 601);
countUp('MyNumber3', 277);