document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
  
    commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
  
      const commentText = document.getElementById('comment-text').value;
  
      try {
        const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({ text: commentText }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          location.reload();
        } else {
        }
      } catch (err) {
        console.error(err);
      }
    });
  });