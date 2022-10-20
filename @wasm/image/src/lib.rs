use image::{DynamicImage, GrayImage, ImageBuffer};
use imageproc::edges::canny;
use wasm_bindgen::prelude::*;
use web_sys::ImageData;

/**
 * 转灰度
 */
#[wasm_bindgen]
pub fn grayscale(image_data: ImageData) -> Vec<u8> {
    let mut data = image_data.data().clone().to_vec();
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

/**
 * 二值化
 */
#[wasm_bindgen]
pub fn threshold(image_data: ImageData, max_val: i32) -> Vec<u8> {
    let mut data = image_data.data().clone().to_vec();
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

/**
 * canny
 */
#[wasm_bindgen]
pub fn to_canny(image_data: ImageData, low_threshold: f32, high_threshold: f32) -> Vec<u8> {
    let width = image_data.width();
    let height = image_data.height();
    let data = grayscale(image_data);
    let image: GrayImage = ImageBuffer::from_raw(width, height, data).unwrap();
    let c_image: GrayImage = canny(&image, low_threshold, high_threshold);
    DynamicImage::ImageLuma8(c_image).to_rgba8().to_vec()
}

/**
 * 绘画风格
 */
#[wasm_bindgen]
pub fn painting(image_data: ImageData, sigma: f32) -> Vec<u8> {
    let width = image_data.width();
    let height = image_data.height();
    let data = image_data.data().to_vec();
    let image = DynamicImage::ImageRgba8(ImageBuffer::from_raw(width, height, data).unwrap());
    let img_buf = image.to_rgba8();
    let mut original_buf = image.to_rgba8();
    let blur_img = imageproc::filter::gaussian_blur_f32(&img_buf, sigma);
    for x in 0..width {
        for y in 0..height {
            let gauss_pixel = blur_img.get_pixel(x, y)[0] as f32;
            let pixel = original_buf.get_pixel(x, y);
            let gray_pixel = pixel[0] as f32;
            let print_pixel = (gray_pixel * 256.0 / gauss_pixel) as u8;
            original_buf.put_pixel(
                x,
                y,
                image::Rgba([print_pixel, print_pixel, print_pixel, pixel[3]]),
            )
        }
    }
    original_buf.to_vec()
}
