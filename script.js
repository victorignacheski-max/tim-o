// Pequena interação para o blog

document.addEventListener("DOMContentLoaded", () => {
    const noticias = document.querySelectorAll(".noticia");

    noticias.forEach((noticia) => {
        noticia.addEventListener("click", () => {
            noticia.style.background = "#222";

            setTimeout(() => {
                noticia.style.background = "transparent";
            }, 300);
        });
    });

    console.log("Fiel News carregado com sucesso!");
});
