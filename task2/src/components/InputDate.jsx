import { useState } from "react";
import DatePicker from "react-datepicker";
import { Controller } from "react-hook-form";
import { FaRegCalendarAlt } from "react-icons/fa";
import "react-datepicker/dist/react-datepicker.css";

const InputDate = ({ control, error }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="border border-gray-300 rounded-xl px-4 focus-within:ring-1 focus-within:ring-blue-500">
        <div className="flex items-start justify-between pt-1 pb-2">
          <div className="flex flex-col">
            <label className="text-xs text-gray-500" htmlFor="thoiGianInput">
              Thời gian
            </label>
            <Controller
              control={control}
              name="thoiGian"
              render={({ field }) => (
                <DatePicker
                  id="thoiGianInput"
                  selected={field.value || null}
                  onChange={(date) => {
                    field.onChange(date);
                    setIsOpen(false);
                  }}
                  showTimeSelect
                  dateFormat="dd/MM/yyyy HH:mm:ss"
                  placeholderText="Chọn thời gian"
                  className="w-full outline-none bg-transparent text-sm font-semibold text-gray-800"
                  open={isOpen}
                  onClickOutside={() => setIsOpen(false)} 
                />
              )}
            />
          </div>
          <button
            type="button"
            className="my-auto text-gray-500"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle calendar"
          >
            <FaRegCalendarAlt className="text-lg" />
          </button>
        </div>
      </div>
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputDate;
