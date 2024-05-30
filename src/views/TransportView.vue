<template>
    <main>
    <div class="container pt-24 flex content-center">
        <div class="row flex flex-row">
            <div class="col w-1/12"></div>
            <div class="col w-10/12 sm:w-8/12 mt-10 sm:mt-28">
                <h1>TRANSPORT</h1>
            <p class="mt-6">Fantasy Festival is conveniently situated with excellent access to public transportation and parking facilities.</p>
            <h3 class="mt-6">Public Transportation:</h3>
            <p>If you prefer public transportation, getting to Fantasy Festival is a breeze. The festival venue is centrally located, making it easily accessible by train. The main library, where the festival takes place, is just a short 5-minute walk from the nearest train station. Whether you're arriving from near or far, the well-connected train network ensures a smooth journey to the heart of the festival.</p>
        </div>
            <div class="col w-2/12 flex justify-end items-end moon-background hidden sm:flex">
            </div>
        </div>
    </div>

    <div class="mt-24 sm:mt-60 flex justify-end mx-auto w-10/12">
            <h1 class="mb-6 sm:mb-0">PARKING</h1>
        </div>
        <div class="container-parking mx-auto w-full lg:flex sm:px-4 lg:px-0 items-center reveal">
            <div class="container-parking-text mx-auto w-10/12 flex flex-col sm:flex-row pb-20">
                <div class="w-full lg:w-5/12 mt-3 sm:mt-0">
                <img src="@/assets/horse.jpg" alt="Festival Picture" class="imagesblue w-full rounded-lg">
            </div>
                <div class="col w-1/12 hidden sm:block"></div>
                <div class="col w-full mt-12 sm:w-6/12 justify-between">
                    <h3 class="h3blue">Overview of free parking in Esbjerg:</h3>
                    <p class="pt-2">It is possible to park for free at Museumspladsen, right next to the main library. The parking lot fills up quickly, so alternatively, you may have to park elsewhere.</p>
                    <p class="pt-2">It's free to park for the first two hours in downtown Esbjerg. Some places have time-limited parking.</p>
                    <h3 class="h3blue pt-16">Paid parking in downtown Esbjerg:</h3>
                    <p class="pt-2">There is also a decent parking garage near Streetmekka Esbjerg/Sydvestjysk Hospital. It's rarely full on weekends and could therefore be a parking option.</p>
                    <h3 class="h3blue pt-16">Taxi Esbjerg:</h3>
                    <p class="pt-1 pb-6 sm:pb-0">Taxi 7514 4500</p>
                </div>
            </div>
        </div>

    <h1 class="flex mx-auto w-10/12 py-6 sm:py-16 mt-10">FIND US HERE</h1>

    <div class="container-map mx-auto w-full h-full flex items-center justify-center flex-col reveal">
        <div class="map images w-10/12 h-full rounded-xl">
            <iframe class="w-full h-96 md:h-120 lg:h-700" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2261.6098191349392!2d8.451657876388301!3d55.46946841377929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464b212b9a5bffcf%3A0xb4a5a9033bed3394!2sN%C3%B8rregade%2019%2C%206700%20Esbjerg!5e0!3m2!1ssk!2sdk!4v1715840838739!5m2!1ssk!2sdk&theme=dark" width="80%" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.map iframe {
    width: 100%;
}

.container-parking {
    min-height: 1000px;
    width: 100%;
    background-image: url('@/assets/backgroundsmaller.svg'); 
    display: flex;
    align-content: center;
    background-size: cover;
    background-position: center;
}


.moon-background {
    background-image: url('@/assets/moon.png'); 
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 100px;
    right: 0;
    width: 30%; 
    height: 60%;
    z-index: 1; 
    animation: slideInGrow 2s ease-in-out forwards; /* Animácia príchod, postupné zväčšenie */
}


@keyframes slideInGrow {
    0% {
        transform: translateX(100%) scale(0.5);
        opacity: 0.5;
    }

    80% {
        transform: translateX(0) scale(1);
        opacity: 0.75;
    }

    100% {
        transform: translateX(0) scale(1);
        opacity: 1;
    }
}


.reveal{
  position: relative;
  transform: translateY(50px);
  opacity: 0;
  transition: all 1s ease;
}

.reveal.active {
  transform: translateY(50px);
  opacity: 1;
}
</style>