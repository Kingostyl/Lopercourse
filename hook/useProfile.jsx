import { useState, useEffect } from "react";

let useProfile = (userEmail) => {
  const [selectedImage, setSelectedImage] = useState(
    "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-image-icon-default-avatar-profile-icon-social-media-user-vector-image-209162840.jpg"
  );


  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataURL = event.target.result;
  
        localStorage.setItem('profileImage', dataURL);
  
        setSelectedImage(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    const storedImage = localStorage.getItem('profileImage');
    if (storedImage) {
      setSelectedImage(storedImage);
    }
  }, []);

  return { selectedImage, handleImageUpload };
};

export default useProfile;
