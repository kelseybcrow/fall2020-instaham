<template>
  <div class="vote-comp">
    <p>
      <i class="fa fa-thumbs-up" aria-hidden="true" @click="vote(1)"></i>
      {{upVotes}}
      <i class="fa fa-thumbs-down" aria-hidden="true" @click="vote(-1)"></i>
      {{downVotes}}
    </p>
    <p>
      Overall Rating:
      {{upVotes - downVotes}}
    </p>
  </div>
</template>


<script>
export default {
  name: "vote-comp",
  data() {
    return {};
  },
  computed: {
    upVotes() {
      return this.$store.state.activeVotes.filter((v) => v.value == 1).length;
    },
    downVotes() {
      return this.$store.state.activeVotes.filter((v) => v.value == -1).length;
    },
  },
  methods: {
    vote(num) {
      // this.$store.dispatch("vote", {
      //   post: this.$route.params.postId,
      //   value: num,
      // });
      //NOTE can either build custom object in dispatch to pass multiple values
      //or create a new variable to hold the object and then pass the new var
      let payload = {
        post: this.$route.params.postId,
        value: num,
      };
      this.$store.dispatch("vote", payload);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>