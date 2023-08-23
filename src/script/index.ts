export default function loadScript() {
    const anotherFunc = () => {
        return 42
    }
    window.etherJs = {
        world: "from injected content script",
        coolNumber: anotherFunc()
    }

    console.log("import script success");
    
}

