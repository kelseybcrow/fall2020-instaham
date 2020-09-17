<template>
  <div class="post-component col-4">
    <router-link :to="{name:'post-details', params:{postId: postProp.id}}">
      <div class="card text-dark">
        <img class="card-img-top" :src="postProp.imgUrl" alt />
        <div class="card-body">
          <h4 class="card-title">{{postProp.title}}</h4>
          <p>{{postProp.creator.name}}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: "post-component",
  props: ["postProp"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>