const poss = [
  'static',
  'relative',
  'absolute',
  'fixed'
]

function togglePosition(e) {
  const id = e.target.dataset.for;

  const el = document.getElementById(id);

  const curr = el.style.position || 'static';

  const currIndex = poss.indexOf(curr) || 0;

  const nextIndex = (currIndex + 1) % poss.length;

  console.log(curr);
  console.log(currIndex);
  console.log(nextIndex);

  el.style.position = poss[nextIndex];

  e.target.innerHTML = `position: ${poss[nextIndex]}`;
}

function onChange(e, side, id) {
  const el = document.getElementById(id);

  const val = e.target.value;

  if(val === "") {
    el.style[side] = 'unset';
  } else {
    el.style[side] = `${val}px`;
  }


}
