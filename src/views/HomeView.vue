<template>
  <main>
    <div class="hero relative h-auto sm:h-screen overflow-hidden cursor-pointer p-3 sm:p-0" @click="scrollToContent">
      <video class="video h-full object-cover sm:py-0 pt-0" autoplay loop muted playsinline preload="auto">
        <source src="@/assets/fantasytitle1.mp4" type="video/mp4">
      </video>
    </div>
<!---------------------fantasy quest esbjerg info------------------------------->
    <div class="container-fantasyquest smalldevicesbackgroundpurple mx-auto w-10/12 flex flex-wrap" id="fantasyquestesbjerg">
        <div class="w-full pt-16 sm:pt-40">
            <h1>FANTASY QUEST ESBJERG</h1>
        </div>
        <div class="w-full lg:w-9/12 flex flex-col justify-between py-6">
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
                    </span>
                </p>
            </div>
            <div class="flex pt-3 mt-4">
                <button @click="toggleMoreText" class="button">
                    {{ showMoreText ? 'READ LESS' : 'READ MORE' }}
                </button>
            </div>
        </div>
        <div class="col w-3/12 flex justify-end items-end moon-background mt-16 hidden sm:flex">
        </div>
    </div>

    <div v-if="showMoreText" class="familyquest flex items-center justify-center min-h-screen flex-col mt-8">
        <div class="w-10/12 mb-10 sm:mb-20 mt-10 sm:mt-0">
            <p> In the old days they said...
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
        </p>
          </div>
    </div>
<!---------------------characters------------------------------->
        <h1 class="mx-auto w-10/12 flex justify-end mt-20 sm:mt-52">MEET OUR CHARACTERS</h1>
  <div class="grid-wrapper mx-auto w-10/12 mt-10 sm:mt-20">
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
<div class="familyquest flex justify-center flex-col items-center mt-32 sm:mt-64">  

<div class="container mx-auto w-10/12">
        <div class="w-full lg:flex">
            <div class="w-full lg:w-7/12 flex flex-col justify-between">
              <div class="mb-auto">
                <div class="w-full">
            <h1 class="h1blue font-bold mt-10 sm:mt-0">FAMILY QUEST</h1>
        </div>
                <h3 class="h3blue mt-4 sm:mt-10">10:00 - 14:00</h3>
                    <p class="pblue mt-2">The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt. Here you meet magical creatures who set you some tasks and challenges along the way towards the goal, which you must solve together to complete the Quest. The degree of difficulty has been lowered so that the children can help solve the tasks. But make no mistake, all good strength and cooperation skills are needed if you are to help save Esbjerg. As an added bonus, you can meet the YouTuber Salmon Rider during the Quest around the streets of Esbjerg.</p>
                </div>
                <div class="flex pb-10 sm:pb-16 mt-5 sm:mt-0">
                  <a href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3" class="buttonblue">BUY TICKETS</a>
                </div>
            </div>
            <div class="w-1/12"></div>
            <div class="w-full lg:w-4/12 pb-16 mt-3 sm:mt-0">
                <img src="@/assets/familyquest.jpg" alt="Festival Picture" class="imagesblue w-full rounded-lg">
            </div>
        </div>
    </div>
  </div>
    <!---------------------evening quest info------------------------------->
<div class="container mx-auto w-10/12 flex flex-wrap mt-10 sm:mt-20">
  
  <div class="order-3 sm:order-1 w-full lg:w-4/12 py-6 justify-end">
    <img src="@/assets/eveningquest.jpg" class="images">
  </div>

  <div class="order-2 sm:order-2 w-1/12 hidden sm:block"></div>

  <div class="order-1 sm:order-3 w-full lg:w-7/12 flex flex-col justify-between py-6">
    
    <div class="mb-auto"> 
      <div class="w-full">
    <h1>EVENING QUEST</h1>
  </div>
      <h3 class="mt-4 sm:mt-10">18:00 - 22:00</h3>
      <p class="mt-2">When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned up. Now you really have to think creatively and solve tasks that require both courage, cooperation and ingenuity in order for you to complete the quest and save Esbjerg. <br> If you love solving puzzles and cracking codes, don't miss out on this ultimate experience. We send you and your friends on your ultimate adventure in Esbjerg's streets and alleys. Here you will have to collaborate and devise new solutions to complete the AftenQuest.</p>
    </div>
    <div class="flex mt-5 sm:mt-0"> 
      <a href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4" class="button">BUY TICKETS</a>
    </div>
  </div>
  
</div>


  </main>
</template>



<script>
import anime from 'animejs/lib/anime.es.js';

export default {
  data() {
    return {
      showMoreText: false
    }
    
  },
  methods: {
    toggleMoreText() {
      this.showMoreText = !this.showMoreText;
    },
    scrollToContent() {
      const nextContainer = document.querySelector('.container-fantasyquest');
      if (nextContainer) {
        nextContainer.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
  mounted() {
    anime({
      targets: 'moon',
      right: 300,
      easing: 'easeInOutQuad',
      duration: 1000
    });
  }
}

</script>

<style lang="scss" scoped>
.hero {
  background-image: linear-gradient(to right, #15014d, #08064a 20%, var(--vt-c-dark) 50%, #08064a 80%, #15014d);
}


.hero::before,
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  width: 15%; 
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

.hero::before {
  left: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), #0d012b, rgba(19, 2, 63, 0));
}

.hero::after {
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.8), #0d012b, rgba(19, 2, 63, 0));
}


  .familyquest {
    min-height: 800px;
    width: 100%;
    background-image: url('@/assets/backgroundsmaller.svg');
    background-size: cover;
    background-position: center;
}


.grid-wrapper {
      display: grid;
      grid-gap: 30px;
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

.hero video {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.video {
  animation: fade-out 5s linear;
  animation-timeline: view();
    animation-range: exit;
}



@keyframes fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}


.moon-background {
    background-image: url('@/assets/moon.png'); 
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 900px;
    right: 0;
    width: 30%; 
    height: 60%;
    z-index: 1; 
    animation: slideInGrow 2s ease-in-out forwards;
    animation-timeline: view();
    animation-range-start: 0;
    animation-range-end: 700px;
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




@media (max-width: 768px) {
  
  .hero video {
    height: 280px;
    margin-top: 10px;
    box-shadow: 0 0 10px 4px var(--vt-c-purple); 
    border: 3px solid var(--vt-c-purple);
    object-fit: cover;
    border-radius: 10px; 
  }


  .hero::before,
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  width: 0%; 
  height: 100%;
  z-index: 2;
  pointer-events: none;
}

}

</style>


