import './jeton.css'
export default function Jeton(props){
    return(
    <>
        <div className='jeton-1'  onClick={props.onClick}  style={{backgroundColor: props.mainColor, borderBottom: `7px solid ${props.bottomColor}`}}>
          <div className='jeton-2'>
            <img src={props.icon} alt=""className="jeton-icon" />
          </div>
        </div>
     </>
    )
}