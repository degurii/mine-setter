const FaceObserver = new MutationObserver(mutation => {
  const isPressing = mutation.some(({ target }) =>
    target.classList.contains('hd_top-area-face-pressed'),
  );
  if (isPressing) {
    return;
  }

  const isLost = mutation.some(({ target }) =>
    target.classList.contains('hd_top-area-face-lose'),
  );
  if (isLost) {
    const { target } = mutation[0];
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
