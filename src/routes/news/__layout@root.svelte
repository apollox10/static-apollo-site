<script>
    import Nav from "$lib/global/nav.svelte";
    import Footer from "$lib/global/footer.svelte";
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="/head-icons/news.png">
</svelte:head>


<header>
    <Nav 
    class = "nav"
    title = "Apollo News"
    route = "/news"

    --nav = "var(--news)"
    --link-color = "var(--white)"
    --link-hover-color = "var(--white)"
    --link-hover-background = "var(--darkGray)"

    --news-hover = "var(--news)"
    --news-background = "var(--white)"

    --homepage-hover = "var(--white)"
    --homepage-background = "var(--darkGray)"
    --tech-hover = "var(--white)"
    --tech-background = "var(--darkGray)"
    --games-hover = "var(--white)"
    --games-background = "var(--darkGray)"
    --learn-hover = "var(--white)"
    --learn-background = "var(--darkGray)"
    --about-hover = "var(--white)"
    --about-background = "var(--darkGray)"
    />
</header>
<main>
    <slot></slot>
</main>
<footer>
    <Footer --link-color = "var(--news)"/>
</footer>