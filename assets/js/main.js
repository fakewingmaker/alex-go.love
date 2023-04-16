const cover = document.getElementById('cover');
const rotatingImage = document.getElementById('rotating-image');
const content = document.getElementById('content');

let clickCount = 0;

rotatingImage.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        rotatingImage.style.animation = 'rotation 2s linear infinite';
    } else if (clickCount === 2) {
        cover.style.display = 'none';
        content.style.display = 'block';
    }
});

const css = document.createElement('style');
css.type = 'text/css';
css.innerHTML = `
    @keyframes rotation {
        from {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        to {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }
`;
document.head.appendChild(css);

