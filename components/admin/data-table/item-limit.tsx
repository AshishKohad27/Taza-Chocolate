"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

interface ItemLimitProps {
  handleLimits: Function;
}

export default function ItemLimit({ handleLimits }: ItemLimitProps) {
  const [position, setPosition] = React.useState(0);
  const [limits, setLimits] = React.useState<string>("0");
  useEffect(() => {
    handleLimits(limits);
  }, [limits]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="tc-btn tc-btn-input" type="button">
          Limits<span>{limits !== "0" ? `: ${limits}` : ""}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Page Limits</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={limits} onValueChange={setLimits}>
          <DropdownMenuRadioItem value="5">5</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="10">10</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="15">15</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
