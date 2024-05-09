const uploadImage = (imageFile, nextStep) => {
  console.log(`uploading ${imageFile}`);
  const image = `${imageFile}`;
  nextStep(image);
};

const cropImage = (image, nextStep) => {
  console.log(`cropping ${image}`);
  const croppedImage = `${image}-crop`;
  nextStep(croppedImage);
};

const addWM = (croppedImage, nextStep) => {
  console.log(`watermarking ${croppedImage}`);
  const WMImage = `${croppedImage}-wm`;
  nextStep(WMImage);
};

uploadImage("sehun", (image) => {
  cropImage(image, (croppedImage) => {
    addWM(croppedImage, (WMImage) => {
      console.log(`your file is ready: ${WMImage}`);
    });
  });
});










