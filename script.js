(function(document) {
    var metas = document.getElementsByTagName('meta'),
        changeViewportContent = function(content) {
            for (var i = 0; i < metas.length; i++) {
                if (metas[i].name == "viewport") {
                    metas[i].content = content;
                }
            }
        },
        initialize = function() {
            changeViewportContent("width=device-width, minimum-scale=1.0, maximum-scale=1.0");
        },
        gestureStart = function() {
            changeViewportContent("width=device-width, minimum-scale=0.25, maximum-scale=1.6");
        },
        gestureEnd = function() {
            initialize();
        };


    if (navigator.userAgent.match(/iPhone/i)) {
        initialize();

        document.addEventListener("touchstart", gestureStart, false);
        document.addEventListener("touchend", gestureEnd, false);
    }
})(document);

const themeToggle = document.getElementById('theme-toggle');
const toggleBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');
const body = document.body;
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function updateIcons() {
  if (body.classList.contains('dark-mode')) {
    iconSun.style.display = 'inline';
    iconMoon.style.display = 'none';
  } else {
    iconSun.style.display = 'none';
    iconMoon.style.display = 'inline';
  }
}
function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    updateIcons();
}
if (prefersDarkMode) {
  body.classList.add('dark-mode');
}
updateIcons();


if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  iconSun.style.display = 'inline';
  iconMoon.style.display = 'none';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const isDark = body.classList.contains('dark-mode');

  iconSun.style.display = isDark ? 'inline' : 'none';
  iconMoon.style.display = isDark ? 'none' : 'inline';

  // Save preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
