import { memo } from "react";
import { useNotification } from "../hooks/useNotification";

interface NotificationButtonProps {
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

const NotificationButton: React.FC<NotificationButtonProps> = ({ 
  message = "✅ Operation completed successfully!",
  className = "register-btn",
  children = "Register"
}) => {
  const { showNotification } = useNotification();

  return (
    <button 
      className={className}
      onClick={() => showNotification(message)}
      type="button"
      aria-label="Submit registration"
    >
      {children}
    </button>
  );
}

export default memo(NotificationButton);
