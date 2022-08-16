<script>
    import WIP from "$lib/global/WIP.svelte";
    import SourcesList from "$lib/learn/sources-list.svelte";
</script>
 
<svelte:head>
    <title>Apollo Learn</title>
</svelte:head>

<main>
    <SourcesList 
        title = "Recursos de Cursos de Programación"
        />
</main>

<style>
    main{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        padding: 20px 20px;
    }    
</style>

