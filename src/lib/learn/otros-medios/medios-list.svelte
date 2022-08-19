<script>
    import IconCard from "$lib/learn/global/icon-card.svelte";
    export let cards = [
        {
            title: "freeCodeCamp",
            text:  `freeCodeCamp ofrece cursos completamente gratuitos e interactivos con certificado en su página,
                    pero además, en su canal de YouTube cuenta conn una infinidad de cursos bien explicados que
                    pueden ser tomados gratis.`,
            image: "/learn/otros-medios/fcc.svg",
            url: "https://www.freecodecamp.org/",
            external: true,
            color : "var(--darkGray)",
            textColor: "var(--white)",
            titleColor: "var(--learn)"
        },
        {
            title: "Udemy",
            text:  `Udemy es una plataforma de distribución de cursos en línea y, aunque el contenido en general es muy variado, incluye mucho material
                    altamente recomendado para aprender a programar. Los cursos tienen costo, pero muy seguido hay muy buenas ofertas, te entregan certificado
                    por cada uno, y tiene una garantía de devolución de 30 días.`,
            image: "/learn/otros-medios/udemy.svg",
            url: "https://www.udemy.com/",
            external: true,
            color : "var(--darkGray)",
            textColor: "var(--white)",
            titleColor: "var(--learn)"
        }
    ]
    
</script>


<div class="body">
    <slot name="title">
        <h1>Clases de Programación Desde Cero</h1>
    </slot>
    <div class = "cards">
        {#each cards as card}
            <IconCard
                title = {card.title}
                titleCentered = {card.titleCentered}
                text = {card.text}
                image = {card.image}
                url = {card.url}
                external = {card.external}
                --card-color = {card.color}
                --text-color = {card.textColor}
                --title-color = {card.titleColor}
            />
        {:else}
            <h2>No hay ningun elemento para mostrar 😥</h2>    
        {/each}
    </div>
</div>

<style>
    .body{
        padding: 20px;
    }

    h2{
        text-align: center;
    }

    .cards{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
</style>