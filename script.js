document.addEventListener('DOMContentLoaded', (event) => {
    // アニメーションさせたい要素を選択
    const content = document.querySelector('.fade-in');

    // ページが読み込まれたら 'is-visible' クラスを追加して表示させる
    if (content) {
        content.classList.add('is-visible');
    }
});
