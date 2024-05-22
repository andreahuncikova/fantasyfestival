<template>
    <main>

    <div class="flex items-center justify-center h-screen w-screen">
        <div class="w-8/12 h-full">
            <div class="h-full p-10">
                <iframe class="inset-0 w-full h-5/6 images" src="https://www.youtube.com/embed/a1Qf8HLr4LE?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    </div>
  <!-------------------- program --------------------->  
  <div class="pt-16 flex justify-end mx-auto w-10/12">
        <h1>PROGRAM</h1>
    </div>
    <div class="container-program mx-auto w-full">
        <div class="container mx-auto w-10/12 pt-6 flex flex-wrap">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 ">
                <div class="border p-6 rounded-lg imagesblue">
                    <h2 class="h2blue">14 SEPTEMBER 2024</h2>
                    <p>Saturday, September 16th offers various lectures, signings, and activities for both children and adults.</p>
               
                </div>
                <div class="border p-6 rounded-lg imagesblue">
                    <h2 class="h2blue">15 SEPTEMBER 2024</h2>
                    <p>Don't miss the Sunday program, where you can attend lectures, signings, and other interesting activities.</p>
                
                </div>
            </div>
    </div>

    <div class="container mx-auto p-4 w-10/12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border buttonblue p-6 text-center text-xl rounded-lg">
                    <h3>CHECK OUT THE SATURDAY PROGRAM</h3>
                </div>
                <div class="border buttonblue text-center text-xl rounded-lg">
                    <h3>CHECK OUT THE SUNDAY PROGRAM</h3>
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
    min-height: 800px;
    max-width: 100%;
    background-image: url('@/assets/backgroundsmaller.svg'); 
}

</style>