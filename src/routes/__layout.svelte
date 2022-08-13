<script>
    import Nav from "$lib/global/nav.svelte";
    import Footer from "$lib/global/footer.svelte";
</script>

<svelte:head>
    <link rel="icon" type="image/x-icon" href="/head-icons/homepage.png">
</svelte:head>

<header>
    <Nav 
        class = "nav"
        title = "Apollox"
        route = "/"
        
        --nav = "white"
        --link-color = "var(--homepage)"
        --link-hover-color = "var(--white)"
        --link-hover-background = "var(--darkGray)"

        --homepage-hover = "var(--white)"
        --homepage-background = "var(--homepage)"

        --tech-hover = "var(--tech)"
        --tech-background = "var(--darkGray)"

        --news-hover = "var(--news)"
        --news-background = "var(--darkGray)"

        --games-hover = "var(--games)"
        --games-background = "var(--darkGray)"

        --learn-hover = "var(--learn)"
        --learn-background = "var(--darkGray)"

        --about-hover = "var(--about)"
        --about-background = "var(--darkGray)"
    />
</header>
<main>
    <slot></slot>
</main>
<footer>
    <Footer --link-color = "var(--white)"/>
</footer>