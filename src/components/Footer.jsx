import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-primary dark:text-blue-600">
            MovieHaven
          </h2>
          <p className="mt-2 text-sm">
            &copy; {new Date().getFullYear()} MovieHaven. All rights reserved.
          </p>
        </div>

        <div className="text-center mb-6">
          <p className="text-sm">
            Contact us at:{" "}
            <a
              href="mailto:support@moviehaven.com"
              className="text-primary dark:text-blue-600 hover:underline"
            >
              support@moviehaven.com
            </a>
          </p>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            className="text-white dark:text-gray-900 hover:text-primary dark:hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="https://twitter.com"
            className="text-white dark:text-gray-900 hover:text-primary dark:hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="https://instagram.com"
            className="text-white dark:text-gray-900 hover:text-primary dark:hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://github.com"
            className="text-white dark:text-gray-900 hover:text-primary dark:hover:text-blue-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
          </a>
        </div>

        <div className="text-center mt-6 text-sm">
          <p>
            Disclaimer: MovieHaven is an unofficial movie database and is not
            affiliated with any movie studios or distributors.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
