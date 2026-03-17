function nextScreen(screenNum) {
    // Hide all containers
    document.querySelectorAll('.container').forEach(container => {
        container.style.display = 'none';
    });
    // Show the target container
    document.getElementById('screen' + screenNum).style.display = 'block';
 }
 function moveButton() {
    const btn = document.getElementById('noBtn');
    // Generate random positions
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);
    btn.style.left = x + 'px';
    btn.style.top = y + 'px';
 }