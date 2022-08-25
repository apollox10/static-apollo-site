<script>
    import CursosList from "$lib/learn/cursos/cursos-list.svelte";
    import MediosList from "$lib/learn/otros-medios/medios-list.svelte";
    
</script>
 
<svelte:head>
    <title>Apollo Learn</title>
</svelte:head>

<div class="main">
    <CursosList>
        <h1 slot="title"><a href="/learn/cursos">Cursos de Programación</a></h1>
    </CursosList>

    <MediosList>
        <h1 slot="title"><a href="/learn/otros-medios">Otros Medios Recomendados</a></h1>
    </MediosList>

</div>

<style>
    .main{
        min-width: 310px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 10px;
        padding: 0 20px;
    }    

    a{
        text-decoration: none;
        color: var(--learn);
    }
    a:hover{
        color: var(--white);
    }
</style>

