export function getFileData(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(e.currentTarget.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
