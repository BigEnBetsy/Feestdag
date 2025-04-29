
    const container = document.querySelector('.container');
    container.classList.add('moving-container');

    let x = Math.random() * (window.innerWidth - container.offsetWidth);
    let y = Math.random() * (window.innerHeight - container.offsetHeight);
    let dx = 2;
    let dy = 2;

    function animate() {
        x += dx;
        y += dy;

        // Botsing met de randen
        if (x + container.offsetWidth >= window.innerWidth || x <= 0) {
            dx = -dx;
        }
        if (y + container.offsetHeight >= window.innerHeight || y <= 0) {
            dy = -dy;
        }

        container.style.left = `${x}px`;
        container.style.top = `${y}px`;

        requestAnimationFrame(animate);
    }

    animate();

