const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
                <img src="img/home/img01.jpg" alt="avion"></img>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam sapiente amet rerum cupiditate
                        officiis, totam provident iure deleniti fugit architecto sunt ab ad corporis saepe veritatis error
                        nisi dolore sed.</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span className="cita">Simplemente excelente</span>
                        <span className="autor">Juan Gomez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>

    )
}


export default HomePage;