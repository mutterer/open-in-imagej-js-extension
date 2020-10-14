switch (location.hostname) {
  
case 'gist.github.com':
  this.isButtonInsertedGithubGist(document.URL);
  document.addEventListener('pjax:end', () => isButtonInsertedGithubGist(document.URL));
  break;
case 'github.com':
  this.isButtonInsertedGithub(document.URL);
  document.addEventListener('pjax:end', () => isButtonInsertedGithub(document.URL));
  break;
case 'zenodo.org':
  this.isButtonInsertedZenodo(document.URL);
  document.addEventListener('pjax:end', () => isButtonInsertedZenodo(document.URL));
  break;
default:
  break;
}
function isButtonInsertedGithubGist(url) {
  var buttons = document.getElementsByClassName("btn-sm");
  let b=-1;
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText=="Raw") b=i;
  }
  if ((b>-1)&&(buttons[b].href.endsWith(".ijm")))
  {
    const runGistInImageJdotJS = document.createElement('a');
    runGistInImageJdotJS.innerHTML = 'Open in ImageJ.JS';
    runGistInImageJdotJS.style.color = "#0366d6";
    runGistInImageJdotJS.setAttribute('class', 'btn btn-sm');
    runGistInImageJdotJS.setAttribute('target','_blank');
    runGistInImageJdotJS.setAttribute('href', "https://ij.imjoy.io/?open="+buttons[b].href.replace("https://gist.github.com/","https://gist.githubusercontent.com/"));
    try {
      buttons[b].parentNode.appendChild(runGistInImageJdotJS);
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
}
function isButtonInsertedGithub(url) {
  var buttons = document.getElementsByClassName("btn-sm");
  let b=-1;
  for (var i = 0; i < buttons.length; i++) {
    if ((buttons[i].innerText=="Raw")||(buttons[i].innerText=="Download")) b=i;
  }
  if ((b>-1)&&(buttons[b].href.endsWith(".ijm")||buttons[b].href.endsWith(".tif")))
  {
    const runGistInImageJdotJS = document.createElement('a');
    runGistInImageJdotJS.innerHTML = 'Open in ImageJ.JS';
    runGistInImageJdotJS.style.color = "#0366d6";
    runGistInImageJdotJS.setAttribute('class', 'btn js-update-url-with-hash btn-sm BtnGroup-item');
    runGistInImageJdotJS.setAttribute('target','_blank');
    runGistInImageJdotJS.setAttribute('href', 'https://ij.imjoy.io/?open='+url);
    try {
      buttons[b].parentNode.appendChild(runGistInImageJdotJS);
      return true;
    } catch (error) {
      return false;
    }
  } else {
    return false;
  }
}

function isButtonInsertedZenodo(url) {
  var buttons = document.getElementsByClassName("btn btn-xs btn-default");
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].innerText.indexOf('Download')>-1) {
      imgUrl = buttons[i].href;
      imgUrl = imgUrl.replace('?download=1','');
      if (imgUrl.toLowerCase().endsWith('.tif')||imgUrl.toLowerCase().endsWith('.ijm')) {
        const openInImageJdotJS = document.createElement('a');
        const imagejIcon = document.createElement('img');
        imagejIcon.src = 'https://ij.imjoy.io/assets/icons/chrome/chrome-extensionmanagementpage-48-48.png';
        imagejIcon.style.height = '16px';
        openInImageJdotJS.appendChild(imagejIcon);
        openInImageJdotJS.innerHTML += 'Open in ImageJ.JS';
        openInImageJdotJS.style.color = "#0366d6";
        openInImageJdotJS.setAttribute('class', 'btn btn-xs btn-default');
        openInImageJdotJS.setAttribute('target','_blank');
        openInImageJdotJS.setAttribute('href', 'https://ij.imjoy.io/?open='+imgUrl);
        try {
          buttons[i].parentNode.appendChild(openInImageJdotJS);
        } catch (error) {
          return false;
        }
      }
    }
  }
  return true;
}
