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
    import NavHomepage from "../components/homepage/nav-homepage.svelte";
    import {onMount} from "svelte"
    export let error
    export let status

    onMount(() => url = window.location.href);
    export let url

</script>


<body>
    <NavHomepage />
    <h1>Ups, sucedió un error jeje</h1>
    <h1>{error.name} {status}</h1>
    {#if error.status = 404}
        <h2>La página que ingresaste, "{url}" no existe.</h2>
    {/if}
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