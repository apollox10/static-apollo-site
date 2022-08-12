<script>
    import Nav from "../global/nav.svelte";
</script>

<div class="parent">
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
</div>