export function getConfigFromURL() {
    const params = new URLSearchParams(window.location.search);
    return {
        tema: params.get("tema") || "luces",
        modo: params.get("modo") || "repaso",
        subtema: params.get("subtema") || "general"
    };
}
