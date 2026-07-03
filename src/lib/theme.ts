export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

// Runs synchronously before hydration so the correct theme class is on <html>
// before first paint — avoids a light/dark flash on load.
export const themeBootstrapScript = `(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    if (theme === 'light') document.documentElement.classList.add('light');
  } catch (e) {}
})();`;
