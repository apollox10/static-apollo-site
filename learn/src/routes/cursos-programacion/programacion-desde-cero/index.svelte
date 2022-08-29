<script lang="ts">
    import IconCard from "$lib/global/icon-card.svelte"
    import Aside from "$lib/global/aside.svelte"

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
            titleColor: "var(--learn)",
        }
    ];

    let otherCards:any = [
        {
            title: "(Próximamente) Programación Orientada a Objetos e Interfaces Gráficas",
            image: "/cursos/programacion-orientada-a-objetos-e-interfaces/course-logo.svg",
            url: "#",
            titleCentered: false,
            external: false,

            titleColor: "rgb(255, 159, 0)",
            cursor: "not-allowed"
        }
    ]
</script>

<svelte:head>
    <title>Programación Desde Cero | Apollo Learn</title>
</svelte:head>

<div class="main">
    <article>
        <h1>Curso de Programación Desde Cero</h1>
        <p>
            Este curso, como su nombre lo dice, está enfocado a personas que no tengan conocimientos previos a la programación, pero deseen adentrarse en
            este mundo.
        </p>
        <p>
            Este curso utiliza el lenguaje de programación C++, aunque gran cantidad de los conceptos debería poder ser aplicado en cualquier otro
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
    </article>
    <aside>
        <Aside>
            <div class="aside-content">
                <h2>Otros cursos: </h2>
                <div class="other-cards">
                    {#each otherCards as card}
                        <IconCard 
                            title = {card.title}
                            image = {card.image}
                            url = {card.url}
                            titleCentered = {card.titleCentered}
                            external = {card.external}
                
                            --title-color = {card.titleColor}
                            --cursor = {card.cursor}
                        />
                    {:else}
                        <h3>No hay ningún elemento para mostrar 😥</h3>
                    {/each}
                </div>
            </div>
        </Aside>
    </aside>
</div>

<style>
    .main{
        margin: 30px 15px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }

    article{
        grid-column: span 2;
    }

    h1{
        margin: 0px;
    }

    p{
        font-size: 1.2rem;
        text-align: justify;
        line-height: 1.75rem;
        margin: 10px 0;
    }

    p:last-of-type{
        margin-bottom: 30px;
    }

    .cards{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-auto-rows: 1fr;
        gap: 20px;
    }

    .aside-content{
        padding: 0px 20px 40px 20px;
    }

    @media only screen and (max-width: 1000px){

        aside{
            grid-column: span 2;
        }
    }

</style>