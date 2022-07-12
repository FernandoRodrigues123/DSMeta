import logo from '../../img/logo.svg'
import './styles.css'
function Header(){
    return(
        <header>
        <div className="dsmeta-logo-containers">
            <img src={logo} alt="DSMeta_logo"></img>
            <h1>DSMeta</h1>
            <p><a href="https://github.com/FernandoRodrigues123">github</a></p>
            <p><a href="https://www.linkedin.com/in/fernando-rodrigues-inacio/">linkedin</a></p>

        </div>
    </header>
    )
}

export default Header