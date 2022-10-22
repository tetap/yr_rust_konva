use image::{DynamicImage, ImageBuffer};
use wasm_bindgen::prelude::*;
use web_sys::ImageData;

use crate::grayscale::{self};

/**
 * canny 目前还有问题 #TODO： 修复提取边缘问题
 */
#[wasm_bindgen]
pub fn canny(image_data: ImageData, low_threshold: f32, high_threshold: f32) -> Vec<u8> {
    let width = image_data.width();
    let height = image_data.height();
    let data = grayscale::grayscale(image_data);
    _canny(width, height, data, low_threshold, high_threshold)
}

fn _canny(
    width: u32,
    height: u32,
    data: Vec<u8>,
    low_threshold: f32,
    high_threshold: f32,
) -> Vec<u8> {
    use crate::edges;
    let image_buf = ImageBuffer::from_vec(width, height, data.clone()).unwrap();
    let image = DynamicImage::ImageRgba8(image_buf.clone());
    let image_luma = image.clone().into_luma8();
    let canny_image_buf = edges::canny(&image_luma, low_threshold, high_threshold);
    let mut canny_image = DynamicImage::ImageLuma8(canny_image_buf);
    canny_image.invert();
    canny_image.to_rgba8().to_vec()
}

#[test]
fn test_canny() {
    use std::time::Instant;
    let img = image::open("img/original/1.jpg").unwrap();
    let width = img.width();
    let height = img.height();
    let raw_pixels = img.to_rgba8().to_vec();
    let time1 = Instant::now();
    let result = _canny(width, height, raw_pixels, 30.0, 120.0);
    let time2 = time1.elapsed();
    println!("test_canny time: {:?}", time2);
    let img_buffer = ImageBuffer::from_vec(width, height, result).unwrap();
    let save = DynamicImage::ImageRgba8(img_buffer);
    save.save("img/result/1_canny.jpg").unwrap();
}
