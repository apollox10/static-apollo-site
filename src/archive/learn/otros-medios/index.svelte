<script>
import MediosList from "$lib/learn/otros-medios/medios-list.svelte";
</script>
 
<svelte:head>
    <title>Otros Medios Recomendados | Apollo Learn</title>
</svelte:head>

<div class="main">
    <MediosList>
        <h1 slot="title">Otros Medios Recomendados para Aprender a Programar</h1>
    </MediosList>
</div>

<style>
    .main{
        padding: 0 20px;
    }
</style>

