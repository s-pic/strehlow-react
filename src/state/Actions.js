export default Store => ({
    toggleNavBarCollapsed(state) {
        return {
            layout: {
                navBarCollapsed: !state.layout.navBarCollapsed
            }
        };
    }
});
