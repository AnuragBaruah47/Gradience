import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { useState, useEffect } from "react";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

