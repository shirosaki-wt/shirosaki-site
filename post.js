// URLパラメータから記事IDを取得
const params = new URLSearchParams(window.location.search);
const postId = params.get('id');

fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const post = posts.find(p => p.id === postId);
    const container = document.getElementById('post-content');

    if (post) {
      container.innerHTML = `
        <h1>${post.title}</h1>
        <p><em>${post.date}</em></p>
        ${post.image ? `<img src="images/${post.image}" alt="${post.title}" style="max-width:100%; border-radius:8px;">` : ''}
        ${post.content}
      `;
    } else {
      container.innerHTML = '<p>記事が見つかりませんでした。</p>';
    }
  })
  .catch(err => {
    console.error('posts.jsonの読み込みに失敗しました:', err);
    document.getElementById('post-content').innerHTML = '<p>記事を読み込めませんでした。</p>';
  });
