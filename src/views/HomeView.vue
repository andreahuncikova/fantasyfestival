<template>
<main>
    <div class="hero">
      <!-- <video autoplay loop muted plays-inline>
        <source src="@/assets/videjko.mp4" type="video/mp4">
      </video> -->
    </div>
<!---------------------fantasy quest esbjerg info------------------------------->

<h1 class="mx-auto w-10/12">FANTASY QUEST ESBJERG</h1>

        <p class="mx-auto w-10/12 mb-4">Are you ready to live into another world, a magical story where you are the hero who is on a "quest" to overcome the evil forces and save the whole world? So get ready for Fantasy Quest Esbjerg.
            <br>
            <br>
            14th September 2024
        </p>

<button class="mx-auto w-10/12 flex justify-center text-yellow-300 font-semibold py-2 px-4 border border-yellow-300 rounded-lg shadow transition-colors hover:bg-yellow-300 hover:text-yellow-800 mb-20">
        READ MORE
    </button>

<!---------------------family quest info------------------------------->
<div class="bg-yellow-300 flex justify-center flex-col items-center py-6 mb-8">  

<h1 class="mx-auto w-10/12 flex justify-center" style="color: #183451;">FAMILY QUEST</h1>
    <h2 class="mx-auto w-10/12 flex justify-center" style="color: #183451;">10:00 - 14:00</h2>

<div class="mx-auto w-10/12 flex">
        <img src="@/assets/family-quest.jpeg" class="w-1/3 rounded-lg">
        
        <div class="w-2/3 pl-4" style="color: #183451;">
            <p>The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt. Here you meet magical creatures who set you some tasks and challenges along the way towards the goal, which you must solve together to complete the Quest. The degree of difficulty has been lowered so that the children can help solve the tasks. But make no mistake, all good strength and cooperation skills are needed if you are to help save Esbjerg. As an added bonus, you can meet the YouTuber Salmon Rider during the Quest around the streets of Esbjerg.</p>
        </div>
    </div>

    <button class="mx-auto pl-4 flex justify-center text-black font-semibold py-2 px-4 border border-black rounded-lg shadow transition-colors hover:bg-blue-900 hover:text-yellow-300 mb-20">
        BUY TICKETS
    </button>
  </div> 
    <!---------------------evening quest info------------------------------->
    <h1 class="mx-auto w-10/12 flex justify-center">EVENING QUEST</h1>
    <h2 class="mx-auto w-10/12 flex justify-center">18:00 - 22:00</h2>

<div class="mx-auto w-10/12 flex">
      
        <div class="w-2/3 pl-4">
            <p>When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned up. Now you really have to think creatively and solve tasks that require both courage, cooperation and ingenuity in order for you to complete the quest and save Esbjerg. If you love solving puzzles and cracking codes, don't miss out on this ultimate experience. We send you and your friends on your ultimate adventure in Esbjerg's streets and alleys. Here you will have to collaborate and devise new solutions to complete the AftenQuest.</p>
        </div>
        <img src="@/assets/evening-quest.jpeg" class="w-1/3 rounded-lg">
        
    </div>

    <button class="mx-auto pl-4 flex justify-center text-yellow-300 font-semibold py-2 px-4 border border-yellow-300 rounded-lg shadow transition-colors hover:bg-yellow-300 hover:text-yellow-800 mb-20">
        BUY TICKETS
    </button>
    

<!---------------------quest read more------------------------------->

  <h1 class="mx-auto w-10/12 flex justify-end">MEET OUR CHARACTERS</h1>
        

        <div class="grid-wrapper mx-auto w-10/12">
          <div><img src="@/assets/Havfruedronning.jpg" alt=""></div>
            <div><img src="@/assets/Malice.jpg" alt=""></div>
            <div><img src="@/assets/Arkivaren_color_soft.jpg" alt=""></div>
            <div><img src="@/assets/Gnist_color_Soft.jpg" alt=""></div>
            <div><img src="@/assets/Gygaz.jpg" alt=""></div>
        </div>

  </main>
</template>

<script setup>

</script>

<style lang="scss" scoped>
  .hero {
    width: 100%;
    max-height: 100vh;
    position: relative;
}

.grid-wrapper {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr)); 
}

.grid-wrapper img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
    border-radius: 10px;
}

.grid-wrapper > div {
    margin-bottom: 10px;
}

div {
    display: flex;
    justify-content: center;
    align-items: center;
}


</style>
