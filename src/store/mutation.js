export default {
    login_in(state, token) {
        state.userToken= token
    },
    showState: (state, name) => state.name = name
}