// LandingFooter.jsx
import React from 'react';

const LandingFooter = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>&copy; 2024 RAF Weather App. Todos los derechos reservados.</p>
                <div style={styles.links}>
                    <a href="/privacy" style={styles.link}>Política de Privacidad</a>
                    <a href="/terms" style={styles.link}>Términos de Servicio</a>
                    <a href="/contact" style={styles.link}>Contacto</a>
                </div>
            </div>
        </footer>
    );
};

// Estilos en línea para el footer
const styles = {
    footer: {
        backgroundColor: '#0044cc',
        color: 'white',
        padding: '20px 0',
        textAlign: 'center',
        position: 'relative',
        bottom: 0,
        width: '100%',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    links: {
        marginTop: '10px',
    },
    link: {
        color: 'white',
        margin: '0 10px',
        textDecoration: 'none',
    },
};

export default LandingFooter;
