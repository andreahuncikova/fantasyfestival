<template>
<main>
  <div class="container mx-auto w-10/12 pt-6 flex flex-wrap">
  <div class="w-full mt-20">
    <h1>FANTASY FESTIVAL</h1>
  </div>
  <div class="w-full lg:w-6/12 flex flex-col justify-between py-6">
    <div class="mb-auto"> <!-- Aligns content to top -->
      <h2>ABOUT FESTIVAL</h2>
      <p class="mt-2">Fantasy Festival Esbjerg is an enchanting event that celebrates the wonders of fantasy literature and the power of imagination. Since its inception in 2015, the festival has grown exponentially, attracting approximately 8,000 attendees in 2022. From immersive storytelling sessions to interactive workshops, attendees can explore the rich tapestry of the fantasy genre. Join us for a weekend filled with magic, adventure, and endless possibilities at Fantasy Festival Esbjerg!</p>
      <h3 class="mt-6">Join us at Fantasy Festival Esbjerg!</h3>
    </div>
    <div class="flex pt-3"> <!-- Aligns buttons to bottom -->
      <a href="https://example.com" class="button">BUY TICKETS</a>
      <a href="/program" class="button ml-6">SEE PROGRAM</a>
    </div>
  </div>
  <div class="w-full lg:w-6/12 py-6 md:pl-6 justify-end">
    <img src="@/assets/festivalpicture.jpg" alt="" class="images">
  </div>
</div>

  <h1 class="flex justify-end mt-20 w-10/12 mx-auto">GALLERY</h1>
  
  <div class="container-gallery">
    <div class="row h-100"></div>
    <div class="row">
  <div class="gallery-items mx-auto w-10/12 mt-20 grid grid-cols-6 grid-rows-4 gap-15 h-400 w-300p relative left-minus-150">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
    <img src="@/assets/moon.png" alt="Moon" class="w-full h-full object-cover">
  </div>
  </div>
</div>

</main>



</template>

<style>
.container-gallery {
  position: relative;
  z-index: 1;
  height: 100%; /* Ensure the section takes up the full height */
  background-image: url('@/assets/yellowbackground.svg');
  background-size: cover; /* Cover the entire section */
  background-repeat: no-repeat; /* Prevent the background from repeating */
}




</style>
