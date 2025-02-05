// update image when hovering over a preview picture
const update = (previewPic) => {
  const imageHover = document.getElementById("image")
  imageHover.style.backgroundImage = `url(${previewPic.src})`
  imageHover.textContent = previewPic.alt
}

