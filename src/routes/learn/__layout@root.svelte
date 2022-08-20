<script>
    import Nav from "$lib/global/nav.svelte";
    import Footer from "$lib/global/footer.svelte";
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="/head-icons/learn.png">
</svelte:head>

<header>
    <Nav 
    class = "nav"
    title = "Apollo Learn"
    route = "/learn"

    --nav = "var(--learn)"
    --link-color = "var(--darkGray)"
    --link-hover-color = "var(--white)"
    --link-hover-background = "var(--darkGray)"
    --title-mobile = "var(--darkGray)"
    --icon-hover = "var(--white)"
    --icon-background ="var(--darkGray)"

    --learn-hover = "var(--learn)"
    --learn-background = "var(--darkGray)"

    --homepage-hover = "var(--white)"
    --homepage-background = "var(--darkGray)"
    --tech-hover = "var(--white)"
    --tech-background = "var(--darkGray)"
    --news-hover = "var(--white)"
    --news-background = "var(--darkGray)"
    --games-hover = "var(--white)"
    --games-background = "var(--darkGray)"
    --about-hover = "var(--white)"
    --about-background = "var(--darkGray)"
    />
</header>
<main>
    <slot></slot>
</main>
<footer>
    <Footer --link-color = "var(--learn)"/>
</footer>

<style>
    main{
        color: var(--darkGray);
        background-color: var(--white);
        min-width: 350px;
    }
</style>