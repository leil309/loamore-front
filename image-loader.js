export default function cloudinaryLoader({ src, width, quality }) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `https://imagedelivery.net/BRlP7Dq47LduK2wbBWidRQ/${params.join(
    ',',
  )}${src}`;
}
// https://imagedelivery.net/BRlP7Dq47LduK2wbBWidRQ/d22de28e-1503-42fe-9d76-5d47d6a4d500/contain130
