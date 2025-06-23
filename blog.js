// posts.jsonを読み込み、日付の新しい順に並べてタイトル一覧を作る
fetch('posts.json')
  .then(response => response.json())
  .then(posts => {
    const list = document.getElementById('blog-list');

    // 日付の降順でソート（新しいものから）
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // 各記事タイトルをリンクとしてリストに追加
    posts.forEach(post => {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `post.html?id=${post.id}`;
      link.textContent = `${post.title}（${post.date}）`;
      li.appendChild(link);
      list.appendChild(li);
    });
  })
  .catch(err => {
    console.error('posts.jsonの読み込みに失敗しました:', err);
  });
