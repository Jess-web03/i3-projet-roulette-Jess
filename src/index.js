import $ from 'jquery';
import drag from 'jquery-ui/ui/widgets/draggable';

const lines = $('#lines');
for (let i = 1; i <= 36; i++) {
  const nb = $(`<div id="n${i}">${i}</div>`);
  lines.append(nb);
}

$('#lines > div').on('click', function () {
  $(this).append('<div class="jeton">1€</div>');
});

$('#tourner').on('click', () => {
  const rand = getRandomInt(0, 36);
  console.log(rand);
  console.log($(`#n${rand}`).find('.jeton').length);

  $('.jeton').remove();
});
