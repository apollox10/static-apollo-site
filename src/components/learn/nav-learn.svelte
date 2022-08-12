<script>
    import Nav from "../global/nav.svelte";
</script>

<div class="parent">
    <Nav 
        class = "nav"
        title = "Apollo Learn"
        route = "/learn"

        --nav = "var(--learn)"
        --link-color = "var(--darkGray)"
        --link-hover-color = "var(--white)"
        --link-hover-background = "var(--darkGray)"

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
</div>
