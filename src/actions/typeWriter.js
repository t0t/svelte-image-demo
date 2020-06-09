export default function typeWriter(node, speed) {
    let txt = node.innerHTML
    node.innerHTML = ""
    let i = 0;

    let timeOuts = []

    function write(node, speed) {
        if (i < txt.length) {
            node.innerHTML += txt.charAt(i);
            i++;
            timeOuts.push(setTimeout(() => write(node, speed), speed));
        }
    }

    write(node, speed)

    return {
        update(speed) {
            node.innerHTML = ""
            i = 0
            write(node, speed)
        },
        destroy() {
            timeOuts.forEach(t => clearTimeout(t))
            console.log('Timeouts cleared!')
        }
    }
}