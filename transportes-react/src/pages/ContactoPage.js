
const ContactoPage =(props) =>{
    return(
        <main className="holder contacto">
        <div>
            <h2>Contacto rapido</h2>
            <form action="" className="formulario">
                <p>
                    <label for="">Nombre</label>
                    <input type="text"></input>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="text"></input>
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text"></input>
                </p>
                <p class="arriba">
                    <label for="">Mensaje</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"></input>
                </p>
            </form>
        </div>
        <div className="datos">
            <h2>Ubicacion </h2>
            <p>Nos encontramos en:</p>
        </div>



    </main>
       
    )
}


export default ContactoPage;