import React, { useRef } from "react";
import s from "./Uploader.module.css";
import { Widget } from "@uploadcare/react-widget";

const Uploader = (props) => {
  const widgetApi = useRef();

  const getLoadInfo = (e) => {
    if (e) {
      e.done((file) => props.setUrlImg(file.cdnUrl));
    }
  };

  const validators = [maxDimensions(1900, 1080)];
  const errors = {
    errors: {
      dimensions: "Файл слишком большой...",
    },
    dialog: {
      tabs: {
        preview: {
          error: {
            dimensions: {
              title: "Title.",
              text: "Text.",
              back: "Back",
            },
          },
        },
      },
    },
  };

  function maxDimensions(width, height) {
    return function (fileInfo) {
      var imageInfo = fileInfo.originalImageInfo;
      if (imageInfo !== null) {
        if (imageInfo.width > width || imageInfo.height > height) {
          props.setErrorLoading(errors.errors.dimensions);
          throw new Error("dimensions");
        }
      }
    };
  }

  return (
    <div className={s.uploader}>
      <h1>Добывить резюме</h1>
      <p className={s.text}>
        Загружаемый файл не должен быть более 2 Мб, допустимый формат .jpeg,
        .jpg, .png.
      </p>
      
      <Widget
        ref={widgetApi}
        publicKey="ba7aaf87eb519a0b1269"
        clearable
        onFileSelect={getLoadInfo}
        validators={validators}
        localeTranslations={errors}
      />
      <div>
      <button onClick={props.setCloseUploader} className={s.close}>Закрыть</button>
      </div>
    </div>
  );
};

export default Uploader;
