use image::{DynamicImage, ImageBuffer};
use wasm_bindgen::prelude::*;
use web_sys::ImageData;

/**
 * 绘画风格
 */
#[wasm_bindgen]
pub fn painting(image_data: ImageData, sigma: f32) -> Vec<u8> {
    let width = image_data.width();
    let height = image_data.height();
    let data = image_data.data().to_vec();
    _painting(width, height, data, sigma)
}

fn _painting(width: u32, height: u32, data: Vec<u8>, sigma: f32) -> Vec<u8> {
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

#[test]
fn test_painting() {
    use image::DynamicImage;
    use image::ImageBuffer;
    use std::time::Instant;
    let img = image::open("img/original/1.jpg").unwrap();
    let width = img.width();
    let height = img.height();
    let raw_pixels = img.to_rgba8().to_vec();
    let time1 = Instant::now();
    let result = _painting(width, height, raw_pixels, 25.0);
    let time2 = time1.elapsed();
    println!("test_painting time: {:?}", time2);
    let img_buffer = ImageBuffer::from_vec(width, height, result).unwrap();
    let save = DynamicImage::ImageRgba8(img_buffer);
    save.save("img/result/1_painting.jpg").unwrap();
}
