import React, { useRef, useState } from "react";
import s from "./Uploader.module.css";
import { Widget } from "@uploadcare/react-widget";

const Uploader = (props) => {
  const widgetApi = useRef();
  // const [urlImg, setUrlImg] = useState("");
  const [errorLoading, steErrorLoading] = useState(null);
  const [isImage, setIsImage] = useState(null)

  const getLoadInfo = (e) => {
    if(e) {
      e.done((file) => props.setUrlImg(file.cdnUrl));
      e.done((file) => setIsImage(true));
      console.log(e.done((file) => console.log(file)));
    }
  };

  function maxDimensions(width, height) {
    return function(fileInfo) {
      var imageInfo = fileInfo.originalImageInfo;
      if (imageInfo !== null) {
        if (imageInfo.width > width || imageInfo.height > height) {
          throw new Error("dimensions");
        }
      }
    };
  }
  
  const validators = [maxDimensions(100, 100)];
  const errors = {
    errors: {
      dimensions: "Файл слишком большой..."
    },
    dialog: {
      tabs: {
        preview: {
          error: {
            dimensions: {
              title: "Title.",
              text: "Text.",
              back: "Back"
            }
          }
        }
      }
    }
  };
  return (
    <div className={s.uploader}>
      <h1>Add your image:</h1>
      <p>Загружаемый файл не должен быть более 2мб</p>
      <Widget
        ref={widgetApi}
        publicKey="ba7aaf87eb519a0b1269"
        clearable
        onFileSelect={getLoadInfo}
        validators={validators}
        localeTranslations={errors}
      />

    </div>
  );
};

export default Uploader;
