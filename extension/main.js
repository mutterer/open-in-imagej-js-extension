switch (location.hostname) {
  case 'gist.github.com':
    this.isButtonInsertedGithub(document.URL);
    document.addEventListener('pjax:end', () => isButtonInsertedGithub(document.URL));
    break;
  default:
    break;
}
function isButtonInsertedGithub(url) {
	var buttons = document.getElementsByClassName("btn-sm");
	let b=-1;
	for (var i = 0; i < buttons.length; i++) {
	  if (buttons[i].innerText=="Raw") b=i;
	}
    if ((b>-1)&&(buttons[b].href.endsWith(".ijm")))
	{
    const runGistInImageJdotJS = document.createElement('a');
    runGistInImageJdotJS.innerHTML = 'Run in ImageJ.JS';
    runGistInImageJdotJS.setAttribute('class', 'btn btn-sm ');
    runGistInImageJdotJS.setAttribute('target','_blank');
    runGistInImageJdotJS.setAttribute('href', "https://ij.imjoy.io/?run="+buttons[b].href.replace("https://gist.github.com/","https://gist.githubusercontent.com/"));
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
