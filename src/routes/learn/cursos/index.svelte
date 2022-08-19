<script>
    import CursosList from "$lib/learn/cursos/cursos-list.svelte";
</script>
 
<svelte:head>
    <title>Cursos | Apollo Learn</title>
</svelte:head>

<main>
    <CursosList>
        <h1 slot="title">Cursos de Programación</h1>
    </CursosList>
</main>

<style>
    main{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 30px;
        padding: 0 20px;
    }    
</style>

