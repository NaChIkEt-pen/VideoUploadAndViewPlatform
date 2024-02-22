import React, { useState } from "react";
import { atomWithStorage } from "jotai/utils";

export const userAuthAtom = atomWithStorage("isAuth", false);
export const userAuthId = atomWithStorage("userName", null);
