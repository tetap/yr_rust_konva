use wasm_bindgen::prelude::*;
use web_sys::ImageData;

/**
 * 二值化
 */
#[wasm_bindgen]
pub fn threshold(image_data: ImageData, max_val: i32) -> Vec<u8> {
    let data = image_data.data().to_vec();
    _threshold(data, max_val)
}

fn _threshold(mut data: Vec<u8>, max_val: i32) -> Vec<u8> {
    let len = data.len();
    let mut threshold: i32;
    for i in (0..len).step_by(4) {
        let r = data[i] as i32;
        let g = data[i] as i32;
        let b = data[i] as i32;
        threshold = (r + g + b) / 3;
        if threshold > max_val {
            threshold = 255
        } else {
            threshold = 0
        }
        data[i] = threshold as u8;
        data[i + 1] = threshold as u8;
        data[i + 2] = threshold as u8;
    }
    data
}

#[test]
fn test_threshold() {
    use image::DynamicImage;
    use image::ImageBuffer;
    use std::time::Instant;
    let img = image::open("img/original/1.jpg").unwrap();
    let width = img.width();
    let height = img.height();
    let raw_pixels = img.to_rgba8().to_vec();
    let time1 = Instant::now();
    let result = _threshold(raw_pixels, 128);
    let time2 = time1.elapsed();
    println!("test_threshold time: {:?}", time2);
    let img_buffer = ImageBuffer::from_vec(width, height, result).unwrap();
    let save = DynamicImage::ImageRgba8(img_buffer);
    save.save("img/result/1_threshold.jpg").unwrap();
}
