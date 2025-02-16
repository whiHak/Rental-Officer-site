import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
//   import { ICategory } from "@/lib/database/models/category.model";
  import { startTransition, useEffect, useState } from "react";
  import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog";
import { Input } from "./ui/input";
//   import { createCategory, getAllCategories } from "@/lib/actions/category.actions";
  
  type DropdownProps = {
    value?: string;
    onChangeHandler?: () => void;
  };
  
  const MakeDropdown = () => {
    // const [categories, setModels] = useState<ICategory[]>([]);
    // const [newCategory, setNewCategory] = useState("");
  
    // const handleAddCategory = () => {
    //   createModel({
    //     categoryName: newCategory.trim()
    //   }).then((model)=>{
    //     setModels((prevState) => [...prevState, model])
    //   })
    // }
  
    // useEffect(()=>{
    //   const getModels = async () => {
    //     const categoryList = await getAllModels();
  
    //     categoryList && setModels(categoryList as ICategory[]);
    //   }
    //     getModels();
    // },[])
  
    return (
      <Select >
        <SelectTrigger className="select-field ">
          <SelectValue placeholder="Maker" />
        </SelectTrigger>
        <SelectContent>
          {/* {categories.length > 0 &&
            categories.map((category) => (
              <SelectItem
                key={category._id}
                value={category.name}
                className="select-item p-regular-14"
              >
                {category.name}
              </SelectItem>
            ))} */}
          <AlertDialog>
            <AlertDialogTrigger className="p-medium-14 flex w-full rounded-sm py-3 pl-8 text-primary-500 hover:bg-primary-50 focus:text-primary-500">
              Add Maker
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-white">
              <AlertDialogHeader>
                <AlertDialogTitle>New Maker</AlertDialogTitle>
                <AlertDialogDescription>
                  {/* <Input
                    type="text"
                    placeholder="Category name"
                    className="input-field mt-3"
                    onChange={(e) => setNewCategory(e.target.value)}
                  /> */}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                {/* <AlertDialogAction onClick={()=> startTransition(handleAddCategory)}>Add</AlertDialogAction> */}
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SelectContent>
      </Select>
    );
  };
  
  export default MakeDropdown;
  