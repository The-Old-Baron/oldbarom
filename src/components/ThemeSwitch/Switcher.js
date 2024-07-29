import { useEffect } from "react";

function Switcher() {
    useEffect(() => {
        const theme = document.querySelector('html');
        const themeMode = document.querySelector('#theme-mode');
        const currentTheme = localStorage.getItem('theme') || null;
        if (currentTheme) {
            theme.setAttribute('data-bs-theme', currentTheme);
            if (currentTheme === 'dark') {
                themeMode.checked = true;
            }
        }
        // Save theme to localStorage when it changes
        themeMode.addEventListener('change', () => {
            if (themeMode.checked) {
                theme.setAttribute('data-bs-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            } else {
                theme.setAttribute('data-bs-theme', 'light');
                localStorage.setItem('theme', 'light');
            }
        });
    }, []);

    const handlerSwitcher = () => {
        const theme = document.querySelector('html');
        const themeMode = document.querySelector('#theme-mode');
        if (themeMode.checked) {
            theme.setAttribute('data-bs-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            theme.setAttribute('data-bs-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }

    return (
        <div className="form-check form-switch mode-switch pe-lg-1 ms-auto me-4" data-bs-toggle="mode">
            <input type="checkbox" className="form-check-input" id="theme-mode" onClick={handlerSwitcher} />
            <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Light</label>
            <label className="form-check-label d-none d-sm-block" htmlFor="theme-mode">Dark</label>
        </div>
    );
}

export default Switcher;
