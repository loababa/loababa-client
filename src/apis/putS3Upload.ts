import axios from "axios";

export const putS3Upload = async (file: File, presignedUrl: string) => {
  try {
    const res = await axios.put(presignedUrl, file, {
      headers: {
        "Content-Type": file.type
      }
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};
