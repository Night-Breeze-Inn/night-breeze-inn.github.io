function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-center bg-gray-800 py-4 text-white md:flex-row">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Night Breeze Inn. All rights reserved.</p>
      </div>
      <div className="container mx-auto mt-2 text-center">
        <p>
          Made with <span className="text-red-500">&hearts;</span> by the Night Breeze Inn team.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
