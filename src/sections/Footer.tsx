import { socialImgs } from '../constants';

const Footer = () => {
  return (
    <footer className="my-10 md:mt-20 mt-10">
      <hr className="border-none h-px bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.5)_0%,_transparent_60%)] w-4/5 mx-auto" />
      <div className="footer mt-5">
        <div className="footer-container">
          <div className="flex flex-col justify-center items-center md:items-start text-sm lg:text-base">
            <p>©️{new Date().getFullYear()} George | Ofogba.</p>
          </div>
          <div className="socials">
            {socialImgs.map((img, index) => (
              <a key={index} className="icon" target="_blank" href={img.url}>
                <img src={img.imgPath} alt="logo" />
              </a>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-center md:text-end text-sm lg:text-base">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
