import request from "./_request";

const auth = {
    namespaced: true,
    actions: {
        async GET_FIRM_IDS(context){
            const data = await request.actions.REQUEST(context, "/firm", "GET")
            return data
        },
        async GET_FIRM_BY_ID(context, firm_id){
            const data = await request.actions.REQUEST(context, "/firm/"+firm_id, "GET")
            return data
        },
        async UPDATE_FIRM(context, form){
            const data = await request.actions.REQUEST(context, "/firm/"+form.id, "PUT", form)
            return data
        },
        async CREATE_FIRM(context, form){
            const data = await request.actions.REQUEST(context, "/firm", "POST", form)
            return data
        },
    }
}

export default auth