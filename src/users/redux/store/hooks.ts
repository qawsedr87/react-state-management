import { useDispatch } from "react-redux";
import { AppDispatch, AppThunkDispatch } from "./types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useThunkDispatch: () => AppThunkDispatch = useDispatch;