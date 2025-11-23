
        document.addEventListener('DOMContentLoaded', function() {
            // Form toggle functionality
            const toggleButtons = document.querySelectorAll('.toggle-btn');
            const forms = document.querySelectorAll('.form');
            const toggleSlider = document.querySelector('.toggle-slider');
            const formToggle = document.querySelector('.form-toggle');
            
            toggleButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const targetForm = this.getAttribute('data-form');
                    
                    // Update active button
                    toggleButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update toggle slider position
                    if (targetForm === 'login') {
                        formToggle.classList.add('toggle-login');
                        formToggle.classList.remove('toggle-signup');
                    } else {
                        formToggle.classList.add('toggle-signup');
                        formToggle.classList.remove('toggle-login');
                    }
                    
                    // Show target form
                    forms.forEach(form => {
                        form.classList.remove('active');
                        if (form.id === `${targetForm}-form`) {
                            form.classList.add('active');
                        }
                    });
                });
            });
            
            // Switch form links
            document.getElementById('switch-to-signup').addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.toggle-btn[data-form="signup"]').click();
            });
            
            document.getElementById('switch-to-login').addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector('.toggle-btn[data-form="login"]').click();
            });
            
            // Password toggle functionality
            const passwordToggles = document.querySelectorAll('.password-toggle');
            
            passwordToggles.forEach(toggle => {
                toggle.addEventListener('click', function() {
                    const input = this.previousElementSibling;
                    const icon = this.querySelector('i');
                    
                    if (input.type === 'password') {
                        input.type = 'text';
                        icon.classList.remove('fa-eye');
                        icon.classList.add('fa-eye-slash');
                    } else {
                        input.type = 'password';
                        icon.classList.remove('fa-eye-slash');
                        icon.classList.add('fa-eye');
                    }
                });
            });
            
            // Form validation and submission
            const loginForm = document.getElementById('login-form');
            const signupForm = document.getElementById('signup-form');
            
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('login-email').value;
                const password = document.getElementById('login-password').value;
                
                // Simple validation
                if (!email || !password) {
                    alert('Please fill in all fields');
                    return;
                }
                
                // Simulate login process
                const btn = this.querySelector('.btn');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    alert('Login successful! Redirecting...');
                    // In a real app, you would redirect to dashboard
                }, 1500);
            });
            
            signupForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const firstName = document.getElementById('signup-firstname').value;
                const lastName = document.getElementById('signup-lastname').value;
                const email = document.getElementById('signup-email').value;
                const phone = document.getElementById('signup-phone').value;
                const address = document.getElementById('signup-address').value;
                const city = document.getElementById('signup-city').value;
                const pincode = document.getElementById('signup-pincode').value;
                const password = document.getElementById('signup-password').value;
                const confirmPassword = document.getElementById('signup-confirm-password').value;
                const agreeTerms = document.getElementById('agree-terms').checked;
                
                // Validation
                if (!firstName || !lastName || !email || !phone || !address || !city || !pincode || !password || !confirmPassword) {
                    alert('Please fill in all required fields');
                    return;
                }
                
                if (password !== confirmPassword) {
                    alert('Passwords do not match');
                    return;
                }
                
                if (!agreeTerms) {
                    alert('Please agree to the Terms of Service and Privacy Policy');
                    return;
                }
                
                // Simulate signup process
                const btn = this.querySelector('.btn');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
                btn.disabled = true;
                
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    alert('Account created successfully! Welcome to FIXIEZ.');
                    // In a real app, you would redirect to dashboard or send verification email
                }, 2000);
            });
            
            // Add floating animation to some elements
            const features = document.querySelectorAll('.features li');
            features.forEach((feature, index) => {
                feature.style.animationDelay = `${index * 0.2}s`;
                feature.classList.add('floating');
            });
        });
 