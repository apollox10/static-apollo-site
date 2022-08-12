<script>
    import Nav from "../global/nav.svelte";
</script>

<div class="parent">
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
</div>
