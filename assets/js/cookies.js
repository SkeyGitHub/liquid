const btnAcceptCookies = document.getElementById('btn-accept-cookies');
const adviceCookies = document.getElementById('advise-cookies');
const bgCookies = document.getElementById('bg-advise-cookies');

dataLayer = [];

if (!localStorage.getItem('cookies-accepted')){
	adviceCookies.classList.add('active');
	bgCookies.classList.add('active');
}
else {
	dataLayer.push({'event': 'cookies-accepted'});
}

btnAcceptCookies.addEventListener('click', () => {
	adviceCookies.classList.remove('active');
	bgCookies.classList.remove('active');

	localStorage.setItem('cookies-accepted', true);

	dataLayer.push({'event': 'cookies-accepted'});
});
