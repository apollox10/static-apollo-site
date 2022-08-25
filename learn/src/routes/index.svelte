<script lang="ts">
    import CoursesList from "$lib/courses/courses-list.svelte";
    import OtherMediaList from "$lib/other-media/other-media-list.svelte";
</script>

<svelte:head>
    <title>Apollo Learn</title>
</svelte:head>

<div class="main">
    <CoursesList>
        <h1 slot="title"><a href="/cursos-programacion">Cursos de programación</a></h1>
    </CoursesList>
    <OtherMediaList>
        <h1 slot="title">Medios recomendados</h1>
    </OtherMediaList>

</div>

<style>
    .main{
        margin: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }

    a{
        text-decoration: none;
        color: var(--learn);
    }

    a:hover{
        color: var(--white);
    }
</style>

