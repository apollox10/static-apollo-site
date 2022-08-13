<script>
    import Nav from "$lib/global/nav.svelte";
    import Footer from "$lib/global/footer.svelte";
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="/head-icons/about.png">
</svelte:head>

<header>
    <Nav 
    class = "nav"
    title = "Sobre Apollo"
    route = "/about"

    --nav = "var(--about)"
    --link-color = "var(--darkGray)"
    --link-hover-color = "var(--white)"
    --link-hover-background = "var(--darkGray)"

    --about-hover = "var(--about)"
    --about-background = "var(--darkGray)"

    --homepage-hover = "var(--white)"
    --homepage-background = "var(--darkGray)"
    --tech-hover = "var(--white)"
    --tech-background = "var(--darkGray)"
    --news-hover = "var(--white)"
    --news-background = "var(--darkGray)"
    --games-hover = "var(--white)"
    --games-background = "var(--darkGray)"
    --learn-hover = "var(--white)"
    --learn-background = "var(--darkGray)"  
    />
</header>
<main>
    <slot></slot>
</main>
<footer>
    <Footer --link-color = "var(--about)"/>
</footer>