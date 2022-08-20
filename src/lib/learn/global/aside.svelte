<aside class="aside">
    <h1>Siguientes pasos:</h1>
    <slot name="cards"></slot>
</aside>

<style>
    h1{
        font-size: 2em;
        margin-top: 20px;
        font-weight: 400;
    }

    aside{
        grid-column: span 1 / auto;
        background-color: var(--darkGray);

        border-top: 5px solid;
        border-bottom: 5px solid;
        border-color: var(--learn);

        padding: 0 20px;
    }
    
    @media only screen and (max-width: 550px){
        h1{
            font-size: 1.5rem;
        }
    }
</style>