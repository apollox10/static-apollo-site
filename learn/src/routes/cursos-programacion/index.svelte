<script lang="ts">
    import CoursesList from "$lib/courses/courses-list.svelte";
</script>

<svelte:head>
    <title>Cursos de Programación | Apollo Learn</title>
</svelte:head>

<div class="main">
    <CoursesList>
        <h1 slot="title">Todos los Cursos de programación</h1>
    </CoursesList>
</div>

<style>
    .main{
        margin: 20px;
    }
</style>