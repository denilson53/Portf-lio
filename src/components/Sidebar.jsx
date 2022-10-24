import Avatar from "../img/perfil.jpg"
import Curriculo from "../curriculo.pdf"
import Diplomas from "../diplomas.pdf"
import SocialNetworkContainer from "./SocialNetworkContainer"
import InformationContainer from "./InformationContainer"

import "../styles/components/sidebar.sass"

var btn = document.querySelector("#show-or-hide")
var container = document.querySelector(".container")

const Sidebar = () => {
  return (
   <aside id="sidebar">
    <img src={Avatar}  alt="Denilson Santos" />
    <p className="title">Desenvolvedor</p>
    <p><SocialNetworkContainer/></p>
    <p><InformationContainer/></p>

    <h4>Cursando Análise <br /> e <br /> desenvolvimento de sistemas 3/4</h4>
    <h5>Universidade Cruzeiro do Sul</h5>

    <a href= {Curriculo} className="btn">
      Download Curriculo
    </a> <br /> <br />
    

   <a href= {Diplomas} className="btn">
      Download Diplomas
     </a> <br /> <br />

  
    
   </aside>
  )
}

export default Sidebar