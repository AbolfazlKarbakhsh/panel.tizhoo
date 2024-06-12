import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Controller } from "react-hook-form";
import ErrorText from "@components/forms/errorText";
import useGetDataParams from "@hooks/useGetDataParams";

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(id, personName, theme) {
  return {
    fontWeight:
      personName.findIndex((item) => item === id) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip_Mui({
  baf,
  control,
  errors,
  editState,
}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [names] =
    useGetDataParams(
      [
        {
          paramUrl: "baseAndFieldId",
          paramKey: baf,
        },
      ],
      "Lesson/selectList",
      "Test_Get_Modal_selectListJoin"
    ) || [];

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  React.useEffect(() => {
      setPersonName([]);
  }, [baf]);

  React.useEffect(() => {
    setPersonName(
      editState !== "add" ? editState?.details?.map((i) => i.lessonId) : []
    );
  }, [editState]);


  return (
    <div className="rtl centerAll">
      {names && ( // اینجا چک می‌کنیم که مقدار names موجود باشد
        <FormControl sx={{ m: 1, width: "100%" }}>
          <InputLabel id="demo-multiple-chip-label" className="Fvazir">
            دروس
          </InputLabel>
          <Controller
            name="lessons"
            control={control}
            rules={{ required: "لطفا یک مقدار انتخاب کنید" }}
            defaultValue={editState?.details?.map((i) => i.lessonId)}
            render={({ field }) => (
              <Select
                {...field}
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                className="Fvazir"
                multiple
                value={personName}
                onChange={(event) => {
                  handleChange(event);
                  field.onChange(event);
                }}
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => {
                      const selectedItem = names.find(
                        (name) => name.id === value
                      );
                      return (
                        <Chip
                          key={value}
                          label={selectedItem?.name}
                          className="Fvazir"
                        />
                      );
                    })}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {names?.map((name) => (
                  <MenuItem
                    key={name.id}
                    value={name.id}
                    style={getStyles(name.id, personName, theme)}
                    className="rtl"
                  >
                    <span className="Fvazir"> {name.name}</span>
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.lessons && <ErrorText value={errors.lessons.message} />}
        </FormControl>
      )}
    </div>
  );
}
