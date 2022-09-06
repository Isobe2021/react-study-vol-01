import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 游ゴシック体,YuGothic,游ゴシック medium,yu gothic medium,YuGothicM,yu gothic,メイリオ,Meiryo,ヒラギノ角ゴ pro w3,hiragino kaku gothic pro,Osaka,ms pゴシック,ms pgothic,sans-serif;
        margin: 0;
        padding: 0;
    };
    /*
    Josh's Custom CSS Reset
    https://www.joshwcomeau.com/css/custom-css-reset/
    */
    *,*::before,*::after{box-sizing:border-box}*{margin:0}html,body{height:100%}body{line-height:1.5;-webkit-font-smoothing:antialiased}img,picture,video,canvas,svg{display:block;max-width:100%}input,button,textarea,select{font:inherit}p,h1,h2,h3,h4,h5,h6{overflow-wrap:break-word}#root,#__next{isolation:isolate}
`;