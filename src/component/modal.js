




const Modal = ({src, setShowModal}) => {
    return <div style={{position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", top:0, left:0, height:"100vh", width:"100vw", backgroundColor:"rgba(0,0,0,0.4)"}}>
                <iframe name="I1" id="if1"  
                         style={{width:"70vw", height:"80vh"}}
                        src={src}></iframe>    
                <span style={{position:"absolute", fontSize:"2rem", cursor:"pointer", color:"#fff", top:"5%", right:"5%"}} onClick={e=>setShowModal(false)}>x</span>
            </div>    
}

export default Modal;