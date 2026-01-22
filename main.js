export default function register(api) {
    // Allow async loaders in the host (bundled plugin loader)
    void api.loadBlocks();
    void api.loadCategories();
    void api.loadStyles();
}
