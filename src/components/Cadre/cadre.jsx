import './cadre.css'
import logo from '../../assets/images/logo.svg'
export default function Cadre(props){
    return(
    <>
        <div id='cadre'>
        
                <div>
                    <img src={logo} alt="" />
                </div>
                <div id='cadre-2'>
                    <p>SCORE</p>
                    <h3>{props.score}</h3>
                </div>
        
        </div>
     </>
    )
}