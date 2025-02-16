import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
//   import { ICategory } from "@/lib/database/models/category.model";
import { startTransition, useEffect, useState } from "react";
//   import { createCategory, getAllCategories } from "@/lib/actions/category.actions";

type DropdownProps = {
  value?: string;
  onChangeHandler?: () => void;
};

const DriveDropdown = () => {
  return (
    <Select>
      <SelectTrigger className="select-field ">
        <SelectValue placeholder="Drive" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="fwd" className="select-item p-regular-14">
          fwd
        </SelectItem>
        <SelectItem value="bwd" className="select-item p-regular-14">
          bwd
        </SelectItem>
        <SelectItem value="awd" className="select-item p-regular-14">
          awd
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DriveDropdown;
