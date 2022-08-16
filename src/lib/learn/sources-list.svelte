<script>
    import LinkCard from "./link-card.svelte";
    export let title = "Recursos"
    export let cards = []
</script>

<div class="links">
    <slot name="title">
        <h1>{title}</h1>
    </slot>
    <div name="cards" class="cards">
        {#each cards as card}
            <LinkCard
                title = {card.title}
                text = {card.text}
                image = {card.image}
                url = {card.url}
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
    
    h2{
        text-align: center;
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