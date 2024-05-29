<template>
    <main>
      <div class="flex items-center justify-center h-auto sm:h-screen" preload="auto">
        <div class="w-full py-6 sm:py-0 sm:w-9/12 h-full">
          <div class="sm:h-full pt-32 p-10 h-500">
            <iframe class="inset-0 w-full h-full images" src="https://www.youtube.com/embed/a1Qf8HLr4LE?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen preload="auto"></iframe>
          </div>
        </div>
      </div>
      <!-------------------- program --------------------->
      <div class="pt-10 sm:pt-32 mx-auto w-10/12">
        <h1 class="text-end mb-6">PROGRAM</h1>
      </div>
      <div class="container-program smalldevicesbackgroundpurple w-full">
        <div class="row py-8 mx-auto flex flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-20 w-10/12">
          <div class="flex flex-col md:flex-row justify-between w-full space-y-8 md:space-y-0 md:space-x-8">
            <div class="col w-full flex flex-col items-stretch imagesblue">
              <div class="p-6 rounded-lg flex flex-col flex-grow">
                <h2 class="h2blue">14 SEPTEMBER 2024</h2>
                <p class="mt-2">Saturday, September 16th boasts a diverse lineup of engaging lectures, exciting signings, and fun-filled activities suitable for both the young and the young at heart, promising a day of unforgettable moments.</p>
              </div>
              <div class="my-6 flex justify-center">
                <a href="https://fantasyfestival.dk/program-og-aktiviteter/program/program-16-september" class="buttonblue">CHECK OUT THE SATURDAY PROGRAM</a>
              </div>
            </div>
            
            <div class="col w-full flex flex-col items-stretch imagesblue">
              <div class="p-6 rounded-lg flex flex-col flex-grow">
                <h2 class="h2blue">15 SEPTEMBER 2024</h2>
                <p class="mt-2">The Sunday program unfurls with a rich array of captivating lectures, exclusive signings, and a myriad of immersive activities tailored to delight attendees of all ages, promising an unforgettable day of exploration and discovery.</p>
              </div>
              
              <div class="my-6 flex justify-center">
                <a href="https://fantasyfestival.dk/program-og-aktiviteter/program/program-17-september" class="buttonblue">CHECK OUT THE SUNDAY PROGRAM</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </template>

<script setup>

</script>

<style lang="scss" scoped>
.container-program {
    display: flex;
    align-content: center;
    justify-items: center;
    min-height: 800px;
    max-width: 100%;
    background-image: url('@/assets/backgroundsmaller.svg'); 
}

.buttonblue {
    display: inline-block;
    font-size: 20px;
    padding: 10px 80px;
    border: 3px solid var(--vt-c-dark);
    color: var(--vt-c-dark);
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    font-weight: 700;
    transition: 0.3s;
    font-family: 'Philosopher', sans-serif;
}

.buttonblue:hover {
    color: #fff; 
    background-color: var(--vt-c-dark);
    border-color: var(--vt-c-dark);
    transition: 0.3s;
}

@media (max-width: 768px) {
    .button {
        font-size: medium;
        padding: 5px 10px;
    }
    .buttonblue {
        font-size: medium;
        padding: 5px 10px;
    }
}


</style>