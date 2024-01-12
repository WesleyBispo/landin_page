const handleLinks = (e) => {
    const targetClass = e.target.classList[0];

    switch (targetClass) {
        case 'home':
            scrollTo('header');
            break;

        case 'about':
            scrollTo('.services-container');
            break;

        case 'contact':
            scrollTo('.form-container');
            break;

        default:
            break;
    };
};

const scrollTo = (sectionClass) => {
    const targetElement = document.querySelector(sectionClass);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};

const navTransformation = () => {
    const scrollY = window.scrollY;
    const header = document.querySelector('nav');

    header.classList.toggle('rolagem', scrollY > 500);

};

window.addEventListener('scroll', navTransformation);
document.addEventListener('click', handleLinks);