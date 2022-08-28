<script lang="ts">
    export let  title = "Title",
                image = "https://www.reshot.com/preview-assets/icons/XHLENYATPB/world-error-XHLENYATPB.svg",
                url = "#",
                titleCentered = false,
                external = false
</script>       

<div class="card" >
    <a href="{url}" target="{external ? "_blank" : "_self"}" class="link-container">
        <h1 class="{titleCentered ? "text-centered" : ""}">{title}</h1>
        <img src="{image}" alt="{title}">
    </a>
</div>

<style>

    a{
        color: var(--white);
        text-decoration: none;
        display: inline-block;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .card{
        
        background-color: rgba(250, 250, 255, .05);

        padding: 5px 30px;
        border-radius: 10px;

        transition: .2s;
    }

    .card:hover{
        background-color: rgba(250, 250, 255, .1);
        
        transition: .2s;
    }

    h1{
        margin: 10px 0;
        font-weight: 400;
        font-size: 1.8rem;
        color: var(--title-color);
    }

    .text-centered{
        text-align: center;
    }

    img{
        height: 100px;
        max-width: 100px;
    }
</style>