<script>
    import IconCard from "$lib/learn/global/icon-card.svelte";

    export let cards = [
        {
            title: "1. Instalando Visual Studio Code y C++",
            titleCentered : true,
            text: "",
            image : "https://code.visualstudio.com/assets/images/code-stable.png",
            url : "/learn/cursos/programacion-desde-cero/instalando-cpp-y-vs-code",
            color : "var(--darkGray)",
            textColor: "var(--white)",
            titleColor: "var(--white)"
        },
        {
            title: "2. Variables y tipos de datos",
            titleCentered : true,
            text: "",
            image : "/learn/cursos/programacion-desde-cero/variables-y-tipos-de-datos/pi.svg",
            url : "/learn/cursos/programacion-desde-cero/variables-y-tipos-de-datos",
            color : "var(--darkGray)",
            textColor: "var(--white)",
            titleColor: "var(--white)"
        },
    ]

</script>

<div class="body">
    <h1>Clases de Programación Desde Cero</h1>
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
        padding: 20px 50px;
    }

    h2{
        text-align: center;
    }

    .cards{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
</style>