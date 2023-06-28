export const changeCssVariables = theme => {
    const root = document.querySelector(':root');
    root.style.setProperty(`--theme-defalut-header`, `var(--theme-${theme}-header)`);
    root.style.setProperty(`--theme-default-bgimg`, `var(--theme-${theme}-bgimg)`);
}