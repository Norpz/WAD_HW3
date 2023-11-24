<script>
export default {
  props: ['postId'],

  computed: {
    post() {
      return this.$store.state.posts.find(post => post.id === this.postId);
    }
  },

  methods: {
    likePost() {
      this.$store.commit('incrementLikes', this.postId);
    }
  }
};
</script>

<template>
  <div class="post-container">
    <div class="post">
      <div class="user-profile">
        <img :src="post.imageAuthor_url" alt="User Profile Picture" v-if="post.imageAuthor_url" />
        {{ post.author }}
      </div>
      <div class="date">
        {{ post.create_time }}
      </div>
      <p>{{ post.content }}</p>
      <div class="post-image">
        <img :src="post.image_url" alt="Post Image" class="post-image" v-if="post.image_url" />
      </div>
      <div class="likeDiv">
        <button @click="likePost">
          <img src="@/assets/like.png" class="like"  alt="like"/> <!-- Replace 'path_to_like_image.png' with your actual image path -->
        </button>
        <span>{{ post.likes }} Likes </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
*{
  box-sizing: border-box;
  font-family: sans-serif;
}

body{
  line-height: 1.6;
  margin: 20px;
  min-width: 300px;
  background-color: #ffe6b5;

}

footer{
  clear:both;
  text-align: center;
  font-weight: bold;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  padding-left: 2%;
  padding-right: 2%;
  background-color:#EAD7BB;;
  box-shadow: 0px 0px 14px 0px #EAD7BB;
  color: #113946;
  font-size: 25px;
  border-radius: 15px 15px 15px 15px;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

.login form, .addPost form{
  padding: 10px 15px;
  margin-left: 5%;
  margin-right: 5%;
  background-color: #baf3f8;
  text-align: center;
  box-shadow: 0px 0px 14px 0px rgba(85, 238, 255, 0.75);
  border-radius: 15px 15px 15px 15px;
}
div button {
  margin: 5px;
  margin-bottom: 15px;
  padding: 0 10px;
  text-align: center;
  font: bold 14px/25px Arial, sans-serif;
}

textarea {
  resize: none;
  text-align: left;
  vertical-align: top;
}

input[type='file'] {
  color: rgba(0, 0, 0, 0)
}

.header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
  padding-left: 2%;
  padding-right: 2%;
  background-color:#EAD7BB;;
  box-shadow: 0px 0px 14px 0px #EAD7BB;
  text-align: left;
  font-size: 25px;
  border-radius: 15px 15px 15px 15px;
}

.headerText a{
  color: #113946;
  text-decoration: none;
  cursor: pointer;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
}

/* .header:hover{
  background-color: #BCA37F;
  box-shadow: 0px 0px 14px 0px #c3b59c;
}

.header > .headerText a:hover{
  color: #57747e;

}

.header img{
  max-width: 40%;
  max-height: 40%;
  order: 1;
  float: right;
}

.headerText{
  order: 0;
} */


.loginForm a{
  font: bold 16px/30px Arial, sans-serif;
  color: rgb(0, 13, 191);
}

h1 + p {
  font-weight: bold;
}

h1 ~ p{
  color: #113946;
}

.addPostForm{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#fileInput{
  display: none;
}

.custom-file-input, .createPost{
  display: inline-block;
  padding: 3px 10px;
  margin-top: 20%;
  font-size: 13px;
  cursor: pointer;
  background-color:white;
  color: black;
  border: 1px solid black;
  border-radius: 3px;
}

.post-container {
  margin: 20px;
  text-align: center;
}

.post {
  border: 1px solid #EAD7BB;
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
  background-color: #EAD7BB;
  max-width: 500px;
  margin: auto;
  border-radius: 20px 20px 20px 20px;
  margin-top: 10px;
}

.user-profile {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  background-color: #BCA37F;
  border:1px solid #BCA37F;
  padding: 10px;
  border-radius: 20px 20px 20px 20px;
}

.user-profile img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.post-image img {
  width: 100%;
  display: block;
  margin-bottom: 10px;
}

.caption {
  font-size: 16px;
  text-align: left;
}

.date {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: small;
  background-color: #dfcdb4;
  border: 1px solid #dfccb1;
  padding: 1px 5px;
  border-radius: 0px 15px 0px 15px;
}

.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: -31px;
  top: 100%;
  border-radius: 0px 15px 15px 15px;
}

.dropdown-content a {
  display: block;
  padding: 5px 6px;
  text-decoration: none;
  color: #333;
  font-size: small;
}


.dropdown-content a:hover {
  background-color: #ddd;

}

#logout {
  border-radius: 0 0px 15px 15px;
}

#name {
  border-radius: 0 15px 0px 0px;
}

.likeDiv {
  text-align: right;
}

.like {
  width: 7%;
  height: 7%;
  border-radius: 50%;
  margin-right: 10px;
}

@media (min-width: 600px) {
  .loginForm {
    display: flex;
    flex-direction: column;
  }
  .header{
    display: flex;
    flex-direction: row;
  }
}

</style>