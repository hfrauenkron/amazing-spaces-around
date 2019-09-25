import React from "react";
import TextInput from "../components/TextInput";
import Badge from "../components/Badge";
import Price from "../components/Price";

export default function New() {
  return (
    <div>
      <div>
        Name:
        <TextInput />
      </div>
      <div>
        Categories:
        <Badge>#museum</Badge>
        <Badge>#garden</Badge>
        <Badge>#architecture</Badge>
      </div>
      <div>
        Price:
        <Price value={0} />
      </div>
    </div>
  );
}
