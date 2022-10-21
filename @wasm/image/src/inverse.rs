use image::{DynamicImage, ImageBuffer};
use wasm_bindgen::prelude::*;
use web_sys::ImageData;

#[wasm_bindgen]
pub fn inverse(image_data: ImageData) -> Vec<u8> {
    let width = image_data.width();
    let height = image_data.height();
    let raw_pixels = image_data.data().to_vec();
    _inverse(width, height, raw_pixels)
}

fn _inverse(width: u32, height: u32, data: Vec<u8>) -> Vec<u8> {
    let img_buffer = ImageBuffer::from_vec(width, height, data).unwrap();
    let mut img = DynamicImage::ImageRgba8(img_buffer);
    img.invert();
    img.to_rgba8().to_vec()
}

#[test]
fn test_inverse() {
    use image::DynamicImage;
    use image::ImageBuffer;
    use std::time::Instant;
    let img = image::open("img/original/1.jpg").unwrap();
    let width = img.width();
    let height = img.height();
    let raw_pixels = img.to_rgba8().to_vec();
    let time1 = Instant::now();
    let result = _inverse(width, height, raw_pixels);
    let time2 = time1.elapsed();
    println!("test_inverse time: {:?}", time2);
    let img_buffer = ImageBuffer::from_vec(width, height, result).unwrap();
    let save = DynamicImage::ImageRgba8(img_buffer);
    save.save("img/result/1_inverse.jpg").unwrap();
}
