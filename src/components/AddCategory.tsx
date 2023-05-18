import { userCategoryState } from "../atoms";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";

interface IForm {
  userCategory: string;
}

function CreateCategory() {
  const setCustomCategory = useSetRecoilState(userCategoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onValid = ({ userCategory }: IForm) => {
    setCustomCategory((prevCategories) => [
      { title: userCategory, id: Date.now() },
      ...prevCategories,
    ]);
    setValue("userCategory", "");
  };
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input {...register("userCategory")} placeholder="Add New Category" />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
