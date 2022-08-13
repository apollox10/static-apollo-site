<script context="module">
    export const load = ({error, status}) => {
        return {
            props: {
                error, status
            }
        }
    }
</script>

<script>
    import {onMount} from "svelte"
    export let error
    export let status

    onMount(() => url = window.location.href);
    export let url
</script>


<body>
    <main>
        <h1>Ups, sucedió un error jeje</h1>
        <h1>{error.name} {status}</h1>
        {#if status === 404}
            <h2>La página que ingresaste, "{url}" no existe.</h2>
        {/if}
    </main>
</body>


<style>
    body{
        margin: 0;
        background-color: --black;
        color: --white;
    }

    h1, h2{
        margin: 100px;
        text-align: center;
    }
</style>