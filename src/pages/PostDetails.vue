<template>
  <div class="post-details container-fluid text-center">
    <div class="row">
      <div class="col-12">
        <img :src="post.imgUrl" class="w-50 shadow-lg rounded mt-5" alt />
        <p>
          <i
            class="fa fa-pencil"
            aria-hidden="true"
            @click="editToggle = !editToggle"
            v-if="isCreator"
          ></i>
          {{post.title}}
        </p>
        <p>Created By: {{post.creatorEmail}}</p>
        <form class="form-inline" @submit.prevent="editPost" v-if="editToggle">
          <input
            type="text"
            class="form-control"
            placeholder="New Post Title"
            aria-describedby="helpId"
            v-model="postData.title"
          />
          <input
            type="text"
            class="form-control"
            placeholder="New Post Img"
            aria-describedby="helpId"
            v-model="postData.imgUrl"
          />
          <button type="submit" class="btn btn-warning">Edit Post</button>
        </form>
      </div>
      <div class="col-12">
        <h3>Votes</h3>
        <vote-comp />
      </div>
    </div>
  </div>
</template>


<script>
import voteComp from '../components/VoteComponent';

export default {
  name: 'post-details',
  data() {
    return { postData: {}, editToggle: false };
  },
  mounted() {
    this.$store.dispatch('getActivePost', this.$route.params.postId);
  },
  computed: {
    post() {
      return this.$store.state.activePost;
    },
    votes() {
      return this.$store.state.activeVotes;
    },
    isCreator() {
      return this.$store.state.profile.email == this.post.creatorEmail;
    },
  },
  method: {
    editPost() {
      this.postData.id = this.$route.params.postId;
      this.$store.dispatch('editPost', this.postData);
      this.editToggle = false;
    },
  },
  components: { voteComp },
};
</script>

<style scoped>

</style>