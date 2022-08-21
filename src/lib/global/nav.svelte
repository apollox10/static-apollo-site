<script>
    export let title, route
    let show = false;
</script>
<nav class="nav">
    <div class="{show ? "cont-show" : "cont-hide"}">
        <div class="title-container">
            <a class="title" href="{route}">{title}</a>
        </div>
        <div class="icon-container" on:click="{() => show = !show}">
            <span class="material-symbols-outlined">
            menu
            </span>
        </div>
    </div>
    <div class="title-container">
        <a class="title" href="{route}">{title}</a>
    </div>
    <!--Navegation links-->
    <div class="links-container {show ? "show" : "hide"}"  on:mouseup="{() => show = !show}">
        <a class="homepage-link nav-link" href="/">Inicio</a>
        <a class="tech-link nav-link" href="/tech">Tecnología</a>
        <a class="news-link nav-link" href="/news">Noticias</a>
        <a class="games-link nav-link" href="/games">Juegos</a>
        <a class="learn-link nav-link" href="/learn">Aprendizaje</a>
        <a class="about-link nav-link" href="/about">Proyecto Apollo</a>
    </div>
    <div class="icon-container" on:click="{() => show = !show}">
        <span class="material-symbols-outlined">
        menu
        </span>
    </div>
    
</nav>

<style>

    span{
        text-align: center;
        font-size: 40px;
        color: var(--link-color);
    }

    span:hover{
        color: var(--icon-hover);
    }
    .nav{
        display: flex;
        width: 100%;
        align-items: center;
        min-width: 350px;
        height: 61px;
        background-color: var(--nav);
        box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.1);
    }

    .title-container{
        padding-top: 8px;
        padding-bottom: 13px;
        margin-left: 10px;
        height: 40px;
        flex: 1;
        z-index: 10;
    }

    .title:link, .title:visited{
        font-size: 2rem;
        font-weight: bold;
    }

    a:link, a:visited{
        text-decoration: none;
        font-weight: bold;
        padding: 5px 10px;
        border-radius: 30px;
    }

    .links-container{
        display: flex;
    }
    
    @media only screen and (min-width:1000px){
 
        a:link, a:visited{
            color:var(--link-color);
        }
        
        .links-container{
            gap: 10px;
            padding-right: 10px;
        }

        .nav-link:hover{
            color: var(--link-hover-color);
            background-color: var(--link-hover-background);
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

        .cont-hide, .cont-show{
            display: none;
        }


    }

    @media only screen and (max-width : 1000px){
        
        .title:link, .title:visited{
            color: var(--title-mobile);
        }

        a:link, a:visited{
            color : var(--white);
        }

        .links-container{
            background-color: var(--darkGray);
            display: flex;
            flex-direction: column;
            overflow: auto;
            gap: 50px;
            position: fixed;
            width: 100%;
            height: calc(100vh - 60px);
            top: calc(60px + 100%);
            padding: 50px 0;
            align-items: center;
            font-size: 25px;
            z-index: 1;
            transition: 0.5s;
        }

        .nav-link{
            width: 15rem;
            text-align: center;
        }

        .nav-link:hover{
            color: var(--darkGray);
            background-color: var(--white);
        } 

        .icon-container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            margin-right: 10px;
            z-index: 1;
            transition: .5s;
            border-radius: 10px;
        }

        .icon-container:hover, .icon-container:active{
            background-color: var(--icon-background);
            transition: .5s;
        }

        .show{
            top: 61px;
            transition: 0.5s;
       
            width: 100%;
            height: 100%;
            z-index: 10000000;
        }

        .cont-show{
            position: fixed;
            display: flex;
            align-items: center;
            color: var(--nav);
            background-color: var(--nav);
            height: 61px;
            width: 100%;
            z-index: 20;
        }

        .cont-hide{
            z-index: 0;
            display: none;
            color: var(--tech);
        }
    }

    
    
    
</style>