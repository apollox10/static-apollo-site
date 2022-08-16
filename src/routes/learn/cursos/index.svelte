<script>
    import SourcesList from "$lib/learn/sources-list.svelte";

    export let cards = [
        {
            title: "Programación desde 0",
            text: "Curso de programación desde cero, donde cualquiera, sin tener conocimiento previo puede adentrarse en el mundo de la programación. El lenguaje de programación utilizado es C++. No es recomendado para personas que ya sepan programar, a menos de que quieran reforzar conocimientos o aprender sobre C y C++.",
            image: "https://www.reshot.com/preview-assets/icons/3GNMVZCSDU/coding-3GNMVZCSDU.svg",
            url: "/learn/cursos/programacion-desde-cero",
            color : "var(--darkGray)",
            textColor: "var(--white)",
            titleColor: "var(--learn)"
        },
        {
            title: "(Próximamente) Programación Orientada a Objetos e Interfaces Gráficas",
            text: 'Curso de nivel "intermedio" enfocado a aprender sobre la Programación Orientada a objetos usando C++ y Java, y utilizar esos conocimientos para diseñar interfaces gráficas en Python y C#. No recomendado para principiantes, los alumnos deberán tener al menos conocimientos básicos de programación antes de tomarlo.',
            image: "https://www.reshot.com/preview-assets/icons/8XE5WD67JA/programming-8XE5WD67JA.svg",
            url: "",
            color : "var(--black)",
            textColor: "var(--white)",
            titleColor: "rgb(255,127,0,1)"
        }
    ]
</script>
 
<svelte:head>
    <title>Cursos | Apollo Learn</title>
</svelte:head>

<main>
    <SourcesList {cards}>
        <h1 slot="title">
            Cursos de Programación
        </h1>
    </SourcesList>

</main>

<style>
    main{
        min-width: 500;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
        gap: 30px;
        padding: 20px 20px;
    }    
</style>

