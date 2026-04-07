import { useFormContext } from "react-hook-form";

const MAX_SIZE = 2 * 1024 * 1024; // 2MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/gif"];

const UploadFiles = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const files = watch("uploadFiles") || [];

  const handleDeleteFile = (file) => {
    const newFiles = files.filter((item) => item.name !== file.name);
    setValue("uploadFiles", newFiles, { shouldValidate: true });
  };

  return (
    <>
      <div className="modal-body my-3 mx-md-5">
        <h5 className="my-2 text-primary">
          <i className="bi bi-file-earmark-arrow-up me-2"></i>上傳檔案
        </h5>
        <div className="mb-3">
          <input
            id="uploadFiles"
            type="file"
            multiple
            className={`d-none ${errors.uploadFiles ? "is-invalid" : ""}`}
            {...register("uploadFiles", {
              validate: (files) =>
                files?.length > 0 || "**請上傳檢查報告之圖片檔",
            })}
            onChange={(e) => {
              const selectedFiles = Array.from(e.target.files).filter(
                (file) => {
                  if (!ALLOWED_TYPES.includes(file.type)) {
                    alert(`${file.name} 格式不正確`);
                    return false;
                  }
                  if (file.size > MAX_SIZE) {
                    alert(`${file.name} 太大，請小於2MB`);
                    return false;
                  }
                  return true;
                },
              );

              const existingFiles = files;

              const newFiles = selectedFiles.filter(
                (newFile) =>
                  !existingFiles.some(
                    (file) =>
                      file.name === newFile.name && file.size === newFile.size,
                  ),
              );

              setValue("uploadFiles", [...existingFiles, ...newFiles], {
                shouldValidate: true,
              });

              e.target.value = "";
            }}
          />
          <div className="d-md-flex align-items-center">
            <p>
              請上傳體檢報告圖片檔案，檔案大小不得超過 2MB。
              <br />
              支援格式：JPG、JPEG、PNG、GIF
            </p>
            <label htmlFor="uploadFiles" className="btn btn-success mx-3 my-3">
              新增檔案
            </label>
          </div>
          {errors.uploadFiles && (
            <div className="invalid-feedback">{errors.uploadFiles.message}</div>
          )}
        </div>
        {files.length > 0 && (
          <div className="mt-2">
            {files.map((file, index) => (
              <div className="d-md-flex align-items-md-end my-2" key={index}>
                <img
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  className="object-fit-cover rounded-3 me-4"
                  style={{
                    width: "150px",
                    height: "150px",
                  }}
                />
                <p className="me-4 my-3 my-md-0">{file.name}</p>
                <button
                  type="button"
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteFile(file)}
                >
                  刪除
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UploadFiles;
