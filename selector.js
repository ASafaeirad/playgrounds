const childs = document.querySelectorAll('.child');
const parents = document.querySelectorAll('.parent')
const txtSelector = document.getElementById('selector');
var timeout;

const createClassSpan = (child, filter = '', className) => {
  const classSpan = document.createElement('span');
  const classNames = child
    .classList
    .toString()
    .split(' ')
    .filter(c => c !== filter)
    .join(' ');

  classSpan.textContent = `class="${classNames}"`;
  classSpan.classList.add(className);
  return classSpan;
}

const createIdSpan = (child, className) => {
  const idSpan = document.createElement('span');
  const id = child.getAttribute('id');
  console.log(id)
  if(!id) {
    return idSpan;
  }

  idSpan.textContent = `id="${id}"`;
  idSpan.classList.add(className);
  return idSpan;
}

const createTypeSpan = (child) => {
  const typeSpan = document.createElement('span')
  typeSpan.textContent = child.tagName.toLowerCase();
  typeSpan.classList.add('type');
  return typeSpan;
}

childs.forEach(child => {
  const classSpan = createClassSpan(child, 'child');
  const typeSpan = createTypeSpan(child)

  child.appendChild(typeSpan);
  child.appendChild(classSpan);
})

parents.forEach(parent => {
  const classSpan = createClassSpan(parent, '', 'parent__class');
  const idSpan = createIdSpan(parent, 'parent__id');
  const hr = document.createElement('hr');
  hr.classList.add('parent__hr')
  parent.prepend(hr);
  parent.prepend(classSpan);
  parent.prepend(idSpan);
});

txtSelector.addEventListener('keyup', delayOnSelect);
[...childs, ...parents].forEach(_ => _.addEventListener('mouseenter', onSelect));
[...childs, ...parents].forEach(_ => _.addEventListener('mouseleave', onSelect));

const unSelectAll = () => [...childs, ...parents].forEach(el => el.classList.remove('selected'));
const selectElements = (els) => els.forEach(el => el.classList.add('selected'));

function delayOnSelect() {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }

  timeout = setTimeout(onSelect, 500);
}

function onSelect() {
  unSelectAll();
  if (txtSelector.value === '') {
    return;
  }
  try {
    const selectedElements = document.querySelectorAll(txtSelector.value);
    selectElements(selectedElements);
  } catch(e) {
    console.warn('Invalid Selector', txtSelector.value)
  }
}
