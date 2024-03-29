let count = 0;
let bool = false;

function sleep(milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function pageScroll() {

  const page = document.querySelectorAll(".template-p")[0];
  const line = page.scrollHeight - page.clientHeight;

  if (count === line || count === 0) {

    bool = !bool;
    await sleep(5000);
  }

  if (bool === true) {
    count++;
    page.scrollBy(0,1);
    return setTimeout(pageScroll,45);
  }
  count--;
  page.scrollBy(0,-1);
  return setTimeout(pageScroll,45);
}

window.addEventListener("load", pageScroll());
