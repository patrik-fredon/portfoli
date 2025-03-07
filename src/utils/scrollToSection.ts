'use client';

export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navHeight = 64; // Height of fixed navbar
    const sectionTop = section.offsetTop - navHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
  }
};

export const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
  e.preventDefault();
  scrollToSection(sectionId.replace('#', ''));
};
