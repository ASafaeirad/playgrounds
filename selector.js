var btnSelect = document.getElementById('btnSelect');
var txtSelector = document.getElementById('txtSelector');
var parents = document.getElementById('parents');
txtSelector.addEventListener('keyup', delayOnSelect);
var delay;

var childs = document.querySelectorAll('.child');
childs.forEach(_ => _.addEventListener('mouseenter', onSelect))
childs.forEach(_ => _.addEventListener('mouseleave', onSelect))

function delayOnSelect(e) {
  if(delay) clearTimeout(delay);
  delay = setTimeout(function() {
    onSelect(e);
  }, 500);
}

function onSelect(e) {
  unSelectAll();
  if(!txtSelector.value) return;
  if(txtSelector.value.includes(":hover")) console.log('hover');
  try {
    var selectedElements = document.querySelectorAll(txtSelector.value);
    select(selectedElements);
  } catch (e) {
    console.warn('Not Valid');
  }
}

function unSelectAll() {
  var allElemenets = document.querySelectorAll('*')
  for (el of allElemenets) {
    el.classList.remove('selected');
  }
}

function select(els) {
  for (el of els) {
    el.classList.add('selected');
  }
}
