import "../styles/components/footer.sass"
import Git from "../img/github.png"
import Linkedin from "../img/linkedin.png"


const Footer = () => {
  return (
    <footer className="footer">
<div className="footer-conteiner">
  <div className="contato-creditos">
    E-mail para contato: Denilsonb5371@gmail.com <br />
    Feito por Denilson Santos <br />
    Desenvolvedor Full-Stack <br />
  </div>
  <div className="icons">
    <div className="links links1">
      <a href="https://github.com/denilson53" target="_blank">
        <img
          className="transparente"
          src={Git}
          alt="github-icon"
        />
      </a>
    </div>
    <div className="links links2">
      <a
        href="https://www.linkedin.com/in/denylson-santos-151530238/"
        target="_blank"
      >
        <img
          class="transparente"
          src={Linkedin}
          alt="github-icon"
        />
      </a>
    </div>
  </div>
</div>
</footer>
  )
}

export default Footer