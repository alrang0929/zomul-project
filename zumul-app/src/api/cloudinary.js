import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const App = ({width,height}) => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dv72ysqub' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(width).height(height)); // Transform the image: auto-crop to square aspect_ratio

  return (<AdvancedImage cldImg={img}/>);
};

export {App};