<template>
    <div class="hero">
      <!-- <video autoplay loop muted plays-inline>
        <source src="@/assets/videjko.mp4" type="video/mp4">
      </video> -->
    </div>


  <!-------------------- program --------------------->  
  <div class="container mx-auto w-10/12 pt-6 flex flex-wrap">
    <div class="w-full mt-20 pt-16 flex justify-end">
        <h1>PROGRAM</h1>
    </div>

    <div class="container mx-auto p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border border-purple-400 text-white p-6 text-center text-xl rounded-lg">
                    <h2>QUEST</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos saepe officiis delectus. Ipsa corrupti asperiores atque sed repellat incidunt! </p>
                
                    <div class="flex justify-center pt-3">
                        <a href="https://example.com" class="button">SEE MORE</a>
                        <a href="/program" class="button ml-6">BUY TICKETS</a>
                    </div>
                </div>
                <div class="border border-purple-400 text-white p-6 text-center text-xl rounded-lg">
                    <h2>FESTIVAL</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos saepe officiis delectus. Ipsa corrupti asperiores atque sed repellat incidunt! </p>
                
                    <div class="flex justify-center pt-3">
                        <a href="https://example.com" class="button">SEE MORE</a>
                        <a href="/program" class="button ml-6">BUY TICKETS</a>
                    </div>
                </div>
            </div>
    </div>

    <div class="container mx-auto p-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border border-purple-400 text-white p-6 text-center text-xl rounded-lg">
                    <h3>14 SEPTEMBER 2024</h3>
                </div>
                <div class="border border-purple-400 text-white p-6 text-center text-xl rounded-lg">
                    <h3>15 SEPTEMBER 2024</h3>
                </div>
            </div>
    </div>

</div>  
    

</template>

<script setup>

</script>

<style lang="scss" scoped>
.hero {
    width: 100%;
    max-height: 100vh;
    position: relative;
}

.program-bg {
  min-height: 1100px;
  max-width: 100%;
  background-image: url('@/assets/purplebackground.svg'); 
}
</style>