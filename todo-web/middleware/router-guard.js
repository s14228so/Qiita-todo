export default function ({
    store,
    redirect,
    route,

}) {
    store.watch(
        state => state.currentUser,
        (newUser, oldUser) => {
            if (!newUser) {
                switch (route.name) {
                    case "index":
                        redirect("/login")
                    case "mypage":
                        redirect("/login")
                    default:
                        return;
                }
            }
        }
    );

}

