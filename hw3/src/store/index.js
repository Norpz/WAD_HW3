import { createStore } from 'vuex';

const store = createStore({
  state: {
    posts: []
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    incrementLikes(state, postId) {
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.likes++;
      }
    },
    resetLikes(state) {
      state.posts.forEach(post => {
        post.likes = 0;
      });
    }
  },
  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await fetch('https://api.npoint.io/310271b6e51d1b11206b');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        // Add 'likes' property and set it to 0 for each post
        const postsWithLikes = data.map(post => ({
          ...post,
          likes: 0
        }));

        commit('setPosts', postsWithLikes);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  }
});

export default store;
