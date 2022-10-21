use image::{DynamicImage, ImageBuffer};
use wasm_bindgen::prelude::*;
use web_sys::ImageData;

use crate::grayscale;

#[wasm_bindgen]
pub fn floyd_steinberg(image_data: ImageData) -> Vec<u8> {
    let width = image_data.width();
    let height = image_data.height();
    let raw_pixels = image_data.data().to_vec();
    _floyd_steinberg(width, height, raw_pixels)
}

fn _floyd_steinberg(width: u32, height: u32, data: Vec<u8>) -> Vec<u8> {
    let image_buf = ImageBuffer::from_vec(width, height, data).unwrap();
    let image = DynamicImage::ImageRgba8(image_buf);
    let raw_pixels = image.to_luma8().to_vec();
    let color_map = image::imageops::colorops::BiLevel;
    let mut img_buffer = ImageBuffer::from_vec(width, height, raw_pixels).unwrap();
    image::imageops::colorops::dither(&mut img_buffer, &color_map);
    let dither_img = image::DynamicImage::ImageLuma8(img_buffer);
    dither_img.to_rgba8().to_vec()
}

#[test]
fn test_floyd_steinberg() {
    use image::DynamicImage;
    use image::ImageBuffer;
    use std::time::Instant;
    let img = image::open("img/original/1.jpg").unwrap();
    let width = img.width();
    let height = img.height();
    let raw_pixels = img.to_rgba8().to_vec();
    let time1 = Instant::now();
    let result = _floyd_steinberg(width, height, raw_pixels);
    let time2 = time1.elapsed();
    println!("test_floyd_steinberg time: {:?}", time2);
    let img_buffer = ImageBuffer::from_vec(width, height, result).unwrap();
    let save = DynamicImage::ImageRgba8(img_buffer);
    save.save("img/result/1_floyd_steinberg.jpg").unwrap();
}
