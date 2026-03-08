

function activateMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('open');
}

function deactivateMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('open');
}

// Handle contact form submission
// document.getElementById('contact-form').addEventListener('submit', handleSend);

// /**
//  * @param {Event} event
//  */
// function handleSend(event) {
//     // cancel form submission
//     event.preventDefault();

//     const email = event.target.querySelector('#email').value;
//     const subject = event.target.querySelector('#subject').value;
//     const message = event.target.querySelector('#message').value;

//     if (!subject || !message || !email) {
//         alert('Please fill in all fields before sending.');
//         return;
//     }   
//     // alert('Message sent! (Demo only — connect a backend to make this functional)');

//     // send email
//     window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`);
// }

// Smooth active nav highlight
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    });
});
