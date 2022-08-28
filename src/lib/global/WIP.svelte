<script lang="ts">
    /*
    import "$lib/firebase"
    import { getDownloadURL, getStorage, ref } from "firebase/storage";

    const storage = getStorage();

    var fileUrl = "";

    getDownloadURL(ref(storage, "global/WIP/WIP-icon.png"))
        .then((url) => {
            fileUrl = url;
        })
        .catch((error) => {
            console.log(error)
            console.log("Couldn't load the image")
            fileUrl = "https://www.reshot.com/preview-assets/icons/XHLENYATPB/world-error-XHLENYATPB.svg"
        })
    console.log(fileUrl)

    */
</script>



<div class="WIP">
    <h1>
        Esta página aún está en progreso, por favor regresa mas tarde.
    </h1>

    <img src="/WIP-icon.png" alt="En proceso">

    <h2>El apoyo va en camino...</h2>

</div>
<style>
    .WIP{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 10px;
        gap: 50px;
    }
    h1{
        margin: 50px;
        text-align: center;
    }

    img{
        width: 100%;
        max-width: 500px;
        min-width: 300px;   
    }

    h2{
        text-align: center;
        margin-top: 75px;
    }
</style>