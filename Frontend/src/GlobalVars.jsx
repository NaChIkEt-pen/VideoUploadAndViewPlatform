import React, { useState } from "react";
import { atomWithStorage } from "jotai/utils";

export const userAuthAtom = atomWithStorage("isAuth", true);
export const userAuthId = atomWithStorage("userName", null);
