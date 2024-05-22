

<template>
  
<main>
    <div class="hero">
      <!-- <video autoplay loop muted plays-inline>
        <source src="@/assets/videjko.mp4" type="video/mp4">
      </video> -->
    </div>
<!---------------------fantasy quest esbjerg info------------------------------->
<div class="container mx-auto w-10/12 flex flex-wrap">
    <div class="w-full pt-16">
      <h1>FANTASY QUEST ESBJERG</h1>
    </div>
    <div class="w-full lg:w-6/12 flex flex-col justify-between py-6">
      <div class="mb-auto">
        <h3>14 September 2024</h3>
        <p class="mt-4">
          Are you ready to live into another world, a magical story where you are the hero who is on a "quest" to overcome the evil forces and save the whole world? So get ready for Fantasy Quest Esbjerg. This event will take you on an unforgettable adventure filled with magic, mystery, and excitement. Join fellow adventurers as you embark on a quest that will challenge your skills and ignite your imagination. Don’t miss out on this epic experience!
          <span v-if="showMoreText">
             <br>
             <br>
             Imagine "Prisoners at the Fort" with a lot of magic, some theater and role playing, some heroes and villains and of course the battle between good and evil, then you are well on your way to Fantasy Quest Esbjerg.
            
            In 2024, Fantasy Quest Esbjerg will have both a difficult evening edition and a family-friendly edition during the day during the Fantasy Festival, written in collaboration with the YouTuber Lakserytteren, where everyone can participate.
            
            If you fancy a slightly bigger challenge, the level of difficulty is turned up when twilight settles over Esbjerg's streets.  
            <br>
            <br>
            In the old days they said...
            <br>
            ... that evil would come from the sea. Through generations that tale was passed on. You heard it when Esbjerg was founded in 1868. You always kept an eye on the sea. To the west. 
            So in Esbjerg they built a defense against evil. Something that would keep an eye on the sea, something that would step in if things went wrong. In 1995, that protection was reinforced when the sculptures "Man by the sea" were created. While the artist built during the day, the sorcerer Gygaz the Wise worked at night. 
            Gygaz opened a portal to the world of fighters. Here he found four good fighters who volunteered. They said goodbye to their families and trotted through the portal towards Esbjerg. Here they met with Gygaz. The air trembled with magic, and as the last words of a powerful form left Gygaz's lips, the four giants had become one with the statues of the four white men. That way, they could forever keep an eye on the sea...
            <br>
            <br>
            The years passed and there was peace and quiet...
            <br>
            ...But then mysterious things began to happen. Nature became ill. The ancients spoke of evil. About the guardians. One day the clouds drew together, over the sea to the west, and it became unnaturally dark. Lightning tore the sky. A large, winged creature could be seen in the sky. 
            The four statues stood up, the guardians had been awakened, they got ready and shouted. The cries could be heard across the land, across portals to other worlds. "There is a need for heroes in Esbjerg!", they shouted. 
            It's time for the heroes to gather. It is time for evil to be fought. It is time for the portals to close.
            It's time for Fantasy Quest Esbjerg. Are you ready?
            
          </span>
        </p>
      </div>
      <div class="flex pt-3 mt-4">
        <button @click="toggleMoreText" class="button">
          {{ showMoreText ? 'READ LESS' : 'READ MORE' }}
        </button>
      </div>
    </div>
    <div class="col w-3/12 flex justify-end items-end moon-background mt-16">
    </div>
  </div>
<!---------------------quest read more------------------------------->
        <h1 class="mx-auto w-10/12 flex justify-end mt-40">MEET OUR CHARACTERS</h1>
  <div class="grid-wrapper mx-auto w-10/12 mt-20">
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
<div class="familyquest flex justify-center flex-col items-center mt-52">  

<div class="container mx-auto w-10/12">
        <div class="w-full lg:flex">
            <div class="w-full lg:w-7/12 flex flex-col justify-between">
              <div class="mb-auto">
                <div class="w-full">
            <h1 class="h1blue font-bold">FAMILY QUEST</h1>
        </div>
                <h3 class="h3blue pt-10">10:00 - 14:00</h3>
                    <p class="pblue mt-2">The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt. Here you meet magical creatures who set you some tasks and challenges along the way towards the goal, which you must solve together to complete the Quest. The degree of difficulty has been lowered so that the children can help solve the tasks. But make no mistake, all good strength and cooperation skills are needed if you are to help save Esbjerg. As an added bonus, you can meet the YouTuber Salmon Rider during the Quest around the streets of Esbjerg.</p>
                </div>
                <div class="flex pt-3">
                  <a href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3" class="buttonblue">BUY TICKETS</a>
                </div>
            </div>
            <div class="w-1/12"></div>
            <div class="w-full lg:w-4/12">
                <img src="@/assets/familyquest.jpg" alt="Festival Picture" class="imagesblue w-full rounded-lg">
            </div>
        </div>
    </div>
  </div>
    <!---------------------evening quest info------------------------------->
<div class="container mx-auto w-10/12 flex flex-wrap mt-20">
  
  <div class="w-full lg:w-4/12 py-6 justify-end">
    <img src="@/assets/eveningquest.jpg" class="images">
  </div>

  <div class="w-1/12 hidden sm:block"></div>

  <div class="w-full lg:w-7/12 flex flex-col justify-between py-6">
    
    <div class="mb-auto"> 
      <div class="w-full">
    <h1>EVENING QUEST</h1>
  </div>
      <h3 class="mt-6">18:00 - 22:00</h3>
      <p class="mt-2">When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned up. Now you really have to think creatively and solve tasks that require both courage, cooperation and ingenuity in order for you to complete the quest and save Esbjerg. <br> If you love solving puzzles and cracking codes, don't miss out on this ultimate experience. We send you and your friends on your ultimate adventure in Esbjerg's streets and alleys. Here you will have to collaborate and devise new solutions to complete the AftenQuest.</p>
    </div>
    <div class="flex pt-3"> 
      <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" class="button">BUY TICKETS</a>
    </div>
  </div>
  
</div>


  </main>
</template>

<script>
export default {
  data() {
    return {
      showMoreText: false
    }
  },
  methods: {
    toggleMoreText() {
      this.showMoreText = !this.showMoreText;
    }
  }
}
</script>

<style lang="scss" scoped>
  .hero {
    width: 100%;
    max-height: 100vh;
    position: relative;
}

.familyquest {
  min-height: 800px;
  max-width: 100%;
  background-image: url('@/assets/backgroundsmaller.svg'); 
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
      transition: transform 1.1s;
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


