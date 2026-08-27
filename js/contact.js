const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();
    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\nDe: ${name}\nE-mail: ${email}`);

    formStatus.textContent = 'Abrindo seu aplicativo de e-mail…';
    window.location.href = `mailto:wendell.nascimento2006@gmail.com?subject=${subject}&body=${body}`;
});
