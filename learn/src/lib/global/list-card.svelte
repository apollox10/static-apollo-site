<script lang="ts">
    export let  title = "Title",
                image = "https://www.reshot.com/preview-assets/icons/XHLENYATPB/world-error-XHLENYATPB.svg",
                text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere earum nulla ex animi qui reprehenderit enim rem ab suscipit impedit eaque doloribus, fugit, nostrum consequatur aut voluptates vel adipisci ipsa?",
                url = "#",
                titleCentered = false,
                external = false
</script>       

<div class="card" >
    <a href="{url}" target="{external ? "_blank" : "_self"}">
        <h1 class="{titleCentered ? "text-centered" : ""}">{title}</h1>
        <div class="details">
            <div class="image-container">
                <img src="{image}" alt="{title}">
            </div>
            <p>{text}</p>
        </div>
    </a>
</div>

<style>

    a{
        color: var(--white);
        text-decoration: none;
        cursor: var(--cursor);
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
        font-weight: 400;
        font-size: 1.8rem;
        color: var(--title-color);
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
        .image-container{
            display: none;
        }
    }
</style>