

const Footer = () => {

    return (

        <div className="footer">
            <div className="rrss">
            <a title="LinkedIn" href="https://linkedin.com/in/gerardojao" target="_blank"><i
                    className="fab fa-linkedin-in" aria-hidden="true"></i></a>
                <a title="GitHub"
                href="https://github.com/gerardojao" target="_blank"><i className="fab fa-github"
                    aria-hidden="true"></i></a>

                <a title="Twitter" href="https://twitter.com/gerardojao" target="_blank" rel="noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i></a>

                <a title="YouTube" href="https://www.youtube.com/channel/UCA1YYc0kepUu-5-598qnNIw" target="_blank"><i className="fab fa-youtube" aria-hidden="true"></i></a>
            </div>
            <div className="copyright">
                Created by <a href="https://gerardojao.github.io/gerardojao" target="_blank" rel="noreferrer">Gerardo Arrieta</a> | <span className="far fa-copyright"> 2024 All rights reserved.</span>
            </div>

        </div>

    );
};

export default Footer;