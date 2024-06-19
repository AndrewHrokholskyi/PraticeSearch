import { useState } from "react";
import styled from "./profilephotouploader.module.scss";

const ProfilePhotoUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Обработчик выбора файла
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);

      // Создание предварительного просмотра изображения
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Обработчик отправки формы (здесь просто предотвращаем отправку)
  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно добавить логику для загрузки изображения на сервер или другой обработчик
    // console.log("Selected file:", selectedImage);
  };

  return (
    <div className={styled.foto}>
      <form onSubmit={handleSubmit}>
        <h3>Фото профілю</h3>
        <label>
          <input type="file" accept="image/*" onChange={handleFileChange} />
        </label>
        {preview && <img src={preview} alt="Preview" />}
        {/* <button type="submit">Загрузить</button> */}
      </form>
    </div>
  );
};
export default ProfilePhotoUploader;
// width="100" height="100"
