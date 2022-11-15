
export const toggleScroll = () => {
    const overlays = document.querySelectorAll('.overlay');

    if (overlays.length > 0) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
};