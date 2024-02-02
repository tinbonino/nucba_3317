

function Edad({setAuth,auth}) {
    function  handleAuth(){
        // auth ? setAuth(false):setAuth(true)
        setAuth(prevAuth=>!prevAuth)
        //       true        false
        //       false       true
    }
  return (
    <div onClick={handleAuth}>
        Soy Mayor de 18
    </div>
  )
}

export default Edad