import React, { useState } from "react";
import { Select, Input, Space } from "antd";
import { countries } from "./countries";

export default function CountrySelect() {
  const [value, setValue] = useState("ge");

  const selectedCountry = countries.find((c) => c.code === value);

  const dropdownItems = countries.map((c) => ({
    value: c.code,
    label: (
      <div className="flex items-center gap-2">
        <img
          src={`https://flagcdn.com/24x18/${c.code.toLowerCase()}.png`}
          alt={c.name}
          width={16}
          height={16}
        />
        <span>{c.name}</span>
      </div>
    ),
  }));

  return (
    <Space.Compact className="w-full h-12">
      <Select
        value={value}
        onChange={setValue}
        options={dropdownItems}
        className="h-12 shadow-sm rounded-xl"
        dropdownMatchSelectWidth={200}
        placeholder="Select country"
        labelRender={() => (
          <img
            src={`https://flagcdn.com/24x18/${selectedCountry.code.toLowerCase()}.png`}
            alt={selectedCountry.name}
            width={30}
            height={30}
          />
        )}
      />

      <Input
        placeholder={selectedCountry.phone_code}
        className="rounded-xl shadow-sm h-12"
      />
    </Space.Compact>
  );
}
