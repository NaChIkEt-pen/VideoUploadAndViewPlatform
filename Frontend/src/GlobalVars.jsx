import React, { useState } from "react";
import { atomWithStorage } from "jotai/utils";

export const userAuthAtom = atomWithStorage("todo", []);
