        // Detect if mobile device
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Reduce particle counts on mobile
        const confettiCount = isMobile ? 25 : 50;
        const balloonCount = isMobile ? 3 : 6;
        const fireworkParticles = isMobile ? 40 : 80;
        const mouseConfettiRate = isMobile ? 100 : 50;
        const mouseConfettiCount = isMobile ? 1 : 3;

        // Create dancing parrot 
        function showParrot() {
            const parrot = document.createElement('img');
            parrot.src = 'parrot-dancing-parrot.gif'; 
            parrot.className = 'dancing-parrot';
            parrot.style.left = Math.random() * 80 + 'vw'; 
            document.body.appendChild(parrot);
            setTimeout(() => parrot.remove(), 10000); 
        }

        // Show parrots less frequently on mobile
        if (!isMobile) {
            setInterval(showParrot, 5000);
        } else {
            setInterval(showParrot, 10000);
        }

        // Create confetti
        function createConfetti() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];
            
            for (let i = 0; i < confettiCount; i++) {
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
            
            for (let i = 0; i < balloonCount; i++) {
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

        // Mouse/touch confetti trail
        let mouseX = 0;
        let mouseY = 0;
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#6c5ce7', '#fd79a8'];

        // Handle both mouse and touch events
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        document.addEventListener('touchmove', (e) => {
            if (e.touches.length > 0) {
                mouseX = e.touches[0].clientX;
                mouseY = e.touches[0].clientY;
            }
        }, { passive: true });

        setInterval(() => {
            if (mouseX > 0 && mouseY > 0) {
                for (let i = 0; i < mouseConfettiCount; i++) {
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
        }, mouseConfettiRate);

        // Fireworks on click/tap
        function createFirework(x, y) {
            const colorSets = [
                ['#ffff00', '#ffd700', '#fff700'],
                ['#ff1744', '#ff5252', '#ff6b9d'],
                ['#00e5ff', '#18ffff', '#76ff03'],
                ['#ff9100', '#ffab00', '#ffd740'],
                ['#e040fb', '#ea80fc', '#ff4081']
            ];
            const colorSet = colorSets[Math.floor(Math.random() * colorSets.length)];
            
            for (let i = 0; i < fireworkParticles; i++) {
                const particle = document.createElement('div');
                particle.className = 'firework-particle';
                particle.style.left = x + 'px';
                particle.style.top = y + 'px';
                particle.style.backgroundColor = colorSet[Math.floor(Math.random() * colorSet.length)];
                
                const angle = (Math.PI * 2 * i) / fireworkParticles;
                const velocity = Math.random() * (isMobile ? 150 : 200) + (isMobile ? 100 : 150);
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

        document.addEventListener('touchstart', (e) => {
            if (e.touches.length > 0) {
                createFirework(e.touches[0].clientX, e.touches[0].clientY);
            }
        }, { passive: true });

        // Initial animations
        createConfetti();
        createBalloons();

        // Repeat animations
        setInterval(createConfetti, 5000);
        setInterval(createBalloons, 8000);