 function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex flex-col items-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} Knowledge Streams. All rights
            reserved.
          </p>
          <div className="flex space-x-4">
            {/* Add other necessary components here */}
            <a href="/404" className="hover:text-gray-400">
              Privacy Policy
            </a>
            <a href="/404" className="hover:text-gray-400">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
