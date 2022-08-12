<script>
    import Nav from "../global/nav.svelte";
</script>

<div class="parent">
    <Nav 
        class = "nav"
        title = "Apollo Games"
        route = "/games"

        --nav = "var(--games)"
        --link-color = "var(--darkGray)"
        --link-hover-color = "var(--white)"
        --link-hover-background = "var(--darkGray)"

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
</div>
