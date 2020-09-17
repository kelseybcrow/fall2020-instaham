import { post } from "jquery";
import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "../services/AxiosService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    posts: [],
    activePost: {},
    activeVotes: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPosts(state, posts) {
      state.posts = posts
    },
    setActivePost(state, post) {
      state.activePost = post
    },
    setVotes(state, votes) {
      state.activeVotes = votes
    }
  },
  actions: {
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getAllPosts({ commit }) {
      try {
        let res = await api.get("posts")
        commit("setPosts", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createPost({ commit, state }, postData) {
      try {
        let res = await api.post("posts", postData)
        commit("setPosts", [...state.posts, res.data])
      } catch (error) {
        console.error(error)
      }
    },
    async getActivePost({ commit }, postId) {
      try {
        let res = await api.get("posts/" + postId)
        commit("setActivePost", res.data.data)
        commit("setVotes", res.data.votes)
      } catch (error) {
        console.error(error)
      }
    },
    async vote({ commit, dispatch }, voteData) {
      try {
        let res = await api.post("votes", voteData)
        dispatch("getActivePost", voteData.post)
      } catch (error) {
        console.error(error)
      }
    },
    async editPost({ commit }, postData) {
      try {
        let res = await api.put("posts/" + postData.id, postData)
        commit("setActivePost", res.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
});
