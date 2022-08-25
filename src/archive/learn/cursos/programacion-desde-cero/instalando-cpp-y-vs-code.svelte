<script>
    import WIP from "$lib/global/WIP.svelte";
    import Aside from "$lib/learn/global/aside.svelte";
    import IconCard from "$lib/learn/global/icon-card.svelte";

    export let cards = [
        {
            title: "2. Variables y tipos de datos",
            titleCentered : true,
            text: "",
            image : "/learn/cursos/programacion-desde-cero/variables-y-tipos-de-datos/pi.svg",
            url : "/learn/cursos/programacion-desde-cero/variables-y-tipos-de-datos",
            color : "rgba(255,255,255,.03)",
            textColor: "var(--white)",
            titleColor: "var(--white)"
        }
    ]
</script>

<div class="main">
    <article class="article">
        <div class="head">
            <h1>Cómo instalar Visual Studio Code y programar en C++</h1>
            <div class="title-images">
                <img 
                    src="/learn/cursos/programacion-desde-cero/instalando-cpp-y-vs-code/vscode.png" 
                    alt="VS Code"
                    class="title-image"
                >
                <img 
                    src="/learn/cursos/programacion-desde-cero/instalando-cpp-y-vs-code/Cpp.svg" 
                    alt="C++"
                    class="title-image"
                >
            </div>
            <div class="autor">
                <img 
                    src="/editors/Julio Morales.jpg"
                    alt="Julio Morales"
                    class="profile-picture"
                >
                <div class="article-info">
                    <h3>Escrito por Julio Morales (Apollox10).</h3>
                    <h3>Última edición: 20 de Agosto de 2022.</h3>
                </div>
            </div>
        </div>

        <div class="content">
            <p> Para este curso de programación desde 0, estaremos utilizando el editor de Visual Studio Code para programar, 
                y aprenderemos con el lenguaje de programación llamado C + +.</p>
            <p> Lo primero que tendremos que hacer es instalar Visual Studio Code (que de ahora en adelante me referiré a él como VS Code). 
                Este programa es básicamente donde podremos crear y editar nuestro código, lo cual nos permitirá crear programas en múltiples lenguajes de programación (en nuestro caso de momento solo veremos C ++ para simplificar las cosas).
            </p>
        </div>
    </article>

    <Aside>
        <div slot="cards" class = "cards">
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
    </Aside>
    
</div>
<WIP --icon-color="var(--white)"/>


<style>

    .main{
        display: grid;
        color: var(--darkGray);
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        grid-auto-rows: minmax(100px, auto);
        padding: 30px;
        gap: 30px;
    }
    .article{
        grid-column: span 2 / auto;
        background-color: var(--white);
        padding: 0 20px;
    }

    h1{
        text-align: center;
        font-size: 2em;
    }

    .title-images{
        display: flex;
        justify-content: space-evenly;
        padding: 20px 0;
    }

    .title-image{
        width: 25%;
    }

    .autor{
        display: flex;
        align-items: center;
        gap: 20px;
        margin: 20px 0;
    }

    .profile-picture{
        width: 60px;
        border-radius: 100px;
    }

    h3{
        font-size: 1rem;
        font-weight: 400;
        margin: 5px 0;
    }

    p{
        font-size: 1.5rem;
        text-align: justify;
    }

    /* Aside */

    .cards{
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
    

    @media only screen and (max-width: 1000px){

        .main{
            grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        }

        .article{
            grid-column: span 1 / auto;
        }
    }
    @media only screen and (max-width: 550px){

        .main{
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        }

        h1{
            font-size: 1.5rem;
        }

        .profile-picture{
            width: 60px;
        }
        h3{
            font-size: .8rem;
        }
}
</style>