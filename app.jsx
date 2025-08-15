const boliviaData = {
    general: {
        nombre: 
    },
    departamentos: {
        cochabamba: { 
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
           
            
            <div className="media-container">
                <div className="map-container">
                   
                </div>
                <div className="video-container">
                    
                </div>
            </div>
            
            <div className="btn-container">
                    <button 
                    </button>
                ))}
            </div>

            <div className="info-section">
                <div className="info-grid">
                    
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
                
            </main>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));