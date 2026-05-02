export const forceScrollToTop = () => {
    // 1. Asegurar que el navegador no intente restaurar el scroll anterior
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // 2. Intento inmediato
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    // 3. Refuerzos múltiples para combatir carga de imágenes/videos asíncronos
    // que pueden empujar el contenido hacia abajo después del primer render.
    const delays = [10, 50, 100, 300, 600, 1000];
    
    delays.forEach(delay => {
        setTimeout(() => {
            window.scrollTo(0, 0);
            if (document.documentElement) document.documentElement.scrollTop = 0;
            if (document.body) document.body.scrollTop = 0;
            
            // También intentamos scrollear el contenedor principal si existe
            const mainContent = document.querySelector('main');
            if (mainContent) mainContent.scrollTop = 0;
        }, delay);
    });
};
