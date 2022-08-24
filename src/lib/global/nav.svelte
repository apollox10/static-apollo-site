<script type="ts">
    export let title: string, route: string
    let show = false, staticNav = false;

    function openNav(){
        show = !show;
        staticNav = !staticNav;
    }
</script>
<nav class="{staticNav ? "static-nav" : ""}">
    <div class="title-container">
        <a class= "title" href="{route}">{title}</a>
    </div>
    <!--Navegation links-->
    <div class="links-container {show ? "show" : "hide"}">
        <a class="homepage-link" href="/" target="_self">Nexus</a>
        <a class="tech-link" href="/tech" target="_self">Tecnología</a>
        <a class="news-link" href="/news" target="_self">Noticias</a>
        <a class="games-link" href="/games" target="_self">Juegos</a>
        <a class="learn-link" href="https://learn.apollonexus.com/" target="_self">Aprendizaje</a>
        <a class="about-link" href="/about" target="_self">Sobre Apollox</a>
    </div>
    <div class="icon-container" on:click={openNav}>
        <img src="/nav-menu.svg" alt="Menu">
    </div>
    
</nav>

<style>

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: calc(100% - 20px);
        min-width: 350px;
        height: 60px;
        padding: 0 10px;

        background-color: var(--nav);
        box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.1);
    }

    a{
        text-decoration: none;
        font-weight: 600;
        color: var(--link-color);
    }

    .title-container{
        height: 40px;
        padding: 7px 0 13px 0;
    }

    .title{
        font-size: 2rem;
        font-weight: bold;
    }

    .links-container{
        display: flex;
    }
    
    @media only screen and (min-width:1000px){
         
        .links-container{
            gap: 10px;
        }

        .links-container > a{
            padding: 5px 10px;
            border-radius: 30px;
        }

        .homepage-link:hover{
            color: var(--homepage-hover);
            background-color: var(--homepage-background);
        }

        .tech-link:hover{
            color: var(--tech-hover);
            background-color: var(--tech-background);
        }

        .news-link:hover{
            color: var(--news-hover);
            background-color: var(--news-background);
        }

        .games-link:hover{
            color: var(--games-hover);
            background-color: var(--games-background);
        }
        
        .learn-link:hover{
            color: var(--learn-hover);
            background-color: var(--learn-background);
        }

        .about-link:hover{
            color: var(--about-hover);
            background-color: var(--about-background);
        }

        .icon-container{
            display: none;
        }

    }

    @media only screen and (max-width : 1000px){
        
        nav{
            padding: 0;
            width: 100%;
            top: 0px;
        }

        .static-nav{
            position: sticky;
            z-index: 1;
        }

        .title-container{
            margin-left: 10px;
        }

        .title:link, .title:visited{
            color: var(--title-mobile);
        }

        .links-container{
            flex-direction: column;
            position: fixed;

            align-items: center;
            justify-content: space-between;
            overflow: auto;

            width: 100%;
            height: calc(100% - 100px);
            top: 60px;

            padding: 20px 0;
            gap: 20px;

            background-color: var(--black);

        }

        .show{
            top: 60px;
            transition: .6s;
        }

        .hide{
            top: 100%;
            transition: .6s;
        }

        .links-container > a {
            color: var(--white);
            font-size: 1.5rem;
            text-align: center;

            width: 15rem;
            border-radius: 30px;
        }

        .links-container > a:hover{
            color: var(--darkGray);
            background-color: var(--white);
        }

        .icon-container{
            width: 50px;
            margin: 5px;
            border-radius: 10px;
        }

        .icon-container:hover, .icon-container:active{
            filter: invert(100%);
            background-color: rgba(250, 250, 255, .15);

            cursor: pointer;
        }

    }

</style>