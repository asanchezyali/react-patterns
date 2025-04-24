import { useContext } from "react"
import { NotificationContext } from "../contexts/NotificationContext"

export function useNotification() {
  const context = useContext(NotificationContext);

  if (context === undefined) {
    throw new Error(
      "useNotification must be used within a NotificationProvider. " +
      "Make sure you have wrapped your app with <NotificationProvider>"
    );
  }

  return context;
}
