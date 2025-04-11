const menuBtn = document.getElementById('imphnen-sazumi-menu-btn');
const closeBtn = document.getElementById('imphnen-sazumi-close-btn');
const mobileMenu = document.getElementById('imphnen-sazumi-mobile-menu');

menuBtn.addEventListener('click', () => {
	mobileMenu.classList.add('open');
	document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
	mobileMenu.classList.remove('open');
	document.body.style.overflow = 'auto';
});

const menuLinks = mobileMenu.querySelectorAll('a');
menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		mobileMenu.classList.remove('open');
		document.body.style.overflow = 'auto';
	});
});

const jokes = [
	"Kenapa programmer tidak suka alam terbuka? Karena ada banyak bug di sana! 🐛",
	"Apa bedanya programmer dan politikus? Programmer hanya buat janji di kode. 😅",
	"Debugging: Menghilangkan bug untuk membuat bug baru yang lebih kreatif. 🎨",
	"Kenapa programmer selalu bawa payung? Karena mereka takut runtime error. ⛈️",
	"Aku bukan malas, aku hanya dalam mode energy saving. 🔋",
	"Komit pertama di GitHub: 'Initial commit'. Komit kedua: 'Fix previous commit'. 🔄",
	"Programmer paling produktif adalah yang internetnya sedang down. 📵",
	"99 little bugs in the code, 99 little bugs. Take one down, patch it around, 127 little bugs in the code. 🔢"
];

function ab() {
	const jokeText = document.getElementById('imphnen-sazumi-joke-text');
	const currentJoke = jokeText.textContent;
	let newJoke;

	do {
		newJoke = jokes[Math.floor(Math.random() * jokes.length)];
	} while (newJoke === currentJoke && jokes.length > 1);

	jokeText.style.opacity = '0';
	setTimeout(() => {
		jokeText.textContent = newJoke;
		jokeText.style.opacity = '1';
	}, 300);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

document.querySelectorAll('.hover-scale').forEach(element => {
	element.addEventListener('mouseenter', function() {
		this.style.transform = 'scale(1.03)';
	});
	element.addEventListener('mouseleave', function() {
		this.style.transform = '';
	});
});

const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
	if (window.scrollY > 10) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});
