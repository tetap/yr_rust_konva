use wasm_bindgen::prelude::*;
use web_sys::ImageData;

/**
 * 转灰度
 */
#[wasm_bindgen]
pub fn grayscale(image_data: ImageData) -> Vec<u8> {
    let data = image_data.data().to_vec();
    _grayscale(data)
}

fn _grayscale(mut data: Vec<u8>) -> Vec<u8> {
    let len = data.len();
    let mut brightness: f32;
    for i in (0..len).step_by(4) {
        let r = data[i] as f32;
        let g = data[i] as f32;
        let b = data[i] as f32;
        brightness = 0.34 * r + 0.5 * g + 0.16 * b;
        data[i] = brightness as u8;
        data[i + 1] = brightness as u8;
        data[i + 2] = brightness as u8;
    }
    data
}

#[test]
fn test_grayscale() {
    use image::DynamicImage;
    use image::ImageBuffer;
    use std::time::Instant;
    let img = image::open("img/original/1.jpg").unwrap();
    let width = img.width();
    let height = img.height();
    let raw_pixels = img.to_rgba8().to_vec();
    let time1 = Instant::now();
    let result = _grayscale(raw_pixels);
    let time2 = time1.elapsed();
    println!("test_grayscale time: {:?}", time2);
    let img_buffer = ImageBuffer::from_vec(width, height, result).unwrap();
    let save = DynamicImage::ImageRgba8(img_buffer);
    save.save("img/result/1_grayscale.jpg").unwrap();
}
