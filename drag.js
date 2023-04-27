// 獲取地圖容器元素
const mapContainer = document.getElementById('map-container');

// 設置地圖容器元素的 CSS 样式
mapContainer.style.position = 'relative';
mapContainer.style.overflow = 'hidden';

// 添加事件監聽器
mapContainer.addEventListener('mousedown', (event) => {
  // 獲取鼠標按下時的偏移量
  const offsetX = event.clientX - mapContainer.offsetLeft;
  const offsetY = event.clientY - mapContainer.offsetTop;

  // 添加事件監聽器
  mapContainer.addEventListener('mousemove', moveHandler);

  // 添加事件監聽器
  mapContainer.addEventListener('mouseup', () => {
    // 在鼠標抬起時，移除事件監聽器
    mapContainer.removeEventListener('mousemove', moveHandler);
  });

  function moveHandler(event) {
    // 獲取鼠標移動的偏移量
    const left = event.clientX - offsetX;
    const top = event.clientY - offsetY;

    // 根據偏移量重新定位地圖容器元素
    mapContainer.style.left = left + 'px';
    mapContainer.style.top = top + 'px';
  }
});
