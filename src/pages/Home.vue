<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col mt-3">
        <h3>Create a Post</h3>
        <form class="form-inline" @submit.prevent="createPost">
          <div class="form-group">
            <input
              type="text"
              v-model="newPost.title"
              class="form-control"
              placeholder="Title"
              aria-describedby="helpId"
            />
            <input
              type="text"
              class="form-control"
              v-model="newPost.imgUrl"
              placeholder="Img Url"
              aria-describedby="helpId"
            />
          </div>
          <button type="submit" class="btn btn-success">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <post-component v-for="post in posts" :key="post.id" :postProp="post" />
    </div>
  </div>
</template>

<script>
import postComponent from "../components/PostComponent";
export default {
  name: "home",
  data() {
    return {
      newPost: {},
    };
  },
  mounted() {
    this.$store.dispatch("getAllPosts");
  },
  methods: {
    createPost() {
      this.$store.dispatch("createPost", this.newPost);
    },
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
  components: {
    postComponent,
  },
};
</script>
