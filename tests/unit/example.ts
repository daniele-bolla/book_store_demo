// import { shallowMount } from "@vue/test-utils";
// import Home from "@/views/Home.vue";
// import Vuex, { Store } from "vuex";
// import { createLocalVue } from "@vue/test-utils";

// const state = {
//   books: {
//     all: []
//   }
// };
// const localVue = createLocalVue();
// localVue.use(Vuex);

// describe("Home", () => {
//   let actions;
//   let store: Store<Record<string, any>>;

//   beforeEach(() => {
//     actions = {
//       getAll: jest.fn().mockResolvedValue(null)
//     };
//     store = new Vuex.Store({
//       actions
//     });
//   });

//   it("renders props.msg when passed", async () => {
//     const wrapper = shallowMount(Home, { store, localVue });
//     console.log(wrapper.vm.all);
//   });
// });
