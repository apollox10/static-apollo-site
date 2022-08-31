<script lang="ts">
    import ListCard from "$lib/global/list-card.svelte";

    let cards = [
        {
            title: "Programación desde 0",
            text: "Curso de programación desde cero, donde cualquiera, sin tener conocimiento previo puede adentrarse en el mundo de la programación. El lenguaje de programación utilizado es C++. No es recomendado para personas que ya sepan programar, a menos de que quieran reforzar conocimientos o aprender sobre C y C++.",
            image: "/cursos-programacion/programacion-desde-cero/programacion-desde-cero-logo.svg",
            url: "/cursos-programacion/programacion-desde-cero", //"/learn/cursos/programacion-desde-cero"
            titleCentered: false,
            external: false,

            titleColor: "var(--learn)",
            cursor: "pointer"
        },
        {
            title: "(Próximamente) Programación Orientada a Objetos e Interfaces Gráficas",
            text: 'Curso de nivel "intermedio" enfocado a aprender sobre la Programación Orientada a objetos usando C++ y Java, y utilizar esos conocimientos para diseñar interfaces gráficas en Python y C#. No recomendado para principiantes, los alumnos deberán tener al menos conocimientos básicos de programación antes de tomarlo.',
            image: "/cursos-programacion/programacion-orientada-a-objetos-e-interfaces/oop-logo.svg",
            url: "#",
            titleCentered: false,
            external: false,

            titleColor: "rgb(255, 159, 0)",
            cursor: "not-allowed"
        }
    ]
</script>

<div class="list">
    <slot name="title">
        Courses
    </slot>
    <div class="cards" name="cards">
        {#each cards as card}
            <ListCard 
                title = {card.title}
                text = {card.text}
                image = {card.image}
                url = {card.url}
                titleCentered = {card.titleCentered}
                external = {card.external}
    
                --title-color = {card.titleColor}
                --cursor = {card.cursor}
            />
        {:else}
            <h2>No hay ningún elemento para mostrar 😥</h2>
        {/each}
    </div>

</div>

<style>
    .cards{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
</style>