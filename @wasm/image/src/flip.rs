use image::{DynamicImage, ImageBuffer};
use wasm_bindgen::prelude::*;
use web_sys::ImageData;

/*
* 图片翻转
*/
#[wasm_bindgen]
pub fn flip(image_data: ImageData, flip_x: bool, flip_y: bool) -> Vec<u8> {
    let width = image_data.width();
    let height = image_data.height();
    let raw_pixels = image_data.data().to_vec();
    _flip(width, height, raw_pixels, flip_x, flip_y)
}

fn _flip(width: u32, height: u32, data: Vec<u8>, flip_x: bool, flip_y: bool) -> Vec<u8> {
    let img_buffer = ImageBuffer::from_vec(width, height, data).unwrap();
    let mut img = DynamicImage::ImageRgba8(img_buffer);
    if flip_x {
        img = img.fliph();
    }
    if flip_y {
        img = img.flipv();
    }
    img.to_rgba8().to_vec()
}

#[test]
fn test_flip() {
    use std::time::Instant;
    let img = image::open("img/original/1.jpg").unwrap();
    let width = img.width();
    let height = img.height();
    let raw_pixels = img.to_rgba8().to_vec();
    let time1 = Instant::now();
    let result = _flip(width, height, raw_pixels, true, true);
    let time2 = time1.elapsed();
    println!("test_flip time: {:?}", time2);
    let img_buffer = ImageBuffer::from_vec(width, height, result).unwrap();
    let save = DynamicImage::ImageRgba8(img_buffer);
    save.save("img/result/1_flip.jpg").unwrap();
}
