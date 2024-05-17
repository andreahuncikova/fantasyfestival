

<template>
  
<main>
    <div class="hero">
      <!-- <video autoplay loop muted plays-inline>
        <source src="@/assets/videjko.mp4" type="video/mp4">
      </video> -->
    </div>
<!---------------------fantasy quest esbjerg info------------------------------->
    <div class="container mx-auto w-10/12 pt-6 flex flex-wrap">
  <div class="w-full mt-20 pt-16">
    <h1>FANTASY QUEST ESBJERG</h1>
  </div>
  <div class="w-full lg:w-6/12 flex flex-col justify-between py-6">
    <div class="mb-auto"> <!-- Aligns content to top -->
      <h3>14 September 2024</h3>
      <p class="mt-4">Are you ready to live into another world, a magical story where you are the hero who is on a "quest" to overcome the evil forces and save the whole world? So get ready for Fantasy Quest Esbjerg.</p>
    </div>
    <div class="flex pt-3 mt-4"> <!-- Aligns buttons to bottom -->
      <button id="readMoreBtn" class="button">READ MORE</button>

    </div>
  </div>
  <div class="col w-3/12 flex justify-end items-end moon-background mt-16">
            </div>

            <div id="moreInfo" class="container mx-auto w-10/12 pt-6 flex flex-wrap mt-16 hidden">
    <div class="w-full">
      <h2>More Information</h2>
      <p class="mt-4">Detailed information about the Fantasy Quest Esbjerg...</p>
    </div>
  </div>

</div>

<!---------------------quest read more------------------------------->
        <h1 class="mx-auto w-10/12 flex justify-end mt-32">MEET OUR CHARACTERS</h1>
  <div class="grid-wrapper mx-auto w-10/12 mt-10">
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="@/assets/Havfruedronning.jpg" alt="Havfruedronning">
        </div>
        <div class="card-back">
          <h3 class="h3blue" style="font-size: 20px;">HAVFRUEDRONNING</h3>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="@/assets/Malice.jpg" alt="Malice">
        </div>
        <div class="card-back">
          <h3 class="h3blue">MALICE</h3>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="@/assets/Arkivaren_color_soft.jpg" alt="Arkivaren">
        </div>
        <div class="card-back">
          <h3 class="h3blue">ARKVIVAREN</h3>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="@/assets/Gnist_color_Soft.jpg" alt="Gnist">
        </div>
        <div class="card-back">
          <h3 class="h3blue">GNIST</h3>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="@/assets/Gygaz.jpg" alt="Gygaz">
        </div>
        <div class="card-back">
          <h3 class="h3blue">GYGAZ</h3>
        </div>
      </div>
    </div>
  </div>    
<!---------------------family quest info------------------------------->
<div class="familyquest flex justify-center flex-col items-center py-6 mt-32">  

<div class="container mx-auto w-10/12 pt-6">
        <div class="w-full lg:flex lg:space-x-8 py-6">
            <div class="w-full lg:w-6/12 flex flex-col justify-between">
              <div class="w-full">
            <h1 class="h1blue font-bold">FAMILY QUEST</h1>
        </div>
              <div class="mb-auto">
                <h3 class="h3blue pt-10">10:00 - 14:00</h3>
                    <p class="pblue mt-2">The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt. Here you meet magical creatures who set you some tasks and challenges along the way towards the goal, which you must solve together to complete the Quest. The degree of difficulty has been lowered so that the children can help solve the tasks. But make no mistake, all good strength and cooperation skills are needed if you are to help save Esbjerg. As an added bonus, you can meet the YouTuber Salmon Rider during the Quest around the streets of Esbjerg.</p>
                </div>
                <div class="flex pt-3"> <!-- Aligns buttons to bottom -->
                  <a href="https://example.com" class="buttonblue">BUY TICKETS</a>
                </div>
            </div>
            <div class="w-full lg:w-6/12 py-6 mt-20">
                <img src="@/assets/festivalpicture.jpg" alt="Festival Picture" class="w-full rounded-lg">
            </div>
        </div>
    </div>
  </div>
    <!---------------------evening quest info------------------------------->
<div class="container mx-auto w-10/12 pt-6 flex flex-wrap mt-32">
  <div class="w-full">
    <h1>EVENING QUEST</h1>
  </div>
  <div class="w-full lg:w-6/12 flex flex-col justify-between py-6">
    <div class="mb-auto"> <!-- Aligns content to top -->
      <h3>18:00 - 22:00</h3>
      <p class="mt-4">When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned up. Now you really have to think creatively and solve tasks that require both courage, cooperation and ingenuity in order for you to complete the quest and save Esbjerg. If you love solving puzzles and cracking codes, don't miss out on this ultimate experience. We send you and your friends on your ultimate adventure in Esbjerg's streets and alleys. Here you will have to collaborate and devise new solutions to complete the AftenQuest.</p>
    </div>
    <div class="flex pt-3"> <!-- Aligns buttons to bottom -->
      <a href="https://example.com" class="button">BUY TICKETS</a>
    </div>
  </div>
  <div class="w-full lg:w-6/12 py-6 md:pl-6 justify-end">
    <img src="@/assets/festivalpicture.jpg" alt="" class="images">
  </div>
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

.familyquest {
  min-height: 700px;
  max-width: 100%;
  background-image: url('@/assets/purplebackground.svg'); 
}

.grid-wrapper {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    }

    .card {
      perspective: 1000px;
    }

    .card-inner {
      width: 100%;
      height: 400px;
      transform-style: preserve-3d;
      transition: transform 0.6s;
      position: relative;
    }

    .card:hover .card-inner {
      transform: rotateY(180deg);
    }

    .card-front, .card-back {
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .card-front img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-back {
      background-color: var(--vt-c-gold);
      color: white;
      transform: rotateY(180deg);
      font-size: 1.5rem;
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      box-sizing: border-box;
      text-align: center;
    }
</style>


