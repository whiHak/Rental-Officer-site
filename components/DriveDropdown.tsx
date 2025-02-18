import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
          FWD
        </SelectItem>
        <SelectItem value="bwd" className="select-item p-regular-14">
          BWD
        </SelectItem>
        <SelectItem value="awd" className="select-item p-regular-14">
          AWD
        </SelectItem>
        <SelectItem value="4wd" className="select-item p-regular-14">
          4WD
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DriveDropdown;
