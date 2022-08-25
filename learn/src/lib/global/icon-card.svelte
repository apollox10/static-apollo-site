<script lang="ts">
    export let  title = "Title",
                image = "https://www.reshot.com/preview-assets/icons/XHLENYATPB/world-error-XHLENYATPB.svg",
                url = "#",
                titleCentered = false,
                external = false
</script>       

<div class="card" >
    <a href="{url}" target="{external ? "_blank" : "_self"}">
        <h1 class="{titleCentered ? "text-centered" : ""}">{title}</h1>
        <div class="details">
            <img src="{image}" alt="{title}">
        </div>
    </a>
</div>

<style>

    a{
        color: var(--white);
        text-decoration: none;
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

    .details{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    img{
        width: 100px;
        max-height: 100px;
        margin: 5px 0;
    }
</style>