import { socialImgs } from '../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center items-center md:items-start">
          <a href="/">Visit my blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((img, index) => (
            <a key={index} className="icon" target="_blank" href={img.url}>
              <img src={img.imgPath} alt="logo" />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            ©️{new Date().getFullYear()} Dev | Armani. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
