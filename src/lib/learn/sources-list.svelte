<script>
    import LinkCard from "./link-card.svelte";
    export let title = "Recursos"
</script>

<div class="links">
    <h1>{title}</h1>
    <div class="cards">
        <LinkCard 
        title = "Programación desde 0"
        text = "Recursos utilizados o útiles para el cruso de programación desde cero, donde cualquiera, sin tener conocimiento previo puede adentrarse en el mundo de la programación"
        url = "/learn/cursos/programacion-desde-cero"
        --card-color = "var(--darkGray)"
        --text-color = "var(--white)"
        --title-color = "var(--learn)"
        />
    </div>
    
</div>

<style>
    h1{
        text-align: left;
        height: 70px;
        transition: 1s;
        padding-bottom: 10px;
        margin-bottom: 0;
        margin: 0 20px;
        transition: 1s;
    }

    .cards{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .links{
        background-color: rgba(255, 255, 255, 0.02);
        background-blend-mode: overlay;
        border-radius: 10px;
        padding: 20px;
        padding-top: 0;
        transition: 1s;
    }

    @media only screen and (max-width:800px){
        h1{
            text-align: center;
            margin-bottom: 60px;
            transition: 1s;
        }

        .links{
            padding: 0;
            padding-top: 10px;
            transition: 1s;
        }
    }
</style>