<script>
    import Nav from "$lib/global/nav.svelte";
    import Footer from "$lib/global/footer.svelte";
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="/head-icons/games.png">
</svelte:head>

<Nav 
    title = "Apollo Games"
    route = "/games"

    --nav = "var(--games)"
    --link-color = "var(--darkGray)"
    --link-hover-color = "var(--white)"
    --link-hover-background = "var(--darkGray)"
    --title-mobile = "var(--darkGray)"
    --icon-hover = "var(--white)"
    --icon-background ="var(--darkGray)"

    --games-hover = "var(--games)"
    --games-background = "var(--darkGray)"

    --homepage-hover = "var(--white)"
    --homepage-background = "var(--darkGray)"
    --tech-hover = "var(--white)"
    --tech-background = "var(--darkGray)"
    --news-hover = "var(--white)"
    --news-background = "var(--darkGray)"
    --learn-hover = "var(--white)"
    --learn-background = "var(--darkGray)"
    --about-hover = "var(--white)"
    --about-background = "var(--darkGray)"
/>

<main>
    <slot></slot>
</main>
<footer>
    <Footer --link-color = "var(--games)"/>
</footer>

<style>
    main{
        min-width: 350px;
    }
</style>