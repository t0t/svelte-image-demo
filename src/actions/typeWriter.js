export default function typeWriter(node) {
    const txt = node.innerHTML
    node.innerHTML = ""

    let i = 0;
    let speed = 50;

    function write() {
        if (i < txt.length) {
            node.innerHTML += txt.charAt(i);
            i++;
            setTimeout(write, speed);
        }
    }

    write()
}