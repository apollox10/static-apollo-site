<script>
    export let  title = "Titulo", 
                image = "https://www.reshot.com/preview-assets/icons/3GNMVZCSDU/coding-3GNMVZCSDU.svg", 
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione accusamus aspernatur natus quidem id recusandae ipsum enim tempore amet tenetur, saepe in facere asperiores. Laborum, perspiciatis quod? Quis, vero magni.",
                url = ""
    
</script>

<a href="{url}">
    <div class="card">
        <h1>{title}</h1>
        <div class="details">
            <img src="{image}" alt="{title}">
            <p>{text}</p>
        </div>
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
    }

    .details{
        display: flex;
        gap: 50px;
    }

    img{
        width: 100px;
    }

    @media only screen and (max-width:500px){
        img{
            display: none;
        }
    }

</style>