// Header color change on scroll
const headerEl = document.querySelector('header');
const onScroll = () => {
	if (window.scrollY > 20) headerEl.classList.add('scrolled');
	else headerEl.classList.remove('scrolled');
};
document.addEventListener('scroll', onScroll); onScroll();

// Smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
	a.addEventListener('click', e => {
		const id = a.getAttribute('href');
		if (id.length > 1) {
			const el = document.querySelector(id);
			if (el) { e.preventDefault(); el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
		}
	})
});


const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	nav.classList.toggle("active");
});
