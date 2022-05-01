import Vuex from "vuex";

// MODULES
import request from "./modules/_request";
import auth from "./modules/auth";
import firm from "./modules/firm"


export default new Vuex.Store({
    namespaced: true,
    modules: {
        request,
        auth,
        firm
    }
})