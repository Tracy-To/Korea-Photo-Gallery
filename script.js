// update image when hovering over a preview picture
const update = (previewPic) => {
  const imageHover = document.getElementById("image")
  imageHover.style.backgroundImage = `url(${previewPic.src})`
  imageHover.textContent = previewPic.alt
}

// undo image update when not hovering over a preview picture
const undo = () => {
  const imageHover = document.getElementById("image")
  imageHover.style.backgroundImage = ""
  imageHover.textContent = "Hover over an image below to display here."
}
