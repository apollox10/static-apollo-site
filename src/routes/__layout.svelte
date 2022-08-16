<script>
    import Nav from "$lib/global/nav.svelte";
    import Footer from "$lib/global/footer.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <link rel="icon" type="image/x-icon" href="/head-icons/homepage.png">
</svelte:head>

<header>
    <Nav 
        title = "Apollox"
        route = "/"
        
        --nav = "white"
        --link-color = "var(--homepage)"
        --link-hover-color = "var(--white)"
        --link-hover-background = "var(--darkGray)"
        --title-mobile = "var(--darkGray)"
        --icon-hover = "var(--white)"
        --icon-background ="var(--darkGray)"

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

<style>
    main{
        min-width: 500px;
    }
</style>