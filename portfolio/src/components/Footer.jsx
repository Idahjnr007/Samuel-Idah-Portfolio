function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      Built with React & Vite • ©<span id="year">{year}</span>
    </footer>
  );
}

export default Footer;
