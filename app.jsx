const boliviaData = {
    general: {
        nombre: "Bolivia",
        imagen: "https://www.educa.com.bo/sites/default/files/mapa%20politico%20de%20bolivia.jpg",
        video: "https://www.youtube.com/embed/DnVOR09yp7o",
        mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15340739.096698642!2d-67.63071895!3d-17.37519495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf8977bba295%3A0x1c9ec2bb0115ed67!2sBolivia!5e0!3m2!1ses!2sus!4v1620000000000!5m2!1ses!2sus",
        extension: "1,098,581 km²",
        poblacion: "12.3 millones (2023)",
        altura: "90-6542 msnm",
        densidad: "11 hab/km²",
        capital: "Sucre (constitucional) y La Paz (sede de gobierno)",
        idiomas: "Español, Quechua, Aymara y otras lenguas indígenas",
        moneda: "Boliviano (BOB)",
        gentilicio: "Boliviano/a",
        economia: "Agricultura, minería, manufactura e hidrocarburos",
        clima: "Varía desde tropical hasta polar",
        festividades: "Carnaval de Oruro, Alasitas, Fiesta de la Virgen de Urkupiña",
        gastronomia: "Salteñas, Pique Macho, Silpancho, Api con pastel",
        idiomas_oficiales: "Español, Quechua, Aymara y 34 lenguas indígenas",
        religion: "Predominantemente católica, protestante y religiones indígenas",
        moneda: "Boliviano (BOB)",
        sistema_gobierno: "República democrática, presidencialista y unitario",
        principales_socios_comerciales: "Brasil, Argentina, China, Estados Unidos" 
    },
    departamentos: {
         cochabamba: {
            nombre: "Cochabamba",
            imagen: "https://www.educa.com.bo/sites/default/files/mapa-politico-cochabamba-0116.jpg",
            video: "https://www.youtube.com/embed/XjyawCcHhQc",
            mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827296.714534921!2d-66.5!3d-17.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915edf0a04a5a0ab%3A0x4e36fe51dfc7e974!2sDepartamento%20de%20Cochabamba!5e0!3m2!1ses!2sbo!4v1710000000000!5m2!1ses!2sbo",
            extension: "55,631 km²",
            poblacion: "2,028,000 hab",
            altura: "250-2,800 msnm",
            densidad: "36 hab/km²",
            idiomas: "Español, Quechua y Aymara (minoritario)",
            gentilicio: "Cochabambino/a",
            economia: "Agricultura, comercio y servicios, industria alimentaria y textiles",
            clima: "Templado (18°C a 25°C promedio)",
            festividades: "Fiesta de la Virgen de Urkupiña, Carnaval",
            gastronomia: "Silpancho, Pique macho, Sopa de maní, Chicha cochabambina"
        },
        tarija: {  
        },
        santacruz: {
        },
        lapaz: {
        },
        oruro: { 
        },
        potosi: {
        },
        pando: {  
        },
        beni: {
        },
        sucre: {
        }
    }
};

function App() {
    const [currentView, setCurrentView] = React.useState('bolivia');
    
    const renderMainPage = () => (
        <div>
            <h2>Bolivia: Información General</h2>
            <img 
                src={boliviaData.general.imagen} 
                alt="Mapa de Bolivia" 
                className="main-image"
            />
            
            <div className="media-container">
                <div className="map-container">
                    <iframe 
                        src={boliviaData.general.mapa}
                        title="Mapa de Bolivia"
                        allowFullScreen
                    ></iframe>
                </div>
            
            <div className="media-container">
                    <div className="map-container">
                        <iframe 
                            src={depto.mapa}
                            title={`Mapa de ${depto.nombre}`}
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="video-container">
                        <iframe 
                            src={depto.video}
                            title={`Video de ${depto.nombre}`}
                            allowFullScreen
                        ></iframe>
                    </div>
            </div>

            <div className="info-section">
                <div className="info-grid">
                    <div className="info-item">
                        <h3> 🌐 Extensión Territorial</h3>
                        <p>{boliviaData.general.extension}</p>
                    </div>
                    
                    </div>
                </div>
            </div>
            
            
        </div>
    );
    
    const renderDepartmentPage = (deptoKey) => {
        
        
       
    };
    
    return (
        <div className="container">
            <header className="header">
                <h1>Bolivia y sus Departamentos</h1>
            </header>
            
            <main>
                {currentView === 'bolivia' ? renderMainPage() : renderDepartmentPage(currentView)}
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));