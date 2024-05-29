<template>
  <main>
    <div class="container mx-auto w-10/12 pt-24 sm:pt-32 flex flex-wrap">
      <div class="w-full lg:w-7/12 flex flex-col justify-between pt-6">
        <div class="mb-auto">
          <div class="w-full ">
        <h1>FANTASY FESTIVAL</h1>
      </div>
          <h2 class="mt-10">Explore more about the festival</h2>
          <p class="mt-2">Fantasy Festival Esbjerg is an enchanting event that celebrates the wonders of fantasy literature and the power of imagination. Since its inception in 2015, the festival has grown exponentially, attracting approximately 8,000 attendees in 2022. From immersive storytelling sessions to interactive workshops, attendees can explore the rich tapestry of the fantasy genre. With cosplay competitions and a vibrant marketplace, there’s something for everyone. Special guest appearances and exclusive book signings add to the excitement. Join us for a weekend filled with magic, adventure, and endless possibilities at Fantasy Festival Esbjerg!</p>
          <h3 class="pb-2">Join us at Fantasy Festival Esbjerg!</h3>
        </div>
        <div class="flex">
          <a href="https://www.ticketmaster.dk/artist/fantasyfestival-billetter/1233494" class="button">BUY TICKETS</a>
          <a href="/program" class="button ml-6">SEE PROGRAM</a>
        </div>
      </div>
      <div class="w-1/12"></div>
      <div class="w-full lg:w-4/12 justify-end mt-10">
        <img src="@/assets/fantasyfestival.jpg" alt="" class="images festivalpicture">
      </div>
    </div>

    <h1 class="flex justify-end mt-20 md:mt-40 w-10/12 mx-auto mb-6">GALLERY</h1>

    <div class="container-gallery flex items-center justify-center min-h-screen" preload="auto">
      <div class="grid grid-cols-12 grid-rows-4 gap-2 sm:gap-6 w-full mx-auto md:max-h-750 py-10 sm:py-0 px-6 md:px-10">
        <div class="col-span-6 md:col-span-2 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival1.jpg" alt="Moon Image 1" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival15.jpg" alt="Moon Image 1" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-2 rounded-lg overflow-hidden">
          <img src="@/assets/festival5.jpg" alt="Moon Image 2" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival4.jpg" alt="Moon Image 1" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-4 row-span-2 rounded-lg overflow-hidden">
          <img src="@/assets/festival16.jpg" alt="Moon Image 3" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival7.jpg" alt="Moon Image 4" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival12.jpg" alt="Moon Image 5" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival2.jpg" alt="Moon Image 6" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-4 row-span-2 rounded-lg overflow-hidden">
          <img src="@/assets/festival3.jpg" alt="Moon Image 7" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-4 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival14.jpg" alt="Moon Image 8" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-2 rounded-lg overflow-hidden">
          <img src="@/assets/festival13.jpg" alt="Moon Image 9" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival17.jpg" alt="Moon Image 6" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-4 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival11.jpg" alt="Moon Image 8" class="w-full h-full object-cover gallery-image">
        </div>
        <div class="col-span-6 md:col-span-2 row-span-1 rounded-lg overflow-hidden">
          <img src="@/assets/festival6.jpg" alt="Moon Image 9" class="w-full h-full object-cover gallery-image">
        </div>
      </div>
    </div>

    <div id="imageModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="modalImage">
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const images = document.querySelectorAll(".gallery-image");
    const closeBtn = document.querySelector(".close");

    images.forEach(image => {
      image.addEventListener("click", function () {
        modal.style.display = "flex";
        modalImg.src = this.src;
      });
    });

    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  }
}
</script>

<style scoped>
.container-gallery {
  min-height: 1100px;
  max-width: 100%;
  background-image: url('@/assets/purplebackground.svg'); 
}

.gallery-image {
  cursor: pointer; 
}

.modal {
  margin-top: 30px;
  display: none;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.9);
  align-items: center;
  justify-content: center;
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 80%;
  max-height: 80%;
}

.close {
  position: absolute;
  top: 40px;
  right: 35px;
  color: #fff;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  
  .container-gallery {
  min-height: 1100px;
}

}
</style>
