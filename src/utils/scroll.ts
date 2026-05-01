export const forceScrollToTop = () => {
    // Intento inmediato
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    // Refuerzo con pequeño delay para asegurar que el DOM se haya actualizado
    setTimeout(() => {
        window.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
    }, 100);

    // Segundo refuerzo por si hay animaciones largas
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 300);
};
