use image::{DynamicImage, ImageBuffer};
use wasm_bindgen::prelude::*;
use web_sys::ImageData;

use crate::log;

pub fn grayscale(mut data: Vec<u8>) -> Vec<u8> {
    let len = data.len();
    let mut brightness: f32;
    for i in (0..len).step_by(4) {
        let r = data[i] as f32;
        let g = data[i + 1] as f32;
        let b = data[i + 2] as f32;
        brightness = (r + g + b) / 3.0;
        data[i] = brightness as u8;
        data[i + 1] = brightness as u8;
        data[i + 2] = brightness as u8;
    }
    data
}

pub fn floyd_steinberg(
    data: Vec<u8>,
    width: u32,
    height: u32,
    brightness: i32,
    contrast: f32,
    invert: bool,
) -> Vec<u8> {
    let image_buf = ImageBuffer::from_vec(width, height, data).unwrap();
    let mut image = DynamicImage::ImageRgba8(image_buf);
    image = image.brighten(brightness);
    image = image.adjust_contrast(contrast);
    if invert {
        image.invert();
    }
    let raw_pixels = image.to_luma8().to_vec();
    let color_map = image::imageops::colorops::BiLevel;
    let mut img_buffer = ImageBuffer::from_vec(width, height, raw_pixels).unwrap();
    image::imageops::colorops::dither(&mut img_buffer, &color_map);
    let dither_img = image::DynamicImage::ImageLuma8(img_buffer);
    dither_img.to_rgba8().to_vec()
}

#[wasm_bindgen]
pub fn floyd_steinberg_wasm(
    data: Vec<u8>,
    width: u32,
    height: u32,
    brightness: i32,
    contrast: f32,
    invert: bool,
) -> Vec<i8> {
    let mut result: Vec<i8> = Vec::new();
    let grayscale_img = grayscale(data);
    let len = grayscale_img.len();
    let img = floyd_steinberg(
        grayscale_img.clone(),
        width,
        height,
        brightness,
        contrast,
        invert,
    );
    for i in (0..len).step_by(4) {
        result.push(img[i] as i8);
    }
    result
}
