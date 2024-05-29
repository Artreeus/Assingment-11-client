
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content my-7">
            <div>
                <img  src="https://i.ibb.co/0Yng01M/logo.png" alt="logo"  />
                <p>Explore the Local Area<br />Discover the beauty and excitement of our surrounding area.  <br /> Ourconcierge service is here  to assist you in planning unforgettable adventures. <br /> For recommendations and local attractions, visit </p>


            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;