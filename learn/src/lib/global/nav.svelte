<script>
    export let show = false, staticNav = false;

    function openNav(){
        show = !show;
        staticNav = !staticNav;
    }
</script>   

<nav class="{staticNav ? "static-nav" : ""}">
    <div class="title-container">
        <a href="/" class="title">Apollo Learn</a>
    </div>
    <div class="links-container {show ? "show" : "hide"}">
        <a href="https://apollonexus.com/">Nexus</a>
        <a href="https://apollonexus.com/tech">Tecnología</a>
        <a href="https://apollonexus.com/news">Noticias</a>
        <a href="https://apollonexus.com/games">Juegos</a>
        <a href="/" target="_self" class="learn">Learn</a>
        <a href="https://apollonexus.com/about">Sobre Apollo</a>
    </div>
    <div class="icon-container" on:click={openNav} >
        <img src="/nav-menu.svg" alt="Menu">
    </div>
</nav>

<style>

    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: calc(100% - 20px);
        min-width: 300px;
        height: 60px;
        padding: 0 10px;

        background-color: var(--learn);
        box-shadow: 0px 3px 5px rgb(0, 0, 0, 0.1);
    }

    a{
        text-decoration: none;
        font-weight: 600;
        color: var(--darkGray);
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

    @media only screen and (min-width: 1000px){

        .icon-container{
            display: none;
        }

        .links-container{
            gap: 10px;
        }

        .links-container > a{
            padding: 5px 10px;
            border-radius: 30px;
        }

        .links-container > a:hover{
            color: var(--white);
            background-color: var(--darkGray);
            
        }

        .links-container > .learn:hover{
            color: var(--darkGray);
            background-color: var(--white);
        }

    }

    @media only screen and (max-width: 1000px){

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
            transition: 1s;
        }

        .hide{
            top: 100%;
            transition: 1s;
        }

        .links-container > a {
            color: var(--white);
            font-size: 1.5rem;
        }

        .links-container > a:hover{
            color: var(--darkGray);
            background-color: var(--white);
        }

        .links-container > .learn:hover{
            color: var(--darkGray);
            background-color: var(--white);
        }

        .icon-container {
            width: 50px;
            margin: 5px;
            border-radius: 10px;
        }

        .icon-container:hover{
            filter: invert(100%);
            background-color: rgba(250, 250, 255, .15);

            cursor: pointer;
        }

    }

</style>