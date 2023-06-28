const Ejemplo3 = props => {
    return(
        <div>
            <h1>Google Maps</h1>
            <div className="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.218843463751!2d-58.42269728927236!3d-34.59862725711558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb2e1493a6a3%3A0x1862a7c0b8163e5d!2sUTN.BA!5e0!3m2!1ses!2sar!4v1686508109584!5m2!1ses!2sar" style={{width:960, height:450, border:0}}></iframe>{/*si le quiero poner estilos, tengo que poner la etiqueta style y ahi entre corchetes le pongo las ppiedades*/}
            </div>
        </div>
    )
}

export default Ejemplo3;