<script>

</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

<div>
<h1>
    Esta página aún está en progreso, por favor regresa mas tarde.
</h1>
<div class="icon">
    <span class="material-symbols-outlined">
        sync_problem
    </span>
</div>
</div>
<style>
    h1{
        margin: 50px;
        text-align: center;
    }

    span{
        font-size: 300px;
        transform: scaleX(-1);
    }
    .icon{
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 200px auto 200px auto;
        position: relative;
        color: var(--icon-color);
        animation: rotation 4s infinite ease-in-out;
    }

    @keyframes rotation{
        0%{
            transform: rotate(0deg);
        }
        20%{
            transform: rotate(0deg);
        }
        50%{
            transform: rotate(180deg);
        }
        70%{
            transform: rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
</style>