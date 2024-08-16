document.addEventListener('DOMContentLoaded', function () {
    var hoursContainer = document.querySelector('.hours');
    var minutesContainer = document.querySelector('.minutes');
    var secondsContainer = document.querySelector('.seconds');
    var tickElements = Array.from(document.querySelectorAll('.tick'));
  
    function updateTime() {
      var now = new Date();
  
      updateContainer(hoursContainer, now.getHours());
      updateContainer(minutesContainer, now.getMinutes());
      updateContainer(secondsContainer, now.getSeconds());
    }
  
    function updateContainer(container, newTime) {
      var time = newTime.toString().padStart(2, '0');
  
      var first = container.firstElementChild;
      var last = container.lastElementChild;
  
      if (first.lastElementChild.textContent !== time[0]) {
        updateNumber(first, time[0]);
      }
  
      if (last.lastElementChild.textContent !== time[1]) {
        updateNumber(last, time[1]);
      }
    }
  
    function updateNumber(element, number) {
      var second = element.lastElementChild.cloneNode(true);
      second.textContent = number;
  
      element.appendChild(second);
      element.classList.add('move');
  
      setTimeout(function () {
        element.classList.remove('move');
      }, 990);
      setTimeout(function () {
        element.removeChild(element.firstElementChild);
      }, 990);
    }
    updateTime();
    setInterval(updateTime, 1000);
  });
  