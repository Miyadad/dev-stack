import LogoText from "../assets/logo-text.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white m-10">

      <div className="mx-auto flex max-w-375 justify-between px-8 py-16">

        <div className="w-[38%]">
          <img
            src={LogoText}
            alt=""
            className="w-44"
          />

          <p className="mt-5 max-w-130 text-[17px] text-gray-400">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-8">
            <ul className="flex gap-7 text-[16px] font-medium text-gray-600">
              <li className="cursor-pointer hover:text-gray-900">
                GitHub
              </li>

              <li className="cursor-pointer hover:text-gray-900">
                Twitter
              </li>

              <li className="cursor-pointer hover:text-gray-900">
                LinkedIn
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-[16px] font-bold text-gray-800">
            PRODUCT
          </h2>

          <ul className="mt-5 space-y-3 text-[16px] text-gray-400">
            <li className="cursor-pointer hover:text-gray-700">
              Home
            </li>

            <li className="cursor-pointer hover:text-gray-700">
              Technologies
            </li>

            <li className="cursor-pointer hover:text-gray-700">
              Projects
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[16px] font-bold  text-gray-800">
            COMPANY
          </h2>

          <ul className="mt-5 space-y-3 text-[16px] text-gray-400">
            <li className="cursor-pointer hover:text-gray-700">
              About
            </li>

            <li className="cursor-pointer hover:text-gray-700">
              Contact
            </li>

            <li className="cursor-pointer hover:text-gray-700">
              Careers
            </li>
          </ul>
        </div>

        <div className="mr-16">
          <h2 className="text-[16px] font-bold text-gray-800">
            LEGAL
          </h2>

          <ul className="mt-5 space-y-3 text-[16px] text-gray-400">
            <li className="cursor-pointer hover:text-gray-700">
              Privacy Policy
            </li>

            <li className="cursor-pointer hover:text-gray-700">
              Terms of Service
            </li>
          </ul>
        </div>

      </div>

      <div className="mx-auto flex max-w-375 items-center justify-between border-t border-gray-100 px-8 py-10">

        <p className="text-[16px] text-gray-400">
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-8 text-[16px] text-gray-400">
          <span className="cursor-pointer hover:text-gray-700">
            Privacy
          </span>

          <span className="cursor-pointer hover:text-gray-700">
            Terms
          </span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;