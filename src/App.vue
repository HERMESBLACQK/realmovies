<template>
  <div class="light-mode">
    <!-- Your web page content goes here -->

  
  <div class="relative min-h-screen md:flex font-sourcesanspro bg-dark">
    <!-- Nav -->
    <SideBar />

    <!-- content -->
    <main class="flex-1 min-w-0 min-h-screen border-l border-gray-darken">
      <router-view :key="route.fullPath"></router-view>
    </main>

    <!-- Footer -->
  </div>
  <footer
    class="foot w-full p-2 bg-dark border-t border-gray-darken text-sm text-primary flex justify-between items-center mt-0 outline-2"
  >
    <p><font-awesome-icon :icon="['far', 'copyright']" /> 2023 HermesMedia.</p>
    <ul class="flex flex-wrap gap-1 border-primary outline-2 px-4 py-2">
      <li class="hover:scale-110">
        <button type="button" class="text-2xl mx-2">
          <a href="https://www.facebook.com/lilhenxy.omotosho.9/" target="_blank" rel="noopener noreferrer">

            <font-awesome-icon :icon="['fab', 'facebook']" />
          </a>

        </button>
      </li>
      <li class="hover:scale-110">
        <button type="button" class="text-2xl mx-2">
          <a href="https://twitter.com/i/communities/1667143109849886720" target="_blank" rel="noopener noreferrer">
            <font-awesome-icon :icon="['fab', 'twitter']" />
          </a>
        </button>
      </li>
      <li class="hover:scale-110">
        <button type="button" class="text-2xl mx-2">
          <a href="https://instagram.com/dokitor_blacqk?igshid=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        </button>
      </li>
      <li class="hover:scale-110">
        <button type="button" class="text-2xl mx-2">
          <a href="https://github.com/HERMESBLACQK?tab=repositories" target="_blank" rel="noopener noreferrer">

            <font-awesome-icon :icon="['fab', 'github']" />
          </a>

        </button>
      </li>
    </ul>
  </footer>
</div>

</template>

<script setup>
import SideBar from "/src/components/SideBar/SideBar.vue";
import { useGeneralStore } from "./stores/GeneralStore";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";



const router = useRouter();
const route = useRoute();

const generalStore = useGeneralStore();
const currentFilmType = generalStore.currentFilmType;

</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
@media (max-width: 1000px) {
  .foot{
    flex-direction: column;
    justify-content: space-between;
  
  }
}
.light-mode {
  background-color: black;
}

.light-mode :root {
  --primary-color: #ffd80e;
}

/* Customize other elements using the primary color */
.light-mode h1 {
  color: var(--primary-color);
}

.light-mode a {
  color: var(--primary-color);
}

</style>
