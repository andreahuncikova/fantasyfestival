<template>
    <main>
    <div class="container pt-16">
        <div class="row flex flex-row">
            <div class="col w-1/12"></div>
            <div class="col w-8/12 pt-20">
                <h1>TRANSPORT</h1>
            <p class="mt-6">Fantasy Festival is conveniently situated with excellent access to public transportation and parking facilities.</p>
            <h3 class="mt-6">Public Transportation:</h3>
            <p>If you prefer public transportation, getting to Fantasy Festival is a breeze. The festival venue is centrally located, making it easily accessible by train. The main library, where the festival takes place, is just a short 5-minute walk from the nearest train station. Whether you're arriving from near or far, the well-connected train network ensures a smooth journey to the heart of the festival.</p>
        </div>
            <div class="col w-3/12 flex justify-end items-end moon-background mt-4">
            </div>
        </div>
    </div>

    <div class="container mx-auto w-10/12 my-32">
        <div class="row">
            <h3 class="pt-4">Overview of free parking in Esbjerg:</h3>
            <p class="pt-2">It is possible to park for free at Museumspladsen, right next to the main library. 
            The parking lot fills up quickly, so alternatively, you may have to park elsewhere.</p>
            <p class="pt-2">It's free to park for the first two hours in downtown Esbjerg. Some places have time-limited parking.</p>
            <h3 class="pt-16">Paid parking in downtown Esbjerg:</h3>
            <p class="pt-2">There is also a decent parking garage near Streetmekka Esbjerg/Sydvestjysk Hospital. It's rarely full on weekends and could therefore be a parking option.</p>
            <h3 class="pt-16">Taxi Esbjerg:</h3>
            <p class="pt-1">Taxi 7514 4500</p>
        </div>
    </div>

    <h1 class="flex mx-auto w-10/12 justify-end pb-16">FIND US HERE</h1>

    <div class="container-map mx-auto w-full h-full flex items-center justify-center flex-col">
        <div class="map w-10/12 h-full rounded-xl">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.6098191349392!2d8.451657876388301!3d55.46946841377929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b9a5bffcf%3A0xb4a5a9033bed3394!2sN%C3%B8rregade%2019%2C%206700%20Esbjerg!5e0!3m2!1ssk!2sdk!4v1715840838739!5m2!1ssk!2sdk" width="80%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>


.map {
    box-shadow: 0 0 20px var(--vt-c-white); /* Adjust the values as needed */
    border-radius: 10px; /* Optional: Add border radius for rounded corners */
    overflow: hidden; /* Optional: Ensure that the shadow doesn't overflow */
}

.map iframe {
    width: 100%;
    height: 700px;
}


</style>