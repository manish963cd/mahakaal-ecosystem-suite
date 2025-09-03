import { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  title: string;
  description?: string;
  duration?: number;
}

interface ToastProps {
  message: ToastMessage;
  onClose: (id: string) => void;
}

const ToastItem = ({ message, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(message.id);
    }, message.duration || 5000);

    return () => clearTimeout(timer);
  }, [message.id, message.duration, onClose]);

  const getIcon = () => {
    switch (message.type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Info className="h-5 w-5 text-blue-500" />;
    }
  };

  const getBorderColor = () => {
    switch (message.type) {
      case 'success':
        return 'border-l-green-500';
      case 'error':
        return 'border-l-red-500';
      case 'warning':
        return 'border-l-yellow-500';
      default:
        return 'border-l-blue-500';
    }
  };

  return (
    <div className={`max-w-sm w-full bg-white shadow-strong rounded-lg pointer-events-auto border-l-4 ${getBorderColor()} animate-fade-in`}>
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {getIcon()}
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-gray-900">
              {message.title}
            </p>
            {message.description && (
              <p className="mt-1 text-sm text-gray-500">
                {message.description}
              </p>
            )}
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 transition-colors"
              onClick={() => onClose(message.id)}
            >
              <span className="sr-only">Close</span>
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

let toastMessages: ToastMessage[] = [];
let listeners: ((messages: ToastMessage[]) => void)[] = [];

const notifyListeners = () => {
  listeners.forEach(listener => listener([...toastMessages]));
};

export const showToast = (message: Omit<ToastMessage, 'id'>) => {
  const id = Math.random().toString(36).substr(2, 9);
  const newMessage = { ...message, id };
  toastMessages.push(newMessage);
  notifyListeners();
};

export const removeToast = (id: string) => {
  toastMessages = toastMessages.filter(message => message.id !== id);
  notifyListeners();
};

const Toast = () => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const listener = (newMessages: ToastMessage[]) => {
      setMessages(newMessages);
    };

    listeners.push(listener);

    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  return (
    <div className="fixed top-4 right-4 z-[100] space-y-4">
      {messages.map(message => (
        <ToastItem
          key={message.id}
          message={message}
          onClose={removeToast}
        />
      ))}
    </div>
  );
};

export default Toast;