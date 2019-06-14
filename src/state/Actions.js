export default () => ({
    toggleNavBarCollapsed(state) {
        return {
            layout: {
                navBarCollapsed: !state.layout.navBarCollapsed
            }
        };
    }
});
