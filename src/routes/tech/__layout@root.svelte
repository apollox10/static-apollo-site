<script>
    import Nav from "$lib/global/nav.svelte";
    import Footer from "$lib/global/footer.svelte";
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="/head-icons/tech.png">
</svelte:head>

<Nav 
    title = "Apollo Tech"
    route = "/tech"

    --nav = "var(--tech)"
    --link-color = "var(--white)"
    --link-hover-color = "var(--white)"
    --link-hover-background = "var(--darkGray)"
    --title-mobile = "var(--white)"
    --icon-hover = "var(--white)"
    --icon-background ="var(--darkGray)"

    --homepage-hover = "var(--white)"
    --homepage-background = "var(--darkGray)"

    --tech-hover = "var(--tech)"
    --tech-background = "var(--white)"

    --news-hover = "var(--white)"
    --news-background = "var(--darkGray)"

    --games-hover = "var(--white)"
    --games-background = "var(--darkGray)"

    --learn-hover = "var(--white)"
    --learn-background = "var(--darkGray)"

    --about-hover = "var(--white)"
    --about-background = "var(--darkGray)"
/>
<main>
    <slot></slot>
</main>
<footer>
    <Footer --link-color = "var(--tech)"/>
</footer>

<style>
    main{
        min-width: 350px;
    }
</style>