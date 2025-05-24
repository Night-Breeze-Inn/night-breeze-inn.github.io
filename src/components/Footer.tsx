function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 py-4 text-white">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Night Breeze Inn. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
