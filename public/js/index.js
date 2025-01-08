$(document).ready(function() {
    const colors = [
      '--primary-color',
      '--info-color',
      '--success-color',
      '--warning-color',
      '--danger-color'
    ];
  
    $('.menu-hover-fill li').each(function() {
      let randomColor = Math.floor(Math.random() * colors.length)
      const colorVar = colors[randomColor];
      const colorValue = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
      $(this).css('--menu-link-active-color', colorValue);
    });
  });

  function deletePost(id) {
    console.log(`working ${id}`)
    // TODO: implement delete feature
  }
  