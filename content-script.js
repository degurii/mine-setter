const FaceObserver = new MutationObserver(mutation => {
  const target = mutation[0].target;
  const lose = mutation.some(({ target }) =>
    target.classList.contains('hd_top-area-face-lose'),
  );
  if (lose) {
    target.click();
  }
});

const BoardObserver = new MutationObserver(() => {
  FaceObserver.disconnect();
  const $face = document.querySelector('#top_area_face');
  if ($face) {
    FaceObserver.observe($face, {
      attributes: true,
      attributeFilter: ['class'],
    });
  }
});
window.addEventListener('load', () => {
  const $board = document.querySelector('#G64');
  BoardObserver.observe($board, {
    childList: true,
  });
});
