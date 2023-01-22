async function detectAdBlock() {
var enabledEl1 = document.getElementById('popout');
  let adBlockEnabled = false
 
  const googleAdUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
const AdMavenAdUrl = '//d1b9b1cxai2c03.cloudfront.net/?xcbbd=975785'
  try {
    await fetch(new Request(googleAdUrl)).catch(_ => adBlockEnabled = true)
    await fetch(new Request(AdMavenAdUrl)).catch(_ => adBlockEnabled = true)
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
