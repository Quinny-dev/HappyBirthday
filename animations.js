// Create dancing parrot 
function showParrot() {
    const parrot = document.createElement('img');
    parrot.src = 'parrot-dancing-parrot.gif'; 
    parrot.className = 'dancing-parrot';
    parrot.style.left = Math.random() * 80 + 'vw'; 
    document.body.appendChild(parrot);

   
    setTimeout(() => parrot.remove(), 10000); 
}

// Show a parrot every 12 seconds
setInterval(showParrot, 5000);


       
       // Create confetti
        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];
            
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = Math.random() * 100 + 'vw';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
                    confetti.style.animationDelay = Math.random() * 2 + 's';
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 5000);
                }, i * 100);
            }
        }

        // Create balloons
        function createBalloons() {
            const balloonEmojis = ['🎈', '🎉', '🎊', '🎁'];
            
            for (let i = 0; i < 6; i++) {
                setTimeout(() => {
                    const balloon = document.createElement('div');
                    balloon.className = 'balloons';
                    balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
                    balloon.style.left = Math.random() * 90 + 'vw';
                    balloon.style.animationDuration = (Math.random() * 3 + 6) + 's';
                    balloon.style.animationDelay = Math.random() * 2 + 's';
                    document.body.appendChild(balloon);
                    
                    setTimeout(() => balloon.remove(), 10000);
                }, i * 1000);
            }
        }

        // Mouse confetti trail
        let mouseX = 0;
        let mouseY = 0;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        setInterval(() => {
            if (mouseX > 0 && mouseY > 0) {
                for (let i = 0; i < 3; i++) {
                    const confetti = document.createElement('div');
                    confetti.className = 'confetti';
                    confetti.style.left = (mouseX + (Math.random() - 0.5) * 20) + 'px';
                    confetti.style.top = mouseY + 'px';
                    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                    confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
                    confetti.style.width = (Math.random() * 8 + 4) + 'px';
                    confetti.style.height = (Math.random() * 8 + 4) + 'px';
                    document.body.appendChild(confetti);
                    
                    setTimeout(() => confetti.remove(), 6000);
                }
            }
        }, 50);

        // Fireworks on click
        function createFirework(x, y) {
            const particles = 80;
            const colorSets = [
                ['#ffff00', '#ffd700', '#fff700'],  // Bright yellows
                ['#ff1744', '#ff5252', '#ff6b9d'],  // Bright reds/pinks
                ['#00e5ff', '#18ffff', '#76ff03'],  // Bright cyan/green
                ['#ff9100', '#ffab00', '#ffd740'],  // Bright oranges
                ['#e040fb', '#ea80fc', '#ff4081']   // Bright purples/pinks
            ];
            const colorSet = colorSets[Math.floor(Math.random() * colorSets.length)];
            
            for (let i = 0; i < particles; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework-particle';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.backgroundColor = colorSet[Math.floor(Math.random() * colorSet.length)];
                
                const angle = (Math.PI * 2 * i) / particles;
                const velocity = Math.random() * 200 + 150;
                const vx = Math.cos(angle) * velocity;
                const vy = Math.sin(angle) * velocity;
                
                particle.style.setProperty('--vx', vx + 'px');
                particle.style.setProperty('--vy', vy + 'px');
                
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 1500);
            }
        }

        document.addEventListener('click', (e) => {
            createFirework(e.clientX, e.clientY);
        });

        // Initial animations
        createConfetti();
        createBalloons();

        // Repeat confetti every 5 seconds
        setInterval(createConfetti, 5000);

        // Repeat balloons every 8 seconds
        setInterval(createBalloons, 8000);