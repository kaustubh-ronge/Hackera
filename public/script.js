window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/api/me');
        if (response.ok) {
            const user = await response.json();
            document.getElementById('authLinks').innerHTML = `<span>Welcome, ${user.name}</span> <a href="#" id="logoutLink">Logout</a>`;
            document.getElementById('welcomeMessage').textContent = `Welcome back, ${user.name}!`;
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }

    document.getElementById('logoutLink')?.addEventListener('click', async () => {
        try {
            await fetch('/api/logout', { method: 'POST' });
            location.reload();
        } catch (error) {
            console.error('Error logging out:', error);
        }
    });
});
