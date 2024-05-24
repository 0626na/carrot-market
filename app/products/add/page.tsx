"use client";

import Input from "@/components/Input";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { uploadProduct } from "./action";

const AddProduct = () => {
  const [preview, setPreview] = useState("");
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;

    if (!files) return;
    const file = files[0];
    const url = URL.createObjectURL(file);
    setPreview(url);
  };

  return (
    <div>
      <form className="flex flex-col gap-5 p-5" action={uploadProduct}>
        <label
          htmlFor="photo"
          className="border-2 aspect-square flex flex-col text-neutral-300 border-neutral-300 cursor-pointer rounded-md items-center justify-center border-dashed bg-center bg-cover"
          style={{
            backgroundImage: `url(${preview})`,
          }}
        >
          {preview === "" ? (
            <>
              <PhotoIcon className="w-20" />
              <div className="text-neutral-400 text-sm">
                사진을 추가해주세요.
              </div>
            </>
          ) : null}
        </label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          id="photo"
          className="hidden"
          onChange={onImageChange}
        />

        <Input name="title" required placeholder="제목" type="text" />
        <Input name="price" required placeholder="가격" type="text" />
        <Input
          name="description"
          type="text"
          required
          placeholder="제품 설명"
        />
        <button className="bg-orange-500 text-white p-2 rounded-md transition-colors active:bg-orange-400">
          작성 완료
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
