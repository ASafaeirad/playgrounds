updateVisibility();

function updateVisibility() {
  const chks = document.querySelectorAll('.control input');

  chks.forEach(chk => {
  const value = chk.checked;
  const type = chk.dataset.type;
  console.log(value, type);

  onVisibilityChange(value, type)
  })
}

function onChange(event, id, prop) {
  const value = event.target.value || 0;

  const el = document.getElementById(id).querySelector(`.${prop}`);
  el.style.padding = value;
}

function onVisibilityChange(value, name) {
  const els = document.querySelectorAll(`.${name}`);
  if (!value) {
    els.forEach(el => {
      el.style.background = 'transparent';
    })
  } else {
    els.forEach(el => {
      el.style.background = null;
    })
  }
}
