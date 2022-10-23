import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
} from "react-icons/di";

import "../styles/components/technologiescontainer.sass";

const technologies = [
 { id: "html", name: "HTML5", p:"É uma linguagem de marcação utilizada na construção de páginas na Web.", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3",  p:"É um mecanismo para adicionar stilo a um documento Web.", icon: <DiCss3 /> },
  { id: "js", name: "JavaScript", p:"É uma linguagem de programação. Juntamente com HTML e Css, é uma das três principais tecnologias da Web.", icon: <DiJsBadge /> },
  { id: "node", name: "Node.js", p:"É uma linguagem de programação. Que atua no lado do servido.", icon: <DiNodejsSmall /> },
  { id: "mysql", name: "MySQL", p:"O MySQL cria um banco de dados para armazenamento e manipulação de dados.", icon: <DiMysql /> },
  { id: "react", name: "React", p:"O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas Web.", icon: <DiReact /> },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.p}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
