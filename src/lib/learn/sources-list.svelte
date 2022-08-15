<script>
    import LinkCard from "./link-card.svelte";
    export let title = "Recursos"
</script>

<div links>
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
        height: 50px;
        margin-bottom: 20px;
        transition: 1s;
    }

    .cards{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    @media only screen and (max-width:800px){
        h1{
            text-align: center;
            margin-bottom: 70px;
            transition: 1s;
        }
    }
</style>