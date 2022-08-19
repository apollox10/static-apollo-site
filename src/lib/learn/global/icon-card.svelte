<script>
    export let  title = "Titulo", 
                image = "https://www.reshot.com/preview-assets/icons/3GNMVZCSDU/coding-3GNMVZCSDU.svg",
                url = "",
                external = false    
</script>

<a href="{url}" class="link" target="{external ? "_blank" : "_self"}">
    <div class="card">
        <h1>{title}</h1>
        <img src="{image}" alt="{title}">
    </div>
</a>

<style>
    a{
        color: var(--text-color);
        text-decoration: none;
    }

    .link{
        background-color: var(--card-color);
        border-radius: 10px;
        padding: 5px 30px;
        transition: .2s;
    }

    .link:hover{
        filter: brightness(110%);
        transition: .2s;
    }

    .card{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    h1{
        color: var(--title-color);
        text-align: center;
        font-weight: 400;
        margin: 10px 0;
        font-size: 1.8rem;
    }

    img{
        width: 100px;
        height: 100px;
        margin: 5px 0;
    }

</style>