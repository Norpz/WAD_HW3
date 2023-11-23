<template>
  <div class="main-page">
    <Main v-for="post in posts" :key="post.id" :post-id="post.id" />
    <button @click="resetLikes">Reset Likes</button> <!-- Button to reset all likes -->
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Main from '@/components/Main.vue';

export default {
  components: {
    Main
  },
  setup() {
    const store = useStore();
    const posts = ref([]);

    onMounted(async () => {
      await store.dispatch('fetchPosts');
      posts.value = store.state.posts;
    });

    const resetLikes = () => {
      store.commit('resetLikes'); // Trigger the 'resetAllLikes' mutation
    };

    return {
      posts,
      resetLikes
    };
  }
};
</script>