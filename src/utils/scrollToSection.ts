export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = 64; // Height of fixed navbar in pixels
    const sectionPosition = section.offsetTop - navHeight;
    
    window.scrollTo({
      top: sectionPosition,
      behavior: 'smooth',
    });
  }
};

export const useScrollSpy = () => {
  const sections = document.querySelectorAll('section[id]');
  let currentSectionId = '';
  const navHeight = 64;

  sections.forEach((section) => {
    const sectionTop = (section as HTMLElement).offsetTop - navHeight - 100;
    const sectionBottom = sectionTop + (section as HTMLElement).offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
      currentSectionId = section.getAttribute('id') || '';
    }
  });

  return currentSectionId;
};

export const handleSmoothScroll = (e: MouseEvent, href: string) => {
  e.preventDefault();
  const sectionId = href.replace('#', '');
  scrollToSection(sectionId);
};
