<script lang="ts">

    import IconCard from "$lib/global/icon-card.svelte";

    let cards = [
        {
            title: "freeCodeCamp",
            image: "/otros-medios/fcc.svg",
            url: "https://www.freecodecamp.org/", //"/learn/cursos/programacion-desde-cero"
            titleCentered: true,
            external: true,

            titleColor: "var(--white)"
        },
        {
            title: "Udemy",
            image: "/otros-medios/udemy.svg",
            url: "https://www.udemy.com/",
            titleCentered: true,
            external: true,

            titleColor: "var(--white)"
        }
    ]

</script>

<div class="list">

    <slot name="title">
        Courses
    </slot>

    <div class="cards" name="cards">

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
    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 20px;
    }
</style>