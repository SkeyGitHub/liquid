async function detectAdBlock() {
var enabledEl1 = document.getElementById('popout');
  let adBlockEnabled = false
 
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'

  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
  } catch (e) {
    adBlockEnabled = true
  } finally {
    if (adBlockEnabled == true) {
 }
else {enabledEl1.style.display = 'none';}
  }

if (adBlockEnabled) {
    blocked = true;
    document.querySelector("#main").classList.add("block-body");
    document.querySelector("#popout").classList.add("show-popout");
enabledEl1.style.display = 'flex'
}

document.querySelector("#disable-button").addEventListener("click", () => {
    blocked = false;
    document.querySelector("#main").classList.remove("block-body");
    document.querySelector("#popout").classList.remove("show-popout");
adBlockEnabled = false;
enabledEl1.style.display = 'none';
allow = false;
location.reload()
});



}

detectAdBlock()
