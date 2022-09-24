import { toast, ToastPosition } from "react-toastify";

export const toasUtil = (title: string, position: ToastPosition = "top-right") => toast(title, {
  position,
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});