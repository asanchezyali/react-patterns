import { useEffect, useRef } from "react";
import { useNotification } from "../hooks/useNotification";

const Notification: React.FC = () => {
  const { message } = useNotification();
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (message && notificationRef.current) {
      // Ensure screen readers announce the notification
      notificationRef.current.focus();
    }
  }, [message]);

  if (!message) return null;

  return (
    <aside
      ref={notificationRef}
      role="alert"
      aria-live="polite"
      tabIndex={-1}
      className="notification"
    >
      <p>{message}</p>
    </aside>
  );
}

export default Notification;
