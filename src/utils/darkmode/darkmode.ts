const currentTheme: string | null = localStorage.getItem("theme");
let mode: string = "";

if (currentTheme) {
  document.documentElement.setAttribute("theme", currentTheme);

  if (currentTheme === "dark") mode = "dark";
  else mode = "light";
} else mode = "light";

// params:
// check => true => 'dark'
// check => false => 'light'

const switchTheme = (check: Boolean = false): void => {
  if (check) {
    document.documentElement.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
    mode = "dark";
  } else {
    document.documentElement.setAttribute("theme", "light");
    localStorage.setItem("theme", "light");
    mode = "light";
  }
};

export { mode, switchTheme };
