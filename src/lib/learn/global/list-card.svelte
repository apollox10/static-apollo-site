<script>
    export let  title = "Titulo", 
                image = "https://www.reshot.com/preview-assets/icons/3GNMVZCSDU/coding-3GNMVZCSDU.svg", 
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus aspernatur natus quidem id recusandae ipsum enim tempore amet tenetur, saepe in facere asperiores. Laborum, perspiciatis quod? Quis, vero magni.",
                url = "",
                titleCentered = false,
                external = false

    
</script>

<a href="{url}" class="card" target="{external ? "_blank" : "_self"}">
    <h1 class="{titleCentered ? "text-centered" : ""}">{title}</h1>
    <div class="details">
        <div class="image">
            <img src="{image}" alt="{title}">
        </div>
        <p>{text}</p>
    </div>
</a>

<style>
    a{
        color: var(--text-color);
        text-decoration: none;
    }

    .card{
        background-color: var(--card-color);
        border-radius: 10px;
        padding: 5px 30px;
        transition: .2s;
    }

    .card:hover{
        filter: brightness(110%);
        transition: .2s;
    }

    h1{
        color: var(--title-color);
        font-weight: 400;
        margin: 10px 0;
        font-size: 1.8rem;
    }

    .text-centered{
        text-align: center;
    }

    .details{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
    }

    img{
        width: 100px;
        max-height: 100px;
        margin: 5px 0;
    }

    @media only screen and (max-width:1000px){
        .image{
            display: none;
        }
    }

</style>