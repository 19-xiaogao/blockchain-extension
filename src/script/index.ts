export default function windowChanger() {
    const anotherFunc = (): number => {
        return 42
    }
    window.etherJs = {
        world: "from injected content script",
        coolNumber: anotherFunc()
    }

    console.log("import script success");
    
}