const card = document.getElementById('flightSearchCard');
const tabs = card.querySelectorAll('.fs-tab');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    card.className = 'flight-search-card ' + tab.dataset.mode;
  });
});

// function handleTabClick(clickedTab) {
//   // remove active from all tabs
//   tabs.forEach(function(t) {
//     t.classList.remove('active');
//   });

//   // add active to the clicked tab
//   clickedTab.classList.add('active');

//   // update the card class
//   const mode = clickedTab.dataset.mode;
//   card.className = 'flight-search-card ' + mode;
// }

// tabs.forEach(function(tab) {
//   tab.addEventListener('click', function() {
//     handleTabClick(tab);
//   });
// });

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
