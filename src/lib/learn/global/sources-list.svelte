<script>
    import ListCard from "./list-card.svelte";
    export let cards = []
</script>

<div name="cards" class="cards">
    {#each cards as card}
        <ListCard
            title = {card.title}
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

<style>
    
    h2{
        text-align: center;
    }

    .cards{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

</style>