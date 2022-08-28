<script lang="ts">
    import Wip from "$lib/global/WIP.svelte";

    import IconCard from "$lib/global/icon-card.svelte"

    let cards = [
        {
            title: "1. Introducción",
            image: "https://www.reshot.com/preview-assets/icons/4YWGTKJZUP/startup-4YWGTKJZUP.svg",
            url: "/cursos-programacion/programacion-desde-cero/introduccion",
            titleCentered: true,
            external: false,
            titleColor: "var(--learn)"
        },
        {
            title: "2. Variables y Tipos de Datos",
            image: "/cursos/programacion-desde-cero/variables-y-tipos-de-datos/pi.svg",
            url: "/cursos-programacion/programacion-desde-cero/variables-y-tipos-de-datos",
            titleCentered: true,
            external: false,
            titleColor: "var(--learn)"
        }
    ];
</script>

<svelte:head>
    <title>Programación Desde Cero | Apollo Learn</title>
</svelte:head>

<div class="main">
    <h1>Curso de Programación Desde Cero</h1>
    <p>
        Este curso, como su nombre lo dice, está enfocado a personas que no tengan conocimientos previos a la programación, pero deseen adentrarse en
        este mundo. Este curso utiliza el lenguaje de programación C++, aunque gran cantidad de los conceptos debería poder ser aplicado en cualquier otro
        lenguaje. No es recomendado para personas que ya sepan programar.
    </p>
    <div class="cards">
        {#each cards as card}
            <IconCard 
                title = {card.title}
                image = {card.image}
                url = {card.url}
                titleCentered = {card.titleCentered}
                external = {card.external}
    
                --title-color = {card.titleColor}
            />
        {:else}
            <h2>No hay ningún elemento para mostrar 😥</h2>
        {/each}
    </div>
</div>

<style>
    .main{
        margin: 20px 40px;
    }

    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }

    p{
        font-size: 1.2rem;
    }
</style>